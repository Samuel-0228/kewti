"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import mascotImage from "./mascot.png"

interface KewtiMascotProps {
  className?: string
  style?: React.CSSProperties
  focused?: boolean
  compact?: boolean
}

export default function KewtiMascot({
  className,
  style,
  focused = false,
  compact = false,
}: KewtiMascotProps) {
  const [eyePosition, setEyePosition] = React.useState({ x: 0, y: 0 })
  const mascotRef = React.useRef<HTMLDivElement>(null)
  const mouseTarget = React.useRef({ x: 0, y: 0 })
  const currentEye = React.useRef({ x: 0, y: 0 })

  React.useEffect(() => {
    let animationFrame: number

    const animate = () => {
      currentEye.current.x +=
        (mouseTarget.current.x - currentEye.current.x) * 0.12
      currentEye.current.y +=
        (mouseTarget.current.y - currentEye.current.y) * 0.12

      setEyePosition({
        x: currentEye.current.x,
        y: currentEye.current.y,
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mascotRef.current) return

      const rect = mascotRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY

      mouseTarget.current = {
        x: Math.max(-6, Math.min(6, dx * 0.02)),
        y: Math.max(-3, Math.min(3, dy * 0.02)),
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const sizeClass = compact
    ? "h-52 w-52 sm:h-60 sm:w-60"
    : "h-56 w-56 sm:h-72 sm:w-72"

  return (
    <div
      className={cn("mx-auto flex items-center justify-center", className)}
      style={style}
    >
      <div
        ref={mascotRef}
        className={cn(
          "relative flex animate-kewti-float items-center justify-center transition-transform duration-300",
          focused && "scale-105",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full border border-dashed border-[var(--kewti-border)] animate-kewti-spin-reverse",
            compact ? "-inset-3" : "-inset-4",
          )}
          aria-hidden
        />
        <div
          className={cn(
            "absolute inset-0 rounded-full border border-transparent border-t-[var(--kewti-green)] border-r-[var(--kewti-gold)] animate-kewti-spin",
            compact ? "-inset-1.5" : "-inset-2",
          )}
          aria-hidden
        />

        <div
          className={cn(
            "relative flex items-center justify-center overflow-hidden rounded-full border-2 border-[var(--kewti-border)] bg-[radial-gradient(circle_at_40%_40%,#2a2a2a,#111)] shadow-2xl",
            sizeClass,
          )}
        >
          <img
            src={mascotImage}
            alt="Kewti mascot"
            className="h-full w-full object-cover"
            loading="lazy"
          />

          <div
            className="pointer-events-none absolute inset-0"
            data-eyes-container="true"
          >
            <div
              className="absolute size-2 rounded-full border border-black bg-black shadow-md"
              style={{
                left: "40%",
                top: "52%",
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px) scale(1.05)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <span
                className="absolute size-0.5 rounded-full bg-white"
                style={{ top: "2px", left: "2px" }}
              />
            </div>
            <div
              className="absolute size-2 rounded-full border border-black bg-black shadow-md"
              style={{
                right: "40%",
                top: "52%",
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px) scale(1.05)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <span
                className="absolute size-0.5 rounded-full bg-white"
                style={{ top: "2px", left: "2px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
