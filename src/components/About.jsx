import Button from "./Button";
import imgAmy from "../assets/images/image-amy.webp";

const Hero = () => {
	return (
		<section className="text-center about md:text-start md:flex">
			<picture className="md:flex-1">
				<img
					src={imgAmy}
					alt="Picture of Amy"
					className="w-4/5 max-w-[445px] mx-auto picture md:w-full md:-translate-x-11"
				/>
			</picture>
			<article className="pt-10 content md:pt-0 md:flex-1 md:flex md:flex-col md:justify-center md:items-start">
				<header>
					<h2
						id="about"
						className="pb-6 text-[1.625rem] leading-tight font-bold md:text-[2rem]"
					>
						I&apos;m Amy, and I&apos;d love to work on your next
						project
					</h2>
					<p className="pb-8 font-medium desc md:text-[1.15rem]">
						I love working with others to create beautiful design
						solutions. I&apos;ve designed everything from brand
						illustrations to complete mobile apps. I&apos;m also
						handy with a camera!
					</p>
				</header>
				<Button
					text="Free Consultation"
					href="#contact"
					classModifier="button--secondary"
				/>
			</article>
		</section>
	);
};

export default Hero;
