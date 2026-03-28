'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroImage() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  // Parallax — desktop only, direct DOM write (no re-renders)
  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches
    if (isMobile) return

    const onScroll = () => {
      if (!wrapperRef.current || !imgRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const offset = -rect.top * 0.07
      imgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6
    setTilt({ x, y })
  }

  const onMouseLeave = () => setTilt({ x: 0, y: 0 })

  const isResting = tilt.x === 0 && tilt.y === 0

  return (
    <div
      ref={wrapperRef}
      className="flex-1 w-full max-w-xl"
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: isResting
          ? 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
          : 'transform 0.12s ease-out',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src="/vishal.png"
          alt="Vishal Ranjan"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded">
          <p className="text-white text-sm font-medium uppercase tracking-widest">
            Currently Building{' '}
            <a href="https://digiaccel.in/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80 transition-opacity">@Digiaccel</a>
            {' '}and{' '}
            <a href="https://alterainstitute.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80 transition-opacity">@Altera</a>
          </p>
        </div>
      </div>
    </div>
  )
}
