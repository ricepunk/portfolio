import { motion } from "framer-motion";

const Experience = () => {
	const experiences = [
		{
			period: "2022 - Present",
			role: "Backend Developer & DevOps Engineer",
			company: "Freelance",
			description:
				"Building and maintaining backend systems and infrastructure for various clients. Focus on scalable architecture, automation, and reliable deployment pipelines.",
			achievements: [
				"Designed microservices architecture handling 500K+ daily requests",
				"Implemented CI/CD pipelines reducing deployment time by 70%",
				"Managed cloud infrastructure with 99.9% uptime SLA",
			],
		},
		{
			period: "2021 - 2022",
			role: "Backend Developer",
			company: "Tech Startup",
			description:
				"Developed RESTful APIs and backend services for gaming platforms. Worked with Node.js, PostgreSQL, and Redis to build high-performance systems.",
			achievements: [
				"Built real-time gaming backend serving 50K+ concurrent users",
				"Optimized database queries improving response time by 60%",
				"Implemented caching strategies reducing server load by 40%",
			],
		},
		{
			period: "2020 - 2021",
			role: "Junior Developer",
			company: "Software Agency",
			description:
				"Started career working on web applications and learning backend development. Contributed to various client projects and gained experience with modern development practices.",
			achievements: [
				"Developed and deployed 10+ web applications",
				"Learned Docker, Linux, and cloud deployment",
				"Collaborated with senior developers on system architecture",
			],
		},
	];

	return (
		<section className="py-24 px-4" id="experience">
			<div className="container max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="space-y-12"
				>
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">
							<span className="text-accent">//</span> Experience
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							My journey in backend development and DevOps engineering.
						</p>
					</div>

					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

						<div className="space-y-12">
							{experiences.map((exp, index) => (
								<motion.div
									key={exp.company}
									initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className={`relative flex items-center gap-8 ${
										index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
									}`}
								>
									{/* Timeline dot */}
									<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent/30 accent-glow z-10" />

									{/* Content */}
									<div
										className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
									>
										<div className="terminal-card hover:border-accent/50 transition-colors duration-300">
											<div className="relative z-10 space-y-4">
												<div className="space-y-2">
													<div className="font-mono text-sm text-accent">
														{exp.period}
													</div>
													<h3 className="text-xl font-bold font-mono">
														{exp.role}
													</h3>
													<div className="text-muted-foreground font-mono text-sm">
														{exp.company}
													</div>
												</div>

												<p className="text-sm text-muted-foreground leading-relaxed">
													{exp.description}
												</p>

												<div
													className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}
												>
													{exp.achievements.map((achievement, i) => (
														<div
															key={i}
															className="flex items-start gap-2 text-sm"
														>
															<span className="text-accent shrink-0">→</span>
															<span className="text-muted-foreground">
																{achievement}
															</span>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Experience;
