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
      "Full-stack recommendation platform built on the MovieLens ml-32m dataset (32M ratings, 87,585 movies). Visitors sign in with Google and rate movies to get personalized picks from an offline-trained item-item collaborative filtering engine (asymmetric cosine similarity with MMR re-ranking for diversity), served client-side from a compact static neighbour table — no MovieLens user data ever reaches the browser. Built with Next.js 15, TypeScript, and NextAuth, backed by Cloudflare D1 and deployed on Cloudflare Workers.",
    tech: ["Next.js", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "NextAuth", "Tailwind CSS"],
    github: "https://github.com/enesscakmak/movie-recommendation-page",
    demo: "https://movie.enescakmak.net",
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
    title: "Movie Recommendation App (Java Desktop)",
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

export const projects = resumeProjectsData.map((project, index) => ({
  id: slugify(project.title),
  accentColor: PROJECT_ACCENT_PALETTE[index % PROJECT_ACCENT_PALETTE.length],
  ...project,
}))
