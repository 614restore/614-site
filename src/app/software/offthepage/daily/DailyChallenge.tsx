'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Copy, Lightbulb, Megaphone, Mic, RotateCcw, Share2, ShieldCheck, Square, UserCheck } from 'lucide-react'
import AppStoreButton from '@/components/AppStoreButton'
import {
  SECONDS, TONES, TONE_TITLES, TOO_SHORT_WORDS, TRACKS, TRACK_TITLES, contentParts, dayNumber, deliveryParts, fallbackVerdict,
  localDateString, overall, promptFor, words, type Judgement, type PitchPart, type Tone, type Track,
} from '@/lib/offthepage/daily'
import { buildShareQuery, shareParams, type Shared } from './share'

const APP_STORE_URL = 'https://apps.apple.com/us/app/off-the-page/id6834362817?pt=82404571&ct=614restore-offthepage-page'
const STORE_KEY = 'otp-daily-v1'
const TRACK_ICONS = { sell: Megaphone, explain: Lightbulb, interview: UserCheck }

type Phase = 'idle' | 'listening' | 'short' | 'scoring' | 'result'

type Result = {
  track: Track
  promptId: string
  score: number
  content: PitchPart[]
  delivery: PitchPart[]
  strength: string
  fix: string
  verdict: string
  wpm: number
  fillers: number
  transcript: string
  judgedByAI: boolean
  note?: string
}

type Saved = { tone?: Tone; streak?: number; lastDay?: number; results?: Record<string, { score: number; verdict: string }> }

// Minimal typing for the Web Speech API, which TypeScript's DOM library doesn't include.
type Recognition = {
  lang: string
  continuous: boolean
  interimResults: boolean
  processLocally?: boolean
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((event: { results: ArrayLike<{ isFinal: boolean; 0: { transcript: string } }> }) => void) | null
  onerror: ((event: { error: string }) => void) | null
  onend: (() => void) | null
}
type RecognitionClass = (new () => Recognition) & {
  available?: (options: { langs: string[]; processLocally: boolean }) => Promise<string>
}

function recognitionClass(): RecognitionClass | null {
  const w = window as unknown as { SpeechRecognition?: RecognitionClass; webkitSpeechRecognition?: RecognitionClass }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

function load(): Saved {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) ?? '{}') as Saved
  } catch {
    return {}
  }
}

function save(saved: Saved) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(saved))
  } catch {
    // Private windows can refuse storage; the game still works without it.
  }
}

/** Keeps today's first scored try per track (like the app) and the day streak. */
function record(result: Result, day: number): number {
  const saved = load()
  const results = saved.results ?? {}
  const slot = `${day}:${result.track}`
  if (!results[slot]) results[slot] = { score: result.score, verdict: result.verdict }
  let streak = saved.streak ?? 0
  if (saved.lastDay !== day) streak = saved.lastDay === day - 1 ? streak + 1 : 1
  for (const key of Object.keys(results)) if (Number(key.split(':')[0]) <= day - 14) delete results[key]
  save({ ...saved, streak, lastDay: day, results })
  return streak
}

function ScoreBar({ part }: { part: PitchPart }) {
  return (
    <li className="py-3">
      <div className="flex justify-between gap-4 font-semibold">
        <span>{part.name}</span>
        <span className="text-[#d6fa29] tabular-nums">{Math.round(part.score)}/10</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#d6fa29] to-[#2eebcc]" style={{ width: `${part.score * 10}%` }} />
      </div>
      {part.note && <p className="text-white/70 text-sm mt-2">{part.note}</p>}
    </li>
  )
}

export default function DailyChallenge() {
  const [today, setToday] = useState<string | null>(null)
  const [track, setTrack] = useState<Track>('sell')
  const [tone, setTone] = useState<Tone>('honest')
  const [phase, setPhase] = useState<Phase>('idle')
  const [support, setSupport] = useState<'checking' | 'yes' | 'no'>('checking')
  const [onDevice, setOnDevice] = useState(false)
  const [heard, setHeard] = useState('')
  const [timeLeft, setTimeLeft] = useState(SECONDS)
  const [problem, setProblem] = useState<string | null>(null)
  const [result, setResult] = useState<Result | null>(null)
  const [streak, setStreak] = useState(0)
  const [friend, setFriend] = useState<Shared | null>(null)
  const [shareNote, setShareNote] = useState<string | null>(null)

  const recognition = useRef<Recognition | null>(null)
  const listening = useRef(false)
  const earlier = useRef('') // text from recognizer sessions that already ended (browsers stop after a pause)
  const current = useRef('')
  const startedAt = useRef(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    setToday(localDateString())
    const saved = load()
    if (saved.tone && TONES.includes(saved.tone)) setTone(saved.tone)
    const day = dayNumber(localDateString())
    setStreak(saved.lastDay !== undefined && day - saved.lastDay <= 1 ? saved.streak ?? 0 : 0)
    const shared = shareParams(new URLSearchParams(window.location.search))
    if (shared) {
      setFriend(shared)
      setTrack(shared.track)
    }
    const SR = recognitionClass()
    if (!SR) {
      setSupport('no')
      return
    }
    setSupport('yes')
    // Chrome can do speech recognition on the device itself when its language pack is installed.
    SR.available?.({ langs: ['en-US'], processLocally: true })
      .then((status) => setOnDevice(status === 'available'))
      .catch(() => setOnDevice(false))
  }, [])

  const prompt = today ? promptFor(track, today) : null

  const chooseTone = (next: Tone) => {
    setTone(next)
    save({ ...load(), tone: next })
  }

  const clearTimer = () => {
    if (timer.current) clearInterval(timer.current)
    timer.current = null
  }

  const score = useCallback(
    async (transcript: string, seconds: number) => {
      if (!prompt || !today) return
      setPhase('scoring')
      const delivery = deliveryParts(transcript, seconds)
      let content = contentParts(track, prompt, transcript)
      let judgement: Judgement | null = null
      let note: string | undefined
      try {
        const reply = await fetch('/api/offthepage/score', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ track, promptId: prompt.id, tone, transcript }),
        })
        if (reply.ok) judgement = (await reply.json()) as Judgement
        else if (reply.status === 429) note = 'You’ve used today’s AI scores, so Zedd used his quick word checks for this one.'
        else note = 'Zedd’s AI judge is resting, so he used his quick word checks for this one.'
      } catch {
        note = 'Zedd couldn’t reach his AI judge, so he used his quick word checks for this one.'
      }
      if (judgement) content = judgement.parts
      const total = overall(content, delivery.parts)
      const all = [...content, ...delivery.parts]
      const best = all.reduce((a, b) => (b.score > a.score ? b : a), all[0])
      const worst = all.reduce((a, b) => (b.score < a.score ? b : a), all[0])
      const finished: Result = {
        track,
        promptId: prompt.id,
        score: total,
        content,
        delivery: delivery.parts,
        strength: judgement?.strength || best?.note || '',
        fix: judgement?.fix || worst?.note || '',
        verdict: judgement?.verdict || fallbackVerdict(total, tone, prompt.id + transcript),
        wpm: delivery.wpm,
        fillers: delivery.fillers,
        transcript,
        judgedByAI: Boolean(judgement),
        note,
      }
      setStreak(record(finished, dayNumber(today)))
      setResult(finished)
      setPhase('result')
    },
    [prompt, today, track, tone],
  )

  const finish = useCallback(() => {
    if (!listening.current) return
    listening.current = false
    clearTimer()
    recognition.current?.stop()
    const seconds = Math.min(SECONDS, (Date.now() - startedAt.current) / 1000)
    const transcript = (earlier.current + ' ' + current.current).replace(/\s+/g, ' ').trim()
    setHeard(transcript)
    if (words(transcript).length < TOO_SHORT_WORDS) {
      setPhase('short')
      return
    }
    void score(transcript, seconds)
  }, [score])

  useEffect(() => () => {
    listening.current = false
    clearTimer()
    recognition.current?.abort()
  }, [])

  const start = () => {
    const SR = recognitionClass()
    if (!SR) return
    setProblem(null)
    setResult(null)
    setHeard('')
    setShareNote(null)
    earlier.current = ''
    current.current = ''

    const begin = () => {
      const r = new SR()
      r.lang = 'en-US'
      r.continuous = true
      r.interimResults = true
      if (onDevice) r.processLocally = true
      r.onresult = (event) => {
        let text = ''
        for (let i = 0; i < event.results.length; i++) text += event.results[i][0].transcript + ' '
        current.current = text
        setHeard((earlier.current + ' ' + text).replace(/\s+/g, ' ').trim())
      }
      r.onerror = (event) => {
        if (event.error === 'no-speech' || event.error === 'aborted') return
        listening.current = false
        clearTimer()
        setPhase('idle')
        setProblem(
          event.error === 'not-allowed' || event.error === 'service-not-allowed'
            ? 'Zedd can’t hear you: the microphone is blocked. Allow the microphone for this site in your browser settings, then try again.'
            : event.error === 'network'
              ? 'Your browser’s speech recognition needs an internet connection. Check your connection and try again.'
              : 'Speech recognition stopped unexpectedly. Try again.',
        )
      }
      // Browsers end recognition after a pause; keep listening until the time is up.
      r.onend = () => {
        if (!listening.current) return
        earlier.current += ' ' + current.current
        current.current = ''
        try {
          begin()
        } catch {
          finish()
        }
      }
      recognition.current = r
      r.start()
    }

    try {
      listening.current = true
      begin()
    } catch {
      listening.current = false
      setProblem('Speech recognition couldn’t start. Reload the page and try again.')
      return
    }
    startedAt.current = Date.now()
    setTimeLeft(SECONDS)
    setPhase('listening')
    timer.current = setInterval(() => {
      const left = Math.max(0, SECONDS - (Date.now() - startedAt.current) / 1000)
      setTimeLeft(Math.ceil(left))
      if (left <= 0) finish()
    }, 200)
  }

  const reset = () => {
    setPhase('idle')
    setResult(null)
    setHeard('')
    setShareNote(null)
  }

  const shareUrl = result && today
    ? `${window.location.origin}/software/offthepage/daily?${buildShareQuery(result.track, result.promptId, result.score, result.verdict, today)}`
    : ''

  const share = async () => {
    if (!result) return
    const text = `I scored ${result.score} on today's Off the Page Daily Challenge (${TRACK_TITLES[result.track]}). Can you beat it?`
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Off the Page Daily Challenge', text, url: shareUrl })
        return
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
      }
    }
    await copyLink(text)
  }

  const copyLink = async (text?: string) => {
    try {
      await navigator.clipboard.writeText(text ? `${text} ${shareUrl}` : shareUrl)
      setShareNote('Link copied. Paste it anywhere.')
    } catch {
      setShareNote(shareUrl)
    }
  }

  const busy = phase === 'listening' || phase === 'scoring'
  const ring = 2 * Math.PI * 54

  return (
    <div className="pt-28 pb-16 text-white bg-gradient-to-b from-[#0d0a12] via-[#1b1030] to-[#291247]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <header className="flex items-center gap-4 mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/offthepage/zedd-head.png" alt="Zedd" width={72} height={80} className="w-16 h-auto shrink-0" />
          <div>
            <p className="text-[#d6fa29] font-extrabold tracking-wide text-sm">OFF THE PAGE · DAILY CHALLENGE</p>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold">30 seconds. Say it out loud.</h1>
            <p className="text-white/70 mt-1">Learn it. Say it. Land it. A new challenge every day, and Zedd scores you.</p>
          </div>
        </header>

        {friend && phase === 'idle' && (
          <div className="mb-6 rounded-2xl border border-[#d6fa29]/40 bg-[#d6fa29]/10 p-4">
            <p className="font-semibold">
              A friend scored <span className="text-[#d6fa29]">{friend.score}</span> on {TRACK_TITLES[friend.track]}.
              {friend.verdict && <span className="italic text-white/80"> Zedd said “{friend.verdict}”</span>} Can you beat it?
            </p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-2 mb-4" role="radiogroup" aria-label="Track">
          {TRACKS.map((t) => {
            const Icon = TRACK_ICONS[t]
            return (
              <button
                key={t}
                role="radio"
                aria-checked={track === t}
                disabled={busy}
                onClick={() => {
                  setTrack(t)
                  reset()
                }}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-xl px-2 py-3 font-semibold text-sm sm:text-base transition-colors disabled:opacity-50 ${
                  track === t ? 'bg-[#d6fa29] text-[#140b24]' : 'bg-white/10 hover:bg-white/15'
                }`}
              >
                <Icon className="w-5 h-5" aria-hidden />
                {TRACK_TITLES[t]}
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
          <span className="text-white/70">Zedd’s feedback:</span>
          {TONES.map((t) => (
            <button
              key={t}
              disabled={busy}
              aria-pressed={tone === t}
              onClick={() => chooseTone(t)}
              className={`rounded-full px-3 py-1 font-semibold border transition-colors disabled:opacity-50 ${
                tone === t ? 'border-[#2eebcc] bg-[#2eebcc]/15 text-[#2eebcc]' : 'border-white/20 hover:bg-white/10'
              }`}
            >
              {TONE_TITLES[t]}
            </button>
          ))}
          {tone === 'harsh' && <span className="text-white/60">Blunt about the pitch, never about you.</span>}
        </div>

        <section className="rounded-3xl bg-white/[0.06] border border-white/10 p-6 sm:p-8 mb-6" aria-live="polite">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-wide">Today · {TRACK_TITLES[track]}</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 min-h-[2.5rem]">{prompt?.prompt ?? ' '}</h2>
          {prompt?.buyer && (
            <p className="mt-3 text-white/80">
              <span className="font-semibold text-[#ff5fd2]">The buyer says:</span> “{prompt.buyer}”
            </p>
          )}

          {support === 'no' && (
            <div className="mt-6 rounded-2xl bg-[#ff5fd2]/10 border border-[#ff5fd2]/40 p-4">
              <p className="font-semibold">This browser can’t turn speech into text, so Zedd can’t hear you here.</p>
              <p className="text-white/80 mt-1">
                Open this page in Chrome or Safari, or play the Daily Challenge in the Off the Page app on iPhone or iPad.
              </p>
            </div>
          )}

          {support === 'yes' && (phase === 'idle' || phase === 'short') && (
            <div className="mt-6">
              {phase === 'short' && (
                <p className="mb-4 rounded-xl bg-white/10 p-3">
                  I only caught {words(heard).length} word{words(heard).length === 1 ? '' : 's'}. That one doesn’t count. Give me at
                  least {TOO_SHORT_WORDS} words and try again!
                </p>
              )}
              <button
                onClick={start}
                disabled={!prompt}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d6fa29] text-[#140b24] font-extrabold text-lg px-8 py-4 hover:brightness-95 disabled:opacity-50"
              >
                <Mic className="w-6 h-6" aria-hidden /> {phase === 'short' ? 'Try again' : 'Start talking'}
              </button>
              <p className="text-white/60 text-sm mt-3">You get {SECONDS} seconds. Your browser will ask to use the microphone.</p>
            </div>
          )}

          {phase === 'listening' && (
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-32 h-32 shrink-0" aria-label={`${timeLeft} seconds left`}>
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
                  <circle
                    cx="60" cy="60" r="54" fill="none" stroke="#d6fa29" strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={ring} strokeDashoffset={ring * (1 - timeLeft / SECONDS)}
                    style={{ transition: 'stroke-dashoffset 0.2s linear' }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold tabular-nums">{timeLeft}</span>
              </div>
              <div className="flex-1 w-full">
                <p className="text-white/60 text-sm mb-1">Listening…</p>
                <p className="min-h-[4rem] text-lg">{heard || <span className="text-white/40">Start talking. Your words show up here.</span>}</p>
                <button
                  onClick={finish}
                  className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 font-semibold hover:bg-white/10"
                >
                  <Square className="w-4 h-4" aria-hidden /> I’m done
                </button>
              </div>
            </div>
          )}

          {phase === 'scoring' && <p className="mt-6 text-lg animate-pulse">Zedd is judging…</p>}

          {problem && <p className="mt-4 rounded-xl bg-[#ff5fd2]/15 p-3">{problem}</p>}
        </section>

        {phase === 'result' && result && prompt && (
          <section className="rounded-3xl bg-white/[0.06] border border-white/10 p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-6">
              <div className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-[#d6fa29] to-[#2eebcc] bg-clip-text text-transparent tabular-nums">
                {result.score}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/offthepage/zedd-head.png" alt="" width={90} height={100} className="w-20 sm:w-24 h-auto" />
            </div>
            <p className="text-2xl italic font-semibold mt-4">“{result.verdict}”</p>
            {streak > 1 && <p className="mt-2 font-bold text-orange-400">🔥 {streak} day streak</p>}
            {result.note && <p className="mt-3 text-white/60 text-sm">{result.note}</p>}

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-2xl bg-[#d6fa29]/10 p-4">
                <p className="text-[#d6fa29] font-bold text-sm uppercase">What worked</p>
                <p className="mt-1">{result.strength}</p>
              </div>
              <div className="rounded-2xl bg-[#ff5fd2]/10 p-4">
                <p className="text-[#ff5fd2] font-bold text-sm uppercase">Fix next time</p>
                <p className="mt-1">{result.fix}</p>
              </div>
            </div>

            <h3 className="font-bold mt-6">Content <span className="text-white/50 font-normal text-sm">· 75% of the score</span></h3>
            <ul className="divide-y divide-white/10">{result.content.map((p) => <ScoreBar key={p.name} part={p} />)}</ul>
            <h3 className="font-bold mt-4">Delivery <span className="text-white/50 font-normal text-sm">· 25% of the score</span></h3>
            <ul className="divide-y divide-white/10">{result.delivery.map((p) => <ScoreBar key={p.name} part={p} />)}</ul>
            <p className="text-white/60 text-sm mt-2">
              {result.wpm ? `${result.wpm} words a minute` : 'Pace not measured'} · {result.fillers} filler word{result.fillers === 1 ? '' : 's'}
            </p>

            {prompt.keyPoints && (
              <div className="mt-6">
                <h3 className="font-bold">The key points</h3>
                <ul className="list-disc pl-5 text-white/80 mt-1">{prompt.keyPoints.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            )}
            {prompt.tips && (
              <div className="mt-6">
                <h3 className="font-bold">A strong answer</h3>
                <ul className="list-disc pl-5 text-white/80 mt-1">{prompt.tips.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            )}

            <details className="mt-6">
              <summary className="cursor-pointer text-white/70">What Zedd heard</summary>
              <p className="mt-2 text-white/80">{result.transcript}</p>
            </details>

            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={share}
                className="inline-flex items-center gap-2 rounded-xl bg-[#d6fa29] text-[#140b24] font-bold px-5 py-3 hover:brightness-95"
              >
                <Share2 className="w-5 h-5" aria-hidden /> Share my score
              </button>
              <button
                onClick={() => copyLink()}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 font-semibold px-5 py-3 hover:bg-white/10"
              >
                <Copy className="w-5 h-5" aria-hidden /> Copy link
              </button>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 font-semibold px-5 py-3 hover:bg-white/10"
              >
                <RotateCcw className="w-5 h-5" aria-hidden /> Try again
              </button>
            </div>
            {shareNote && <p className="mt-3 text-sm text-white/70 break-all">{shareNote}</p>}

            <div className="mt-8 rounded-2xl bg-white/[0.06] p-5 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/offthepage/zedd.png" alt="" className="w-20 h-20 rounded-full border-4 border-[#d6fa29] bg-white/10" />
              <div className="flex-1">
                <p className="font-bold">Practice every day in the app</p>
                <p className="text-white/70 text-sm mt-1">
                  Off the Page has the Daily Challenge, Interview Practice, flashcards and more. Free for 3 days, then one price, no subscription.
                </p>
              </div>
              <AppStoreButton href={APP_STORE_URL} app="Off the Page" placement="daily-result" className="!bg-white !text-[#140b24] hover:!bg-white/90" />
            </div>
          </section>
        )}

        <p className="flex gap-2 text-sm text-white/70">
          <ShieldCheck className="w-5 h-5 shrink-0 text-[#2eebcc]" aria-hidden />
          <span>
            {onDevice
              ? 'Your voice stays on your device. Only the words you said are sent to be scored, and they aren’t stored.'
              : 'We never receive your voice: your browser turns it into words (some browsers use their maker’s speech service for this). Only the words you said are sent to be scored, and they aren’t stored.'}{' '}
            <a href="/software/offthepage/privacy#daily-challenge" className="underline hover:text-white">Privacy</a>
          </span>
        </p>
      </div>
    </div>
  )
}
