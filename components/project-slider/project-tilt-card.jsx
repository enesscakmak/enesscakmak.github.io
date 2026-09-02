"use client"

import { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const MAX_TILT_DEG = 12
const TOUCH_SWIPE_THRESHOLD = 10

export function ProjectTiltCard({ project, isFocused, onFocus, onActivate }) {
  const cardRef = useRef(null)
  const glareRef = useRef(null)
  const touchStateRef = useRef(null)

  function applyTilt(clientX, clientY) {
    const card = cardRef.current
    const glare = glareRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const px = (clientX - rect.left) / rect.width
    const py = (clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * MAX_TILT_DEG * 2
    const rotateX = (0.5 - py) * MAX_TILT_DEG * 2

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`

    if (glare) {
      glare.style.opacity = "0.65"
      glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.6), transparent 55%)`
    }
  }

  function resetTilt() {
    const card = cardRef.current
    const glare = glareRef.current
    if (card) card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    if (glare) glare.style.opacity = "0"
  }

  function handleMouseMove(event) {
    if (!isFocused) return
    applyTilt(event.clientX, event.clientY)
  }

  function handleMouseLeave() {
    resetTilt()
  }

  function handleTouchStart(event) {
    if (!isFocused) return
    const touch = event.touches[0]
    touchStateRef.current = { x: touch.clientX, y: touch.clientY, swiping: false }
    applyTilt(touch.clientX, touch.clientY)
  }

  function handleTouchMove(event) {
    if (!isFocused) return
    const state = touchStateRef.current
    if (!state || state.swiping) return

    const touch = event.touches[0]
    const dx = touch.clientX - state.x
    const dy = touch.clientY - state.y

    if (Math.hypot(dx, dy) > TOUCH_SWIPE_THRESHOLD) {
      state.swiping = true
      resetTilt()
      return
    }

    applyTilt(touch.clientX, touch.clientY)
  }

  function handleTouchEnd() {
    touchStateRef.current = null
    resetTilt()
  }

  return (
    <button
      ref={cardRef}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onClick={() => (isFocused ? onActivate() : onFocus())}
      className={cn(
        "relative flex min-h-[380px] w-full flex-col overflow-hidden rounded-2xl border p-6 text-left transition-[opacity,transform,box-shadow] duration-300 ease-out will-change-transform",
        isFocused
          ? "scale-100 border-zinc-200 bg-white opacity-100 shadow-2xl dark:border-zinc-700 dark:bg-zinc-900"
          : "scale-[0.88] border-zinc-200/60 bg-white/70 opacity-45 dark:border-zinc-800/60 dark:bg-zinc-900/70"
      )}
      style={{
        boxShadow: isFocused ? `0 25px 60px -25px ${project.accentColor}80` : undefined,
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
      />

      {project.image && (
        <div className="relative mb-4 h-36 w-full overflow-hidden rounded-xl">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      )}

      <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
      <p className="mb-4 line-clamp-[8] text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full px-2 py-0.5 text-[11px] font-medium"
            style={{ backgroundColor: `${project.accentColor}1f`, color: project.accentColor }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{ mixBlendMode: "overlay" }}
      />
    </button>
  )
}
