import PropTypes from "prop-types";

const Modal = ({ refProp, closeCallback }) => {
	return (
		<div
			ref={refProp}
			className="modal fixed top-0 left-0 w-full h-full px-4 z-10"
			style={{ display: "none" }}
		>
			<div className="modal__overlay p-4 min-[512px]:p-8 max-h-screen overflow-y-auto rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-xl">
				{/* Contact modal heading */}
				<div className="heading flex justify-between items-center pb-8">
					<h2 className="w-max text-black text-3xl font-bold min-[512px]:text-4xl">
						Free Consultation
					</h2>

					{/* Close button */}
					<button
						type="button"
						onClick={closeCallback}
						className="close-button rounded-full transition-colors"
					>
						{/* X icon */}
						<div className="cross-icon relative w-10 h-10">
							<span className="line-1 absolute top-1/2 left-1/2 -translate-x-1/2 block bg-black w-6 h-[2px] origin-center rotate-45"></span>
							<span className="line-2 absolute top-1/2 left-1/2 -translate-x-1/2 block bg-black w-6 h-[2px] origin-center -rotate-45"></span>
						</div>
					</button>
				</div>

				{/* Form */}
				<form
					action=""
					method="get"
					className="flex flex-col gap-y-4 font-medium"
				>
					<label htmlFor="name" className="name">
						Name
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Name"
							className="block w-full bg-transparent rounded-md  outline-none font-normal"
							required={true}
						/>
					</label>

					<label htmlFor="email" className="email">
						Email
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="block w-full bg-transparent  outline-none font-normal"
							required={true}
						/>
					</label>

					<label htmlFor="message" className="message">
						Message
						<textarea
							name="message"
							id="message"
							rows="4"
							placeholder="Message"
							className="block w-full bg-transparent outline-none font-normal"
							required={true}
						></textarea>
					</label>

					<button
						type="submit"
						className="py-2 rounded-full transition-colors"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

Modal.propTypes = {
	refProp: PropTypes.any,
	closeCallback: PropTypes.func,
};

export default Modal;
