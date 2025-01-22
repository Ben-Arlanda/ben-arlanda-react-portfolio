import Navbar from "./scenes/Navbar";
import LandingPage from "./scenes/LandingPage";
import Projects from "./scenes/Projects";
import About from "./scenes/About";
import Footer from "./scenes/Footer";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import VantaFogBackground from "./Components/VantaBackground";

function App() {
	// use state to check which page user is on
	const [selectedPage, setSelectedPage] = useState("home");
	// variable to check for screen size for users
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	return (
		<div className="app bg-deep-blue relative">
			<Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<LandingPage setSelectedPage={setSelectedPage} />
			<About setSelectedPage={setSelectedPage} />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
