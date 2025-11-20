import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
			<div className="absolute inset-0 grid-background opacity-20" />

			<div className="container max-w-6xl relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-8"
				>
					<div className="space-y-4">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="text-5xl md:text-7xl font-bold tracking-tight"
						>
							Backend Developer &<br />
							<span className="text-accent">DevOps Engineer</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
						>
							Building scalable backend systems and reliable infrastructure with
							modern technologies. Passionate about automation, clean
							architecture, and robust solutions.
						</motion.p>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="flex flex-wrap gap-4 justify-center"
					>
						<Button
							size="lg"
							className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
						>
							<Download className="w-5 h-5" />
							Download CV
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="gap-2 border-border hover:bg-secondary"
						>
							<Mail className="w-5 h-5" />
							Contact Me
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="max-w-2xl mx-auto mt-12"
					>
						<div className="terminal-card">
							<div className="flex items-center gap-2 mb-4 relative z-10">
								<div className="w-3 h-3 rounded-full bg-destructive/60" />
								<div className="w-3 h-3 rounded-full bg-yellow-500/60" />
								<div className="w-3 h-3 rounded-full bg-green-500/60" />
							</div>

							<div className="font-mono text-sm space-y-2 relative z-10">
								<div className="flex items-center gap-2">
									<span className="text-accent">$</span>
									<span className="text-foreground">whoami</span>
								</div>
								<div className="text-muted-foreground ml-4">
									Gilang Erlangga M
								</div>
								<div className="flex items-center gap-2 mt-4">
									<span className="text-accent">$</span>
									<span className="text-foreground">cat location.txt</span>
								</div>
								<div className="text-muted-foreground ml-4">Indonesia</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
