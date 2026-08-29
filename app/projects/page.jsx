import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"

const resumeProjects = [
  {
    title: "Project & Research Paper: Game Analysis with Image Processing",
    description:
      "End-to-end computer vision system that reads Okey tiles from a photo and recommends the optimal move. A two-stage hybrid pipeline pairs YOLOv8-Nano for localization (99.4% mAP50, 41ms) with ResNet-18 for classification (97.26% accuracy, 2.88ms), served from an isolated Flask API called directly by a Next.js client to bypass serverless cold starts. Game rules are solved in-browser with depth-first search and memoization, returning optimal 101-point and pair-opening strategies in under 10ms. Trained on a custom dataset of 4,432 labeled tiles across 55 classes, built with an OpenCV-assisted annotation pipeline that cut manual labeling from 50+ hours to about 1 hour. The React frontend allows real-time correction of misclassified tiles with instant recalculation, at 150-250ms end-to-end latency.",
    tech: ["Python", "YOLOv8", "ResNet-18", "OpenCV", "Flask", "Next.js", "TypeScript"],
    github: "https://github.com/enesscakmak/oyun-analizi",
    demo: "https://okey.enescakmak.net",
  },
  {
    title: "Publication: Healthcare Sentiment Analysis with NLP",
    description:
      "Co-authored an NLP research paper published in “Yapay Zeka Tabanlı Sistemler: Teori, Uygulama ve Gelecek Perspektifleri-2” (BIDGE Yayınları), processing 12,600+ patient reviews collected from the NHS and RateMDs APIs and achieving a 76% F1-score with RoBERTa.",
    tech: ["Python", "NLP", "RoBERTa", "Transformers"],
  },
  {
    title: "Research Paper: Suicide Content Detection with Deep Learning",
    description:
      "Authored a research paper on detecting suicidal intent in social media posts using deep learning models, implementing and comparing two novel models and achieving 97% accuracy. Conducted data preprocessing, feature extraction, and model evaluation.",
    tech: ["Python", "Deep Learning", "NLP"],
  },
  {
    title: "Movie Recommendation App",
    description:
      "Java desktop application built with JavaFX (FXML, SceneBuilder) that recommends films from the MovieLens dataset, implementing collaborative filtering with cosine similarity over user ratings. Includes registration and login with JSON-based persistence, built with Maven.",
    tech: ["Java", "JavaFX", "Maven", "Collaborative Filtering"],
    github: "https://github.com/enesscakmak/movie-recommendation-java",
    image: "/movie-recommendation-app.png",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio application built with Next.js and React with interactive UI components and accessibility optimizations. Deployed on Cloudflare Pages with automated builds.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/enesscakmak/enesscakmak.github.io",
    demo: "https://enescakmak.net",
  },
]

const moreProjects = [
  {
    title: "Weather Page",
    description: "A website made with Flask and Tailwind CSS to see the current weather status with Open Weather Map API.",
    tech: ["HTML", "Python", "Tailwind CSS", "Flask"],
    image: "/weather.png",
    github: "https://github.com/enesscakmak/weather-app",
    demo: "https://enescakmak.net/weather/templates/",
  },
  {
    title: "Multiplayer Bomberman Variation Game",
    description: "Multiplayer game based on Bomberman. Made with Unity and PUN2.",
    tech: ["C#", "Unity"],
    image: "/bomberman.png",
    github: "https://github.com/enesscakmak/online-bomberman-variation",
  },
  {
    title: "To-Do Page and App",
    description: "To-Do app made with Python Tkinter and website made using Flask, SQL and Bootstrap.",
    tech: ["HTML", "Bootstrap", "JavaScript", "Python", "Flask", "SQL"],
    github: "https://github.com/enesscakmak/to-do",
  },
  {
    title: "Library Page",
    description: "A library website created with HTML, CSS, and JavaScript. It's designed to help you manage a collection of books with titles, authors, and ratings.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
    github: "https://github.com/enesscakmak/library-website",
  },
  {
    title: "CV Builder",
    description: "CV Builder made with Java that automatically places the information you provide into templates you choose or create yourself.",
    tech: ["Java", "JavaFX", "CSS"],
    github: "https://github.com/enesscakmak/cv-builder",
  },
]

function ProjectCard({ project }) {
  return (
    <Card
      className="bg-white/80 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700
        transition-all duration-300 hover:scale-[1.05] hover:shadow-xl"
    >
      <div className="grid md:grid-cols-[1.2fr,2fr] gap-6">
        {project.image && (
          <div className="relative p-6 flex items-center justify-center">
            <div className="w-[300px] h-[200px] relative rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="rounded-xl object-cover transition-transform duration-300 hover:scale-125"
                priority
              />
            </div>
          </div>
        )}
        <div className={`p-6 ${!project.image && "md:col-span-2"}`}>
          <div className="inline-block">
            <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-50 transition-all duration-300 hover:scale-105 transform-gpu origin-center">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 transition-all duration-300 hover:text-zinc-900 dark:hover:text-zinc-50">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full
                  transition-all duration-300 hover:scale-125"
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
                className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300
                  hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-transform duration-300 hover:scale-110"
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
                className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200
                  text-zinc-50 dark:text-zinc-900 transition-transform duration-300 hover:scale-110"
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <Sidebar />
      <main className="flex-1 relative z-10">
        <div className="container px-8 py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8">
              <div>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl mb-4 text-zinc-900 dark:text-zinc-50">Projects</h1>
                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">
                  Selected work spanning backend services, computer vision, research publications, and full-stack web applications.
                </p>
              </div>

              <div className="grid gap-6">
                {resumeProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>

              <div className="pt-4">
                <h2 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">More projects</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  Additional projects from earlier coursework and personal experiments.
                </p>
                <div className="grid gap-6">
                  {moreProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
