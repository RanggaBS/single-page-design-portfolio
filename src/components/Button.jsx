import PropTypes from "prop-types";

const Button = ({ text, classModifier, onClick }) => {
	return (
		<button
			type="button"
			className={`button ${classModifier}
			px-7 py-3 rounded-full transition
			md:px-10 md:py-4
		`}
			onClick={onClick || (() => {})}
		>
			{text}
		</button>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	classModifier: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
