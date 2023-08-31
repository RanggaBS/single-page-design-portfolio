import Button from "./Button";

import logo from "../assets/images/logo.svg";

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between navbar pb-8">
			<a href="/">
				<img src={logo} alt="logo icon" className="w-14" />
			</a>
			<Button
				text="Free Consultation"
				href="#contact"
				classModifier="button--primary"
			/>
		</nav>
	);
};

export default Navbar;
