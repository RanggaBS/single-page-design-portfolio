import PropTypes from "prop-types";

const Button = ({ text, href, classModifier }) => {
	return (
		<a
			href={href}
			className={`button ${classModifier}
			px-7 py-3 rounded-full transition
		`}
		>
			{text}
		</a>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	href: PropTypes.string,
	classModifier: PropTypes.string,
};

export default Button;
