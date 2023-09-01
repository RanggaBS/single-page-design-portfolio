import PropTypes from "prop-types";

import Button from "./Button";

import logo from "../assets/images/logo.svg";

const Navbar = ({ openModalFunc }) => {
	return (
		<nav className="flex items-center justify-between navbar pb-8">
			<a href="/">
				<img src={logo} alt="logo icon" className="w-14" />
			</a>
			<Button
				text="Free Consultation"
				classModifier="button--primary"
				onClick={openModalFunc}
			/>
		</nav>
	);
};

Navbar.propTypes = {
	openModalFunc: PropTypes.func,
};

export default Navbar;
