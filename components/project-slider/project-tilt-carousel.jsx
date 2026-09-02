"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { ProjectTiltCard } from "@/components/project-slider/project-tilt-card"

export function ProjectTiltCarousel({ projects, focusedIndex, onFocusChange, onActivate }) {
  const [api, setApi] = useState(null)

  useEffect(() => {
    if (!api) return

    const handleSelect = () => onFocusChange(api.selectedScrollSnap())
    api.on("select", handleSelect)
    return () => api.off("select", handleSelect)
  }, [api, onFocusChange])

  useEffect(() => {
    if (!api) return
    if (api.selectedScrollSnap() !== focusedIndex) {
      api.scrollTo(focusedIndex)
    }
  }, [api, focusedIndex])

  return (
    <Carousel setApi={setApi} opts={{ align: "center", loop: false }} className="w-full min-w-0 px-10">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={project.id} className="basis-[85%] py-4 sm:basis-3/5 md:basis-[45%]">
            <ProjectTiltCard
              project={project}
              isFocused={index === focusedIndex}
              onFocus={() => onFocusChange(index)}
              onActivate={onActivate}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  )
}
