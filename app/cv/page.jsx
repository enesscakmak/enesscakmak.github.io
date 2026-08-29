import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import { withBasePath } from "@/utils/path";

const experience = [
	{
		role: "Full Stack Developer Intern",
		company: "Hepsiburada, Istanbul",
		period: "07/2025 - 08/2026",
		bullets: [
			"Developed and maintained internal backend services using .NET 10 and C#, implementing new REST API endpoints and improving existing ones.",
			"Designed and built an internal logging and observability service from the ground up using Kotlin and Spring Boot.",
			"Built and maintained micro-frontend (MFE) applications for the customer management team using React, TypeScript, and Tailwind CSS, with Redux for shared state management.",
			"Developed customer-facing pages for Hepsikredi (consumer credit) and Kobi Kredileri (SME lending), along with internal backoffice interfaces for the fraud and Hepsikredi teams.",
			"Refactored backend code to resolve production issues and improve system reliability across production and test environments.",
			"Configured and maintained CI/CD pipelines, containerized and deployed services to Kubernetes with Docker.",
			"Monitored application logs and system health using OpenSearch and Elasticsearch, with Slack alert integrations for incident response.",
		],
	},
	{
		role: "IT Intern",
		company: "Türk Telekom, Tokat",
		period: "09/2018 - 06/2019",
		bullets: [
			"Assisted in troubleshooting hardware and software issues, supported system configuration and user environment setup.",
			"Gained exposure to enterprise IT infrastructure and operational workflows.",
		],
	},
];

const skillGroups = [
	{
		title: "Backend",
		items: [
			"C#",
			".NET 10",
			"ASP.NET Core",
			"Kotlin",
			"Spring Boot",
			"Java",
			"Python",
			"REST APIs",
			"LINQ",
		],
	},
	{
		title: "Databases",
		items: [
			"PostgreSQL",
			"SQL",
			"Liquibase",
			"Relational Database Design",
			"Query Optimization",
		],
	},
	{
		title: "DevOps & Tools",
		items: [
			"Git",
			"GitHub",
			"Docker",
			"Kubernetes",
			"CI/CD",
			"HashiCorp Vault",
			"Maven",
			"Agile / Scrum",
			"Jira",
			"Postman",
		],
	},
	{
		title: "Monitoring & Cloud",
		items: [
			"OpenSearch",
			"Elasticsearch",
			"Google Cloud BigQuery",
			"Slack Alerting",
		],
	},
	{
		title: "Frontend",
		items: [
			"JavaScript",
			"TypeScript",
			"React",
			"Next.js",
			"Redux",
			"Micro-frontends (MFE)",
			"HTML5 & CSS3",
			"Tailwind CSS",
		],
	},
];

const projects = [
	{
		title: "Project & Research Paper: Game Analysis with Image Processing",
		bullets: [
			"Architected an end-to-end computer vision system that detects physical game tiles and recommends optimal moves, using a client-direct architecture with Next.js and an isolated Flask API to bypass serverless cold starts.",
			"Implemented a two-stage hybrid AI pipeline with YOLOv8-Nano for localization (99.4% mAP50, 41ms) and ResNet-18 for classification (97.26% accuracy, 2.88ms).",
			"Formulated complex combinatorial game rules with Depth-First Search and memoization (hash caching), calculating optimal 101-point and pair-opening strategies in under 10 milliseconds in-browser.",
			"Engineered a custom dataset of 4,432 labeled tiles across 55 classes, with a hybrid annotation pipeline in OpenCV and Python that cut manual labeling from 50+ hours to roughly 1 hour.",
			"Built an interactive React frontend for real-time manual correction of misclassified tiles, triggering instant algorithm recalculation with 150-250ms end-to-end latency.",
		],
	},
	{
		title: "Movie Recommendation App",
		bullets: [
			"Built a Java desktop application with JavaFX (FXML, SceneBuilder) that recommends films from the MovieLens dataset, implementing collaborative filtering with cosine similarity over user ratings.",
			"Added user registration and login with JSON-based persistence, and managed the build with Maven.",
		],
	},
	{
		title: "Personal Portfolio Website",
		bullets: [
			"Responsive Next.js and React portfolio with accessibility optimizations, deployed on Cloudflare Pages with automated builds.",
		],
	},
	{
		title: "Healthcare Sentiment Analysis with NLP",
		bullets: [
			"Co-authored an NLP research paper published in “Yapay Zeka Tabanlı Sistemler: Teori, Uygulama ve Gelecek Perspektifleri-2” (BIDGE Yayınları), processing 12,600+ patient reviews from NHS and RateMDs APIs.",
			"Achieved classification accuracy of 76% F1-Score utilizing RoBERTa.",
		],
	},
	{
		title: "Analysis of Suicide Content in Social Media Posts with Deep Learning Models",
		bullets: [
			"Authored a research paper on detecting suicidal intent in social media posts using deep learning models, implementing and comparing two novel models in this domain and achieving 97% accuracy.",
			"Conducted data preprocessing, feature extraction, and model evaluation to improve classification performance.",
		],
	},
];

export default function CVPage() {
	return (
		<div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
			<div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />

			<Sidebar />
			<main className="flex-1 relative z-10">
				<div className="container px-8 py-8 md:py-12">
					<div className="mx-auto max-w-3xl">
						<div className="flex items-center justify-between mb-8">
							<h1 className="text-2xl font-bold tracking-tight md:text-3xl text-zinc-900 dark:text-zinc-50">
								Curriculum Vitae
							</h1>
							<Button
								asChild
								className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                  text-zinc-50 dark:text-zinc-900 transition-all duration-300 hover:scale-105"
							>
								<Link
									href={withBasePath("/EnesCakmak_Resume.pdf")}
									target="_blank"
								>
									<Download className="mr-2 h-4 w-4" />
									Download CV
								</Link>
							</Button>
						</div>

						<div className="space-y-8">
							<section>
								<h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
									About
								</h2>
								<p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
									Computer Engineering graduate seeking a
									Junior Backend or Full-Stack Developer role.
									Experienced in backend development across
									two stacks (.NET 10, C#, ASP.NET Core and
									Kotlin with Spring Boot) building internal
									services from scratch, designing REST APIs,
									and maintaining production systems on
									PostgreSQL. Worked with Git, Docker, CI/CD,
									Kubernetes, and HashiCorp Vault in an Agile
									team. Also delivered production frontend
									work in React, TypeScript, and Tailwind CSS,
									including micro-frontend (MFE) applications.
								</p>
							</section>

							<section>
								<h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
									Experience
								</h2>
								<div className="space-y-4">
									{experience.map((job) => (
										<div
											key={job.role}
											className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 transition-all duration-300 hover:scale-[1.01]"
										>
											<h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
												{job.role}
											</h3>
											<p className="text-zinc-700 dark:text-zinc-400">
												{job.company}
											</p>
											<p className="text-sm text-zinc-600 dark:text-zinc-500">
												{job.period}
											</p>
											<ul className="list-disc list-inside mt-2 text-sm text-zinc-700 dark:text-zinc-400 space-y-1">
												{job.bullets.map((bullet) => (
													<li key={bullet}>
														{bullet}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							</section>

							<section>
								<h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
									Skills
								</h2>
								<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
									{skillGroups.map((group) => (
										<div
											key={group.title}
											className="transition-all duration-300 hover:scale-[1.01]"
										>
											<h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
												{group.title}
											</h3>
											<ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-400">
												{group.items.map((item) => (
													<li key={item}>{item}</li>
												))}
											</ul>
										</div>
									))}
								</div>
							</section>

							<section>
								<h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
									Projects & Publications
								</h2>
								<div className="space-y-4">
									{projects.map((project) => (
										<div
											key={project.title}
											className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 transition-all duration-300 hover:scale-[1.01]"
										>
											<h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
												{project.title}
											</h3>
											<ul className="list-disc list-inside mt-2 text-sm text-zinc-700 dark:text-zinc-400 space-y-1">
												{project.bullets.map(
													(bullet) => (
														<li key={bullet}>
															{bullet}
														</li>
													)
												)}
											</ul>
										</div>
									))}
								</div>
							</section>

							<section>
								<h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
									Education
								</h2>
								<div className="space-y-4">
									<div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 transition-all duration-300 hover:scale-[1.01]">
										<h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
											BSc in Computer Engineering
										</h3>
										<p className="text-zinc-700 dark:text-zinc-400">
											Marmara University, Istanbul
										</p>
										<p className="text-sm text-zinc-600 dark:text-zinc-500">
											2022 - 2026
										</p>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
									Languages
								</h2>
								<ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-400">
									<li>Turkish: Native</li>
									<li>English: C1 (YÖKDİL: 91/100)</li>
								</ul>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
