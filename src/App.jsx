import { useRef } from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";

import "./styles/App.css";
import ConsultModal from "./components/ConsultModal";

document.title = "Single page design portfolio";

function App() {
	const modal = useRef();

	const showModal = (event) => {
		modal.current.style.display = "block";
	};
	const closeModal = (event) => {
		modal.current.style.display = "none";
	};

	return (
		<div className="min-h-screen app overflow-hidden">
			<Navbar openModalFunc={showModal} />
			<main className="space-y-24">
				<Intro />
				<About openModalFunc={showModal} />
				<MyWork />
				<Contact openModalFunc={showModal} />
			</main>
			<footer className="pt-6 pb-4">
				<Navbar openModalFunc={showModal} />
			</footer>
			<ConsultModal refProp={modal} closeCallback={closeModal} />
		</div>
	);
}

export default App;
