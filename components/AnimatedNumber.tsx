'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  from: number
  to: number
  stepMs?: number
  suffix?: string
  className?: string
}

export default function AnimatedNumber({ from, to, stepMs = 70, suffix = '', className = '' }: Props) {
  const [value, setValue] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const step = to > from ? 1 : -1
          const steps = Math.abs(to - from)
          let i = 0

          const tick = () => {
            i++
            setValue(from + step * i)
            if (i < steps) {
              // slightly slow down near the end for airport-board feel
              const delay = i > steps - 4 ? stepMs * (1 + (i - (steps - 4)) * 0.4) : stepMs
              setTimeout(tick, delay)
            }
          }

          setTimeout(tick, stepMs)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [from, to, stepMs])

  return (
    <span ref={ref} className={className}>
      {value}{suffix}
    </span>
  )
}
