import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
	const projects = [
		{
			title: "Game Server Automation",
			description:
				"Automated deployment and management system for game servers with Docker orchestration, auto-scaling, and monitoring.",
			technologies: ["Docker", "Node.js", "Redis", "Prometheus"],
			github: "#",
		},
		{
			title: "Discord Bot Platform",
			description:
				"Scalable Discord bot infrastructure with microservices architecture, handling 100K+ users with high availability.",
			technologies: ["Node.js", "PostgreSQL", "RabbitMQ", "Kubernetes"],
			github: "#",
		},
		{
			title: "FiveM Server Backend",
			description:
				"Custom backend API for FiveM multiplayer servers with player management, economy system, and real-time data sync.",
			technologies: ["Express", "MongoDB", "Socket.io", "JWT"],
			github: "#",
		},
		{
			title: "Server Monitoring Pipeline",
			description:
				"Comprehensive monitoring solution with metrics collection, alerting, and visualization for distributed systems.",
			technologies: ["Grafana", "ELK Stack", "Telegraf", "Alert Manager"],
			github: "#",
		},
	];

	return (
		<section className="py-24 px-4" id="projects">
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
							<span className="text-accent">{"//"}</span> Projects
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Selected projects showcasing backend architecture and DevOps
							implementations.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{projects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="terminal-card group hover:border-accent/50 transition-all duration-300"
							>
								<div className="relative z-10 space-y-4">
									<div className="flex items-start justify-between gap-4">
										<h3 className="text-xl font-bold font-mono group-hover:text-accent transition-colors duration-300">
											{project.title}
										</h3>
										<Button
											variant="ghost"
											size="icon"
											className="shrink-0 hover:bg-accent/10 hover:text-accent"
											asChild
										>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="w-5 h-5" />
											</a>
										</Button>
									</div>

									<p className="text-muted-foreground text-sm leading-relaxed">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 text-xs font-mono bg-secondary border border-border rounded-full hover:border-accent/50 transition-colors duration-300"
											>
												{tech}
											</span>
										))}
									</div>

									<div className="pt-2">
										<Button
											variant="ghost"
											size="sm"
											className="gap-2 text-accent hover:bg-accent/10 hover:text-accent"
											asChild
										>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												View on GitHub
												<ExternalLink className="w-4 h-4" />
											</a>
										</Button>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
