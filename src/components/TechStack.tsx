import { motion } from "framer-motion";

const TechStack = () => {
	const techGroups = [
		{
			category: "Backend",
			technologies: [
				"Node.js",
				"Express",
				"PostgreSQL",
				"MongoDB",
				"Redis",
				"REST APIs",
				"GraphQL",
				"Microservices",
			],
		},
		{
			category: "DevOps",
			technologies: [
				"Docker",
				"Kubernetes",
				"CI/CD",
				"GitHub Actions",
				"Nginx",
				"Linux",
				"AWS",
				"Terraform",
			],
		},
		{
			category: "Tools",
			technologies: [
				"Git",
				"VSCode",
				"Postman",
				"Prometheus",
				"Grafana",
				"ELK Stack",
				"Jenkins",
				"Ansible",
			],
		},
	];

	return (
		<section className="py-24 px-4" id="tech-stack">
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
							<span className="text-accent">{"//"}</span> Tech Stack
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Technologies and tools I work with daily to build robust backend
							systems and reliable infrastructure.
						</p>
					</div>

					<div className="space-y-8">
						{techGroups.map((group, groupIndex) => (
							<motion.div
								key={group.category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
								viewport={{ once: true }}
								className="space-y-4"
							>
								<h3 className="text-xl font-bold font-mono flex items-center gap-2">
									<span className="text-accent">$</span>{" "}
									{group.category.toLowerCase()}_stack
								</h3>

								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									{group.technologies.map((tech, techIndex) => (
										<motion.div
											key={tech}
											initial={{ opacity: 0, scale: 0.9 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{
												duration: 0.3,
												delay: groupIndex * 0.1 + techIndex * 0.05,
											}}
											viewport={{ once: true }}
											whileHover={{ scale: 1.05 }}
											className="terminal-card group hover:border-accent/50 transition-all duration-300 cursor-default"
										>
											<div className="relative z-10 text-center">
												<span className="font-mono text-sm group-hover:text-accent transition-colors duration-300">
													{tech}
												</span>
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TechStack;
