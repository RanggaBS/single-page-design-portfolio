import PropTypes from "prop-types";

const ArrowButton = ({ direction, onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`arrow-button arrow-button--${direction.toLowerCase()}`}
		></button>
	);
};
ArrowButton.propTypes = {
	direction: PropTypes.string,
	onClick: PropTypes.func,
};

export default ArrowButton;
