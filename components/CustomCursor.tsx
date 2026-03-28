'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const loop = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.28
      current.current.y += (pos.current.y - current.current.y) * 0.28

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${current.current.x}px, ${current.current.y}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: 'transform' }}
    >
      <div className="w-2 h-2 rounded-full bg-black mix-blend-difference" />
    </div>
  )
}
