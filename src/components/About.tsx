import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

const About = () => {
	const stats = [
		{ label: "Experience", value: "4+ Years", icon: Server },
		{ label: "Favorite Stack", value: "Node.js + Docker", icon: Code },
		{ label: "Daily Tools", value: "Linux, Git, CI/CD", icon: Wrench },
	];

	return (
		<section className="py-24 px-4" id="about">
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
							<span className="text-accent">//</span> About Me
						</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							I'm a Backend Developer and DevOps Engineer focused on building
							reliable, scalable systems. I believe in the power of automation,
							clean architecture, and robust infrastructure to deliver
							exceptional digital experiences.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="terminal-card group hover:border-accent/50 transition-colors duration-300"
							>
								<div className="relative z-10 space-y-4">
									<div className="flex items-center gap-3">
										<div className="p-2 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
											<stat.icon className="w-5 h-5 text-accent" />
										</div>
										<span className="font-mono text-sm text-muted-foreground">
											{stat.label}
										</span>
									</div>
									<div className="text-2xl font-bold font-mono">
										{stat.value}
									</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className="terminal-card"
					>
						<div className="relative z-10">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<span className="text-accent">$</span> core_values.sh
							</h3>
							<div className="space-y-3 font-mono text-sm">
								<div className="flex items-start gap-3">
									<span className="text-accent">→</span>
									<span>
										<strong className="text-foreground">Reliability:</strong>{" "}
										<span className="text-muted-foreground">
											Systems that work when they need to, every time
										</span>
									</span>
								</div>
								<div className="flex items-start gap-3">
									<span className="text-accent">→</span>
									<span>
										<strong className="text-foreground">Automation:</strong>{" "}
										<span className="text-muted-foreground">
											Eliminate manual work, reduce human error
										</span>
									</span>
								</div>
								<div className="flex items-start gap-3">
									<span className="text-accent">→</span>
									<span>
										<strong className="text-foreground">
											Clean Architecture:
										</strong>{" "}
										<span className="text-muted-foreground">
											Maintainable, scalable, and elegant code
										</span>
									</span>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
