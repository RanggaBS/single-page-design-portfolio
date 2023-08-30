import imgGraphicDesign from "../assets/images/pattern-graphic-design.svg";
import imgUiUx from "../assets/images/pattern-ui-ux.svg";
import imgApps from "../assets/images/pattern-apps.svg";
import imgIlustrations from "../assets/images/pattern-illustrations.svg";
import imgPhotography from "../assets/images/pattern-photography.svg";
import imgMotionGraphics from "../assets/images/pattern-motion-graphics.svg";
import Skill from "./Skill";

const skillsData = [
	{
		name: "Graphic Design",
		img: imgGraphicDesign,
		classModifier: "skill--big-square",
		classes: "",
	},
	{
		name: "UI/UX",
		img: imgUiUx,
		classModifier: "",
		classes: "",
	},
	{
		name: "Apps",
		img: imgApps,
		classModifier: "",
		classes: "",
	},
	{
		name: "Illustrations",
		img: imgIlustrations,
		classModifier: "skill--col-span-2",
		classes: "",
	},
	{
		name: "Photography",
		img: imgPhotography,
		classModifier: "skill--col-span-2",
		classes: "",
	},
	{
		name: "Motion Graphics",
		img: imgMotionGraphics,
		classModifier: "skill--col-span-2",
		classes: "",
	},
];

const Intro = () => {
	return (
		<section className="intro">
			<header className="text-center heading">
				<h1 className="pb-4 text-4xl font-bold">
					Design solutions made easy
				</h1>
				<p className="font-medium">
					With over ten years of experience in various design
					disciplines, I&apos;m your one-stop shop for your design
					needs.
				</p>
			</header>
			<div className="grid grid-cols-2 gap-4 pt-6 font-bold skills">
				{skillsData.map((skill, index) => {
					return (
						<Skill
							key={index}
							img={skill.img}
							name={skill.name}
							classModifier={skill.classModifier}
							classes={skill.classes}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Intro;
