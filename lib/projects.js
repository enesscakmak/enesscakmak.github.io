export const PROJECT_ACCENT_PALETTE = [
  "#f97362",
  "#22d3ee",
  "#a78bfa",
  "#facc15",
  "#4ade80",
  "#f472b6",
]

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const resumeProjectsData = [
  {
    title: "Project & Research Paper: Game Analysis with Image Processing",
    description:
      "End-to-end computer vision system that reads Okey tiles from a photo and recommends the optimal move. A two-stage hybrid pipeline pairs YOLOv8-Nano for localization (99.4% mAP50, 41ms) with ResNet-18 for classification (97.26% accuracy, 2.88ms), served from an isolated Flask API called directly by a Next.js client to bypass serverless cold starts. Game rules are solved in-browser with depth-first search and memoization, returning optimal 101-point and pair-opening strategies in under 10ms. Trained on a custom dataset of 4,432 labeled tiles across 55 classes, built with an OpenCV-assisted annotation pipeline that cut manual labeling from 50+ hours to about 1 hour. The React frontend allows real-time correction of misclassified tiles with instant recalculation, at 150-250ms end-to-end latency.",
    tech: ["Python", "YOLOv8", "ResNet-18", "OpenCV", "Flask", "Next.js", "TypeScript"],
    github: "https://github.com/enesscakmak/oyun-analizi",
    demo: "https://okey.enescakmak.net",
  },
  {
    title: "Movie Recommendation Web App",
    description:
      "Full-stack recommendation platform built on the MovieLens ml-32m dataset (32M ratings, 87,585 movies). Visitors sign in with Google to rate movies, build a watchlist, and browse the catalog with genre/decade/rating filters. Personalized picks come from an offline-trained item-item collaborative filtering engine (asymmetric cosine similarity with MMR re-ranking for diversity), served client-side from a compact static neighbour table — no MovieLens user data ever reaches the browser — with each recommendation paired with a short explanation of why it was picked. Every title has a details view with its synopsis, your own rating, and a live IMDb rating alongside a direct IMDb link, and a taste-profile page visualizes how your ratings break down by genre and decade. Built with Next.js (App Router) and TypeScript; ratings and watchlist data are stored per user in Cloudflare D1 via Auth.js's Google adapter, deployed to Cloudflare Workers through OpenNext.",
    tech: ["Next.js", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "Auth.js", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/enesscakmak/movie-recommendation-page",
    demo: "https://movie.enescakmak.net",
    image: "/movie-recommender-page.png",
  },
  {
    title: "To-Do App",
    description:
      "Full-featured to-do app with a REST API and React SPA served from a single Cloudflare Worker — one origin, no CORS, one deploy. Sign in with Google to manage tasks with tags, subtasks, due dates, and drag-and-drop reordering (via @dnd-kit, using float positions so reordering only touches the moved row). Deletes are soft, backing a trash view with undo. Built with Hono, Cloudflare D1 (SQLite) via Drizzle ORM, and Zod validation on the backend; React 19, TypeScript, Vite, Tailwind CSS 4, and Motion for animation on the frontend.",
    tech: ["Hono", "Cloudflare Workers", "Cloudflare D1", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/enesscakmak/to-do",
    demo: "https://todo.enescakmak.net",
    image: "/to-do-page.png",
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
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio application built with Next.js and React with interactive UI components and accessibility optimizations. Deployed on Cloudflare Pages with automated builds.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/enesscakmak/enesscakmak.github.io",
    demo: "https://enescakmak.net",
  },
]

export const projects = resumeProjectsData.map((project, index) => ({
  id: slugify(project.title),
  accentColor: PROJECT_ACCENT_PALETTE[index % PROJECT_ACCENT_PALETTE.length],
  ...project,
}))
