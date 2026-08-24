import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import { withBasePath } from "@/utils/path";

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
									href={withBasePath("/cv.pdf")}
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
											2022 - Present
										</p>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
									Experience
								</h2>
								<div className="space-y-4">
									<div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 transition-all duration-300 hover:scale-[1.01]">
										<h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
											Full Stack Developer Intern
										</h3>
										<p className="text-zinc-700 dark:text-zinc-400">
											Hepsiburada, Istanbul
										</p>
										<p className="text-sm text-zinc-600 dark:text-zinc-500">
											07/2025 - Present
										</p>
										<ul className="list-disc list-inside mt-2 text-sm text-zinc-700 dark:text-zinc-400">
											<li>
												Developed and maintained
												internal backend services using
												.NET 10 and Java Spring Boot,
												implementing new REST API
												endpoints and improving existing
												ones.
											</li>
											<li>
												Designed and implemented CRUD
												operations with PostgreSQL,
												wrote custom SQL queries, and
												managed database migrations
												using Liquibase.
											</li>
											<li>
												Refactored backend code to fix
												production issues, improve
												logging, and enhance system
												reliability while debugging
												issues in production and test
												environments.
											</li>
											<li>
												Configured and maintained CI/CD
												pipelines, deployed services to
												Kubernetes, participated in SDLC
												improvements, and monitored logs
												using OpenSearch, Elasticsearch,
												and Google Cloud BigQuery with
												Slack alert integrations.
											</li>
										</ul>
									</div>

									<div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 transition-all duration-300 hover:scale-[1.01]">
										<h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
											Intern
										</h3>
										<p className="text-zinc-700 dark:text-zinc-400">
											Türk Telekom, Tokat
										</p>
										<p className="text-sm text-zinc-600 dark:text-zinc-500">
											09/2018 - 06/2019
										</p>
										<ul className="list-disc list-inside mt-2 text-sm text-zinc-700 dark:text-zinc-400">
											<li>
												Assisted in troubleshooting
												hardware and software issues,
												supported system configuration
												and user environment setup.
											</li>
											<li>
												Gained exposure to enterprise IT
												infrastructure and operational
												workflows.
											</li>
										</ul>
									</div>
								</div>
							</section>

							<section>
								<h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
									Skills
								</h2>
								<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
									<div className="transition-all duration-300 hover:scale-[1.01]">
										<h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
											Backend & Database
										</h3>
										<ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-400">
											<li>Java Spring Boot</li>
											<li>.NET 10</li>
											<li>PostgreSQL</li>
											<li>Liquibase</li>
											<li>SQL</li>
										</ul>
									</div>
									<div className="transition-all duration-300 hover:scale-[1.01]">
										<h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
											DevOps & Monitoring
										</h3>
										<ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-400">
											<li>CI/CD</li>
											<li>Kubernetes</li>
											<li>OpenSearch</li>
											<li>Elasticsearch</li>
											<li>Google Cloud BigQuery</li>
										</ul>
									</div>
									<div className="transition-all duration-300 hover:scale-[1.01]">
										<h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">
											Frontend
										</h3>
										<ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-400">
											<li>JavaScript</li>
											<li>React</li>
											<li>Next.js</li>
											<li>HTML5 & CSS3</li>
											<li>Tailwind CSS</li>
										</ul>
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
