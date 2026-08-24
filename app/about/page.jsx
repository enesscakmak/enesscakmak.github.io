import Link from "next/link";
import { GraduationCap, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";

export default function AboutPage() {
	return (
		<div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
			<div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />

			<Sidebar />
			<main className="flex-1 relative z-10">
				<div className="container px-8 py-8 md:py-12">
					<div className="mx-auto max-w-3xl">
						<div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
							<div>
								<h1 className="text-2xl font-bold tracking-tight md:text-3xl mb-4 text-zinc-900 dark:text-zinc-50">
									About Me
								</h1>
								<p className="text-base text-zinc-700 dark:text-zinc-400 mb-4">
									I'm a Computer Engineering student at
									Marmara University in Istanbul, seeking a
									Junior Backend or Full-Stack Developer role.
									I build internal services and REST APIs with
									.NET 10, Java Spring Boot, and PostgreSQL,
									and work with CI/CD, Kubernetes, and log
									monitoring in production environments.
								</p>
								<p className="text-base text-zinc-700 dark:text-zinc-400 mb-6">
									I also work with React, Next.js, and
									Tailwind CSS on the frontend. I'm open to
									backend-focused and full-stack opportunities
									where I can keep growing across the stack.
								</p>
								<div className="flex gap-3">
									<Button
										size="sm"
										asChild
										className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                      text-zinc-50 dark:text-zinc-900"
									>
										<Link href="/cv">View CV</Link>
									</Button>
									<Button
										size="sm"
										variant="outline"
										asChild
										className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300
                      hover:bg-zinc-100 dark:hover:bg-zinc-800"
									>
										<Link
											href="mailto:cakmakkeness@gmail.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											Get in Touch
										</Link>
									</Button>
								</div>
							</div>
						</div>

						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
							<Card
								className="bg-white/80 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
							>
								<CardHeader className="pb-2">
									<GraduationCap className="w-6 h-6 mb-2 text-zinc-900 dark:text-zinc-50" />
									<CardTitle className="text-lg text-zinc-900 dark:text-zinc-50">
										Education
									</CardTitle>
								</CardHeader>
								<CardContent className="grid gap-3">
									<div>
										<h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
											BSc in Computer Engineering
										</h3>
										<p className="text-xs text-zinc-700 dark:text-zinc-400">
											Marmara University, Istanbul
										</p>
										<p className="text-xs text-zinc-600 dark:text-zinc-500">
											2022 - Present
										</p>
									</div>
								</CardContent>
							</Card>

							<Card
								className="bg-white/80 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg md:col-span-2 lg:col-span-2"
							>
								<CardHeader className="pb-2">
									<Briefcase className="w-6 h-6 mb-2 text-zinc-900 dark:text-zinc-50" />
									<CardTitle className="text-lg text-zinc-900 dark:text-zinc-50">
										Experience
									</CardTitle>
								</CardHeader>
								<CardContent className="grid gap-3 md:grid-cols-2">
									<div>
										<h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
											Full Stack Developer Intern
										</h3>
										<p className="text-xs text-zinc-700 dark:text-zinc-400">
											Hepsiburada, Istanbul
										</p>
										<p className="text-xs text-zinc-600 dark:text-zinc-500">
											07/2025 - Present
										</p>
									</div>
									<div>
										<h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
											Intern
										</h3>
										<p className="text-xs text-zinc-700 dark:text-zinc-400">
											Türk Telekom, Tokat
										</p>
										<p className="text-xs text-zinc-600 dark:text-zinc-500">
											09/2018 - 06/2019
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
