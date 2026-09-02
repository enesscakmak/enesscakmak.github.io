"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectTiltCarousel } from "@/components/project-slider/project-tilt-carousel"
import { ProjectDetailsPanel } from "@/components/project-slider/project-details-panel"

const WHEEL_COOLDOWN_MS = 700
const WHEEL_TRIGGER_THRESHOLD = 180
const WHEEL_IDLE_RESET_MS = 350

export function ProjectSliderSection({ projects }) {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const [isDetailsOpen, setIsDetailsOpen] = useState(true)
  const containerRef = useRef(null)
  const wheelCooldownRef = useRef(false)
  const wheelAccumRef = useRef(0)
  const wheelIdleTimeoutRef = useRef(null)

  const focusIndex = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(projects.length - 1, index))
      setFocusedIndex(clamped)
      setIsDetailsOpen(true)
    },
    [projects.length]
  )

  useEffect(() => {
    if (!isDetailsOpen) return

    function handleOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsDetailsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [isDetailsOpen])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    function handleWheel(event) {
      // Always swallow the scroll so the page never scrolls while the
      // cursor is over the carousel — but require a deliberate, sustained
      // scroll gesture (not a small nudge) before it actually changes slides,
      // so users have room to hover and try the tilt/glare effect.
      event.preventDefault()
      if (wheelCooldownRef.current) return

      wheelAccumRef.current += event.deltaY

      window.clearTimeout(wheelIdleTimeoutRef.current)
      wheelIdleTimeoutRef.current = window.setTimeout(() => {
        wheelAccumRef.current = 0
      }, WHEEL_IDLE_RESET_MS)

      if (Math.abs(wheelAccumRef.current) < WHEEL_TRIGGER_THRESHOLD) return

      const direction = wheelAccumRef.current > 0 ? 1 : -1
      wheelAccumRef.current = 0
      wheelCooldownRef.current = true
      setFocusedIndex((current) => Math.max(0, Math.min(projects.length - 1, current + direction)))
      setIsDetailsOpen(true)
      window.setTimeout(() => {
        wheelCooldownRef.current = false
      }, WHEEL_COOLDOWN_MS)
    }

    el.addEventListener("wheel", handleWheel, { passive: false })
    return () => el.removeEventListener("wheel", handleWheel)
  }, [projects.length])

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      focusIndex(focusedIndex - 1)
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      focusIndex(focusedIndex + 1)
    } else if (event.key === "Escape" && isDetailsOpen) {
      setIsDetailsOpen(false)
    }
  }

  const focusedProject = projects[focusedIndex]

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-full min-w-0 overflow-x-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <ProjectTiltCarousel
        projects={projects}
        focusedIndex={focusedIndex}
        onFocusChange={focusIndex}
        onActivate={() => setIsDetailsOpen((open) => !open)}
      />

      <div className="mt-2 flex items-center justify-center gap-3">
        <Button variant="outline" size="icon" onClick={() => focusIndex(focusedIndex - 1)} aria-label="Previous project">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsDetailsOpen((open) => !open)}
          className="text-zinc-700 dark:text-zinc-300"
        >
          <Info className="mr-2 h-4 w-4" />
          {focusedProject.title.length > 28 ? `${focusedProject.title.slice(0, 28)}…` : focusedProject.title}
        </Button>
        <Button variant="outline" size="icon" onClick={() => focusIndex(focusedIndex + 1)} aria-label="Next project">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <ProjectDetailsPanel project={focusedProject} isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} />
    </div>
  )
}
