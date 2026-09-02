"use client"

import { Github, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProjectDetailsPanel({ project, isOpen, onClose }) {
  return (
    <div
      className={cn(
        "grid transition-all duration-300 ease-out",
        isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
      )}
      aria-hidden={!isOpen}
    >
      <div className="overflow-hidden">
        {project && (
          <div
            className="relative rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/50 p-6
              transition-transform duration-300 ease-out"
            style={{ transform: isOpen ? "translateY(0)" : "translateY(-8px)" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              aria-label="Close details"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="text-lg font-semibold mb-2 pr-8 text-zinc-900 dark:text-zinc-50">{project.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.github && (
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button
                  size="sm"
                  asChild
                  className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-900"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
