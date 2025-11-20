import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

const Index = () => {
	return (
		<div className="min-h-screen">
			<Navigation />
			<main>
				<Hero />
				<About />
				<TechStack />
				<Projects />
				<Experience />
				<Contact />
			</main>

			<footer className="border-t border-border py-8">
				<div className="container max-w-6xl px-4">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<p className="font-mono text-sm text-muted-foreground">
							© {new Date().getFullYear()} Gilang Erlangga M.
						</p>
						<p className="font-mono text-sm text-muted-foreground">
							<span className="text-accent">$</span> Indonesia
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Index;
