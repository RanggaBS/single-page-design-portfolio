import PropTypes from "prop-types";

const Skill = ({ img, name, classModifier, classes }) => {
	// Lowercase the string & replace spaces with '-'
	const skillName = name.toLowerCase().replace(/[\s/]+/g, "-");

	return (
		<div
			className={`skill skill--${skillName} ${classModifier} ${classes}
      min-h-[10rem] rounded-lg p-4 flex flex-col justify-between`}
		>
			<img src={img} alt={name} className="ml-auto skill-img w-min" />
			<p className="text-[1.625rem] skill-name">{name}</p>
		</div>
	);
};

Skill.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	classModifier: PropTypes.string,
	classes: PropTypes.string,
};

export default Skill;
