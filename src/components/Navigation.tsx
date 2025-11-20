import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ label: "About", href: "#about" },
		{ label: "Tech Stack", href: "#tech-stack" },
		{ label: "Projects", href: "#projects" },
		{ label: "Experience", href: "#experience" },
		{ label: "Contact", href: "#contact" },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsOpen(false);
		}
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
		>
			<div className="container max-w-6xl px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<a
						href="/"
						className="font-mono text-xl font-bold flex items-center gap-2"
					>
						<span className="text-accent">$</span>
						<span>Gilang</span>
					</a>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<button
								type="button"
								key={item.label}
								onClick={() => scrollToSection(item.href)}
								className="font-mono text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
							>
								{item.label}
							</button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-300"
					>
						{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden border-t border-border"
					>
						<div className="py-4 space-y-2">
							{navItems.map((item) => (
								<button
									type="button"
									key={item.label}
									onClick={() => scrollToSection(item.href)}
									className="block w-full text-left px-4 py-2 font-mono text-sm text-muted-foreground hover:text-accent hover:bg-secondary rounded-lg transition-colors duration-300"
								>
									{item.label}
								</button>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navigation;
