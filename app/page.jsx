import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";
import { withBasePath } from "@/utils/path";

const resumeProjectCards = [
	{
		title: "Movie Recommendation Web App",
		description:
			"Full-stack recommendation platform on the MovieLens ml-32m dataset (32M ratings). Sign in with Google and rate movies to get personalized picks from an offline-trained item-item CF engine served as a static lookup table, deployed on Cloudflare Workers with D1.",
		tags: ["Next.js", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "NextAuth"],
		link: "https://github.com/enesscakmak/movie-recommendation-page",
	},
	{
		title: "Project & Research Paper: Game Analysis with Image Processing",
		description:
			"Computer vision system that reads Okey tiles from a photo and recommends the optimal move, using YOLOv8-Nano detection (99.4% mAP50) plus ResNet-18 classification (97.26%), with a DFS + memoization solver running in-browser under 10ms.",
		tags: ["Python", "YOLOv8", "OpenCV", "Flask", "Next.js"],
		link: "https://github.com/enesscakmak/oyun-analizi",
	},
	{
		title: "Publication: Healthcare Sentiment Analysis with NLP",
		description:
			"Co-authored an NLP paper published by BIDGE Yayınları, processing 12,600+ patient reviews from the NHS and RateMDs APIs and reaching a 76% F1-score with RoBERTa.",
		tags: ["Python", "NLP", "RoBERTa"],
	},
	{
		title: "Research Paper: Suicide Content Detection",
		description:
			"Authored a research paper on detecting suicidal intent in social media posts with deep learning, comparing two novel models and achieving 97% accuracy.",
		tags: ["Python", "Deep Learning", "NLP"],
	},
	{
		title: "To-Do App",
		description:
			"Full-featured to-do app — REST API + React SPA on a single Cloudflare Worker. Google sign-in, tags, subtasks, drag-and-drop reordering, and soft-delete with trash/undo, backed by Cloudflare D1 via Drizzle ORM.",
		tags: ["Hono", "Cloudflare Workers", "Cloudflare D1", "React", "TypeScript"],
		link: "https://github.com/enesscakmak/to-do",
	},
];

const moreProjectCards = [
	{
		title: "Weather Page",
		description:
			"Weather status website built with Flask, Tailwind CSS, and the OpenWeatherMap API.",
		tags: ["Python", "Flask", "Tailwind CSS"],
		link: "https://github.com/enesscakmak/weather-app",
	},
	{
		title: "CV Builder",
		description:
			"Java desktop app that fills CV templates from user-provided information.",
		tags: ["Java", "JavaFX", "CSS"],
		link: "https://github.com/enesscakmak/cv-builder",
	},
	{
		title: "Movie Recommendation App (Java Desktop)",
		description:
			"Java desktop app built with JavaFX that recommends films from the MovieLens dataset using collaborative filtering and cosine similarity, with JSON-based user accounts.",
		tags: ["Java", "JavaFX", "Maven"],
		link: "https://github.com/enesscakmak/movie-recommendation-java",
	},
	{
		title: "Multiplayer Bomberman Variation Game",
		description:
			"Multiplayer game based on Bomberman, built with Unity and PUN2.",
		tags: ["C#", "Unity"],
		link: "https://github.com/enesscakmak/online-bomberman-variation",
	},
];

export default function Home() {
	return (
		<div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
			<div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />

			<Sidebar />
			<main className="flex-1 relative z-10">
				<section className="relative min-h-screen">
					<div className="absolute left-0 right-0 top-0 h-96 bg-gradient-to-b from-zinc-50 to-transparent dark:from-zinc-900" />
					<div className="container relative px-4 pt-36 md:px-8">
						<div className="mx-auto max-w-3xl space-y-8">
							<div className="space-y-6">
								<h1 className="text-xl font-semibold tracking-tight sm:text-xl lg:text-6xl text-zinc-900 dark:text-zinc-50">
									enes çakmak
								</h1>
								<p className="max-w-[60ch] text-base text-zinc-600 dark:text-zinc-400">
									Hi, I'm Enes Çakmak, a Computer Engineering
									graduate from Marmara University seeking a
									Junior Backend or Full-Stack Developer role.
									I build internal services and REST APIs with
									.NET 10, C#, and Kotlin with Spring Boot on
									PostgreSQL, and ship production frontends with
									React and TypeScript.
								</p>
							</div>
							<div className="flex items-center gap-4">
								<Button
									size="lg"
									asChild
									className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200
                    text-zinc-50 dark:text-zinc-900"
								>
									<Link href={withBasePath("/projects")}>
										View Projects{" "}
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button
									variant="secondary"
									size="lg"
									asChild
									className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700
                    text-zinc-900 dark:text-zinc-50"
								>
									<Link href="/contact">Get in Touch</Link>
								</Button>
							</div>
						</div>

						<div className="mx-auto max-w-5xl space-y-8 mt-96">
							<div className="flex items-center justify-between">
								<h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
									Featured Project
								</h2>
								<Link
									href="/projects"
									className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
								>
									View All Projects
								</Link>
							</div>
							<FeaturedProject />
						</div>
					</div>
				</section>

				<section id="projects" className="py-24 lg:py-32">
					<div className="container px-4 md:px-8">
						<div className="mx-auto max-w-5xl space-y-8">
							<div className="flex items-center justify-between space-y-4">
								<h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50">
									Projects
								</h2>
								<Link
									href="/projects"
									className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
								>
									View All Projects
								</Link>
							</div>
							<p className="text-zinc-600 dark:text-zinc-400">
								Highlighted work from my resume and recent
								development
							</p>
							<div className="grid gap-8 md:grid-cols-2">
								{resumeProjectCards.map((project) => (
									<ProjectCard
										key={project.title}
										{...project}
									/>
								))}
							</div>

							<div className="pt-8 space-y-4">
								<h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
									More projects
								</h3>
								<p className="text-sm text-zinc-600 dark:text-zinc-400">
									Earlier coursework and personal experiments
								</p>
								<div className="grid gap-8 md:grid-cols-2">
									{moreProjectCards.map((project) => (
										<ProjectCard
											key={project.title}
											{...project}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="about"
					className="border-t border-zinc-200 dark:border-zinc-700 py-24 lg:py-32"
				>
					<div className="container px-4 md:px-8">
						<div className="mx-auto max-w-5xl space-y-12">
							<div className="space-y-4">
								<h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50">
									About Me
								</h2>
								<p className="text-zinc-600 dark:text-zinc-400">
									My background and what I do
								</p>
							</div>
							<div className="grid gap-12 md:grid-cols-2">
								<div className="space-y-4">
									<p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
										I'm a Computer Engineering graduate from
										Marmara University in Istanbul, with
										backend experience across two stacks
										(.NET 10 with C# and ASP.NET Core, and
										Kotlin with Spring Boot). I build
										internal services from scratch, design
										REST APIs, and maintain production
										systems on PostgreSQL.
									</p>
									<p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
										I work with Docker, CI/CD pipelines,
										Kubernetes, HashiCorp Vault, and log
										monitoring with OpenSearch. On the frontend I
										ship micro-frontend applications in React,
										TypeScript, Redux, and Tailwind CSS. I'm open
										to junior backend and full-stack
										opportunities.
									</p>
								</div>
								<div className="space-y-8">
									<h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
										Tools I work with:
									</h3>
									<div className="grid grid-cols-2 gap-4">
										{[
											".NET 10 / C#",
											"Kotlin / Spring Boot",
											"PostgreSQL",
											"React / TypeScript",
											"Next.js",
											"Docker",
											"Kubernetes",
											"Git",
										].map((tech) => (
											<div
												key={tech}
												className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
											>
												<div className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
												{tech}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="contact"
					className="border-t border-zinc-200 dark:border-zinc-700 py-24 lg:py-32"
				>
					<div className="container px-4 md:px-8">
						<div className="mx-auto max-w-5xl space-y-12">
							<div className="space-y-4">
								<h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50">
									Get in Touch
								</h2>
								<p className="text-zinc-600 dark:text-zinc-400">
									Let's work together
								</p>
							</div>
							<div className="grid gap-8 md:grid-cols-2">
								<div className="space-y-4">
									<p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
										I'm interested in junior backend,
										full-stack, and internship
										opportunities. Whether you have a
										question, an offer, or just want to say
										hi, feel free to reach out.
									</p>
									<Button
										size="lg"
										asChild
										className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200
                      text-zinc-50 dark:text-zinc-900"
									>
										<a href="mailto:cakmakkeness@gmail.com">
											Say Hello
										</a>
									</Button>
								</div>
								<div className="space-y-4">
									<p className="text-sm text-zinc-600 dark:text-zinc-400">
										You can also find me on these platforms:
									</p>
									<div className="flex gap-4">
										{socialLinks.map((item) => (
											<Button
												key={item.name}
												variant="outline"
												size="lg"
												asChild
												className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300
                          hover:bg-zinc-100 dark:hover:bg-zinc-800"
											>
												<a
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
												>
													<item.icon className="mr-2 h-4 w-4" />
													{item.name}
												</a>
											</Button>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

function FeaturedProject() {
	return (
		<Card
			className="group relative overflow-hidden border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/50 p-8
      transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600"
		>
			<div className="grid gap-8 md:grid-cols-2">
				<div className="space-y-4">
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">
								Movie Recommendation Web App
							</h3>
							<Link
								href="https://movie.enescakmak.net"
								className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ExternalLink className="h-4 w-4" />
								<span className="sr-only">View Project</span>
							</Link>
						</div>
						<p className="text-sm text-zinc-600 dark:text-zinc-400">
							Full-stack recommendation platform built on the
							MovieLens ml-32m dataset (32M ratings, 87,585
							movies). Sign in with Google, rate movies, and get
							personalized picks from an offline-trained
							item-item collaborative filtering engine served as
							a static lookup table — no MovieLens user data
							ever reaches the browser.
						</p>
					</div>
					<div className="flex flex-wrap gap-2">
						{["Next.js", "TypeScript", "Cloudflare Workers", "Cloudflare D1", "NextAuth"].map((tag) => (
							<span
								key={tag}
								className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-300"
							>
								{tag}
							</span>
						))}
					</div>
					<div className="flex items-center gap-4">
						<Button variant="default" asChild>
							<Link
								href="https://movie.enescakmak.net"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center"
							>
								<ExternalLink className="mr-2 h-4 w-4" />
								View Project
							</Link>
						</Button>
						<Button variant="secondary" asChild>
							<Link
								href="https://github.com/enesscakmak/movie-recommendation-page"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Code
							</Link>
						</Button>
					</div>
				</div>
				<div className="relative min-h-[200px] overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
					<Image
						src="/movie-recommender-page.png"
						alt="Movie Recommendation Web App"
						fill
						className="object-cover"
						priority
					/>
				</div>
			</div>
		</Card>
	);
}

function ProjectCard({ title, description, tags, link }) {
	return (
		<Card
			className="group relative overflow-hidden border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/50 p-6
      transition-all duration-300 hover:scale-[1.05] hover:shadow-xl"
		>
			<div className="space-y-4">
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<div className="inline-block">
							<h3
								className="text-lg font-medium text-zinc-900 dark:text-zinc-50
                transition-all duration-300 hover:scale-105 transform-gpu origin-center"
							>
								{title}
							</h3>
						</div>
						{link && (
							<Link
								href={link}
								className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50
                  transition-all duration-300 hover:scale-110"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ExternalLink className="h-4 w-4" />
								<span className="sr-only">View Project</span>
							</Link>
						)}
					</div>
					<p
						className="text-sm text-zinc-600 dark:text-zinc-400
            transition-all duration-300 hover:text-zinc-900 dark:hover:text-zinc-50"
					>
						{description}
					</p>
				</div>
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800
                px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-300
                transition-all duration-300 hover:scale-125"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</Card>
	);
}

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/enesscakmak",
		icon: ExternalLink,
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/in/enesscakmak",
		icon: ExternalLink,
	},
];
