import { useEffect, useRef, useState } from "react"

export function KewtiCursor() {
  const [enabled, setEnabled] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    let frame = 0
    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top = `${ring.current.y}px`
      }
      frame = requestAnimationFrame(animateRing)
    }

    window.addEventListener("mousemove", onMove)
    frame = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--kewti-cream)] mix-blend-difference"
        style={{ top: 0, left: 0 }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(245,240,235,0.5)]"
        style={{ top: 0, left: 0 }}
        aria-hidden
      />
    </>
  )
}
