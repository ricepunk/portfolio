import { motion } from "framer-motion";
import { Github, Instagram, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		toast({
			title: "Message sent!",
			description: "Thank you for reaching out. I'll get back to you soon.",
		});
		setFormData({ name: "", email: "", message: "" });
	};

	const socialLinks = [
		{
			icon: Mail,
			label: "Email",
			href: "mailto:gilangermau@gmail.com",
			value: "gilangermau@gmail.com",
		},
		{
			icon: Github,
			label: "GitHub",
			href: "https://github.com/ricepunk",
			value: "@ricepunk",
		},
		{
			icon: Instagram,
			label: "Instagram",
			href: "https://instagram.com/gilangermau",
			value: "gilangermau",
		},
	];

	return (
		<section className="py-24 px-4" id="contact">
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
							<span className="text-accent">{"//"}</span> Get In Touch
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Have a project in mind or want to discuss backend architecture?
							Feel free to reach out.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="space-y-6"
						>
							<div className="terminal-card">
								<div className="relative z-10 space-y-6">
									<h3 className="text-xl font-bold font-mono flex items-center gap-2">
										<span className="text-accent">$</span> connect.sh
									</h3>

									<div className="space-y-4">
										{socialLinks.map((link) => (
											<a
												key={link.label}
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-accent/10 hover:border-accent/50 border border-border transition-all duration-300 group"
											>
												<div className="p-2 bg-card rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
													<link.icon className="w-5 h-5 text-accent" />
												</div>
												<div className="flex-1 min-w-0">
													<div className="font-mono text-sm text-muted-foreground">
														{link.label}
													</div>
													<div className="font-mono text-sm truncate group-hover:text-accent transition-colors duration-300">
														{link.value}
													</div>
												</div>
											</a>
										))}
									</div>
								</div>
							</div>

							<div className="terminal-card">
								<div className="relative z-10">
									<div className="font-mono text-sm space-y-2">
										<div className="flex items-center gap-2">
											<span className="text-accent">$</span>
											<span className="text-foreground">
												cat availability.txt
											</span>
										</div>
										<div className="text-muted-foreground ml-4">
											Open to freelance projects and
											<br />
											backend/DevOps opportunities.
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<form onSubmit={handleSubmit} className="terminal-card">
								<div className="relative z-10 space-y-6">
									<h3 className="text-xl font-bold font-mono flex items-center gap-2">
										<span className="text-accent">$</span> send_message
									</h3>

									<div className="space-y-4">
										<div className="space-y-2">
											<label
												htmlFor="name"
												className="text-sm font-mono text-muted-foreground"
											>
												Name
											</label>
											<Input
												id="name"
												value={formData.name}
												onChange={(e) =>
													setFormData({ ...formData, name: e.target.value })
												}
												placeholder="Your name"
												required
												className="bg-secondary border-border focus:border-accent transition-colors duration-300"
											/>
										</div>

										<div className="space-y-2">
											<label
												htmlFor="email"
												className="text-sm font-mono text-muted-foreground"
											>
												Email
											</label>
											<Input
												id="email"
												type="email"
												value={formData.email}
												onChange={(e) =>
													setFormData({ ...formData, email: e.target.value })
												}
												placeholder="your.email@example.com"
												required
												className="bg-secondary border-border focus:border-accent transition-colors duration-300"
											/>
										</div>

										<div className="space-y-2">
											<label
												htmlFor="message"
												className="text-sm font-mono text-muted-foreground"
											>
												Message
											</label>
											<Textarea
												id="message"
												value={formData.message}
												onChange={(e) =>
													setFormData({ ...formData, message: e.target.value })
												}
												placeholder="Tell me about your project..."
												required
												rows={6}
												className="bg-secondary border-border focus:border-accent transition-colors duration-300 resize-none"
											/>
										</div>

										<Button
											type="submit"
											className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
										>
											<Send className="w-4 h-4" />
											Send Message
										</Button>
									</div>
								</div>
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
