import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";

import "./styles/App.css";
import ConsultModal from "./components/ConsultModal";

document.title = "Single page design portfolio";

function App() {
	return (
		<div className="min-h-screen app">
			<Navbar />
			<main className="space-y-24">
				<Intro />
				<About />
				<MyWork />
				<Contact />
			</main>
			<footer className="pt-6 pb-4">
				<Navbar />
			</footer>
			<ConsultModal />
		</div>
	);
}

export default App;
