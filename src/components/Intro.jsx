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
		<section className="pt-4 intro md:pt-8">
			<header className="text-center heading md:pb-8">
				<h1 className="pb-4 text-4xl font-bold md:text-[2.9rem] md:pb-8 lg:text-[4.75rem] lg:leading-none lg:pb-14">
					Design solutions made easy
				</h1>
				<p className="font-medium md:text-[1.2rem] md:mx-10 lg:w-[70%] lg:mx-auto lg:text-2xl">
					With over ten years of experience in various design
					disciplines, I&apos;m your one-stop shop for your design
					needs.
				</p>
			</header>
			<div className="grid grid-cols-2 gap-4 pt-6 font-bold skills md:grid-cols-4 lg:grid-cols-6">
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
