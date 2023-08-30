import Button from "./Button";

const Contact = () => {
	return (
		<section
			className="px-6 py-10 text-center rounded-lg contact"
			id="contact"
		>
			<article className="pb-8">
				<h2 className="text-[1.625rem] font-bold pb-4">
					Book a call with me
				</h2>
				<p>
					I&apos;d love to have a chat to see how I can help you. The
					best first step is for us to discuss your project during a
					free consultation. Then we can move forward from there.
				</p>
			</article>
			<Button
				text="Free Consultation"
				href="#contact"
				classModifier="button--secondary"
			/>
		</section>
	);
};

export default Contact;
