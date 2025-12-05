'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export default function CountUp({ end, duration = 2000, prefix = '', suffix = '', decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1) // Cap at 1
      
      // Easing function (easeOutExpo)
      const easeOut = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
      }

      const nextCount = easeOut(percentage) * end
      setCount(nextCount)

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}
