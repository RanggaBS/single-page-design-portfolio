import PropTypes from "prop-types";

import Button from "./Button";

const Contact = ({ openModalFunc }) => {
	return (
		<section
			id="contact"
			className="px-6 py-12 text-center rounded-lg contact md:px-0 lg:p-16 lg:flex lg:justify-between lg:items-center"
		>
			<article className="pb-8 lg:text-start lg:w-[53%]">
				<h2 className="text-[1.625rem] font-bold pb-4 md:text-[1.9rem]">
					Book a call with me
				</h2>
				<p className="md:mx-[5.2rem] md:text-[1.1rem] lg:m-0">
					I&apos;d love to have a chat to see how I can help you. The
					best first step is for us to discuss your project during a
					free consultation. Then we can move forward from there.
				</p>
			</article>
			<Button
				text="Free Consultation"
				classModifier="button--secondary"
				onClick={openModalFunc}
			/>
		</section>
	);
};

Contact.propTypes = {
	openModalFunc: PropTypes.func,
};

export default Contact;
