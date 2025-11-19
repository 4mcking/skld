import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Trusted from "./components/Trusted.jsx";
import Solutions from "./components/Solutions.jsx";
import MissionVision from "./components/MissionVision.jsx";
import ImpactGrid from "./components/ImpactGrid.jsx";
import Testimonials from "./components/Testimonials.jsx";
import BlogCarousel from "./components/BlogCarousel.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
	return (
		<div className="min-h-full">
			<Navbar />
			<main>
				<Hero />
				<Trusted />
				<Solutions />
				<MissionVision />
				<ImpactGrid />
				<Testimonials />
				<BlogCarousel />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}
