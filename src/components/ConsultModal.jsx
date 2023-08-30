// import xIcon from "../assets/images/x.svg";

const Modal = () => {
	return (
		<div
			className={`modal micromodal-slide
			fixed w-full h-full`}
			id="modal-1"
			aria-hidden="true"
		>
			<div className="modal__overlay" tabIndex="-1" data-micromodal-close>
				<div
					className="modal__container flex flex-col"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-1-title"
				>
					<header className="modal__heading">
						<h2 className="modal__title" id="modal-1-title">
							Free Consultation
						</h2>

						<button
							className="modal__close-button rounded-full"
							aria-label="Close this dialog window"
							data-micromodal-close
						>
							{/* <img src={xIcon} alt="X icon" /> */}
							Tutup modal
						</button>
					</header>

					<main className="modal__content" id="modal-1-content">
						<form action="" method="post">
							<div className="name">
								<label htmlFor="name">
									Name
									<input
										type="text"
										id="name"
										placeholder="Full name"
									/>
								</label>
							</div>

							<div className="email">
								<label htmlFor="email">
									Email
									<input
										type="text"
										id="email"
										placeholder="Email address"
									/>
								</label>
							</div>

							<div className="message">
								<label htmlFor="message">
									Message
									<textarea
										name=""
										id="message"
										placeholder="Message"
										rows="4"
									></textarea>
								</label>
							</div>

							<button
								type="submit"
								className="modal__submit-button
								rounded-full w-full bg-black hover:bg-[var(--color-purple)] text-white"
							>
								Send Message
							</button>
						</form>
					</main>
				</div>
			</div>
		</div>
	);
};

// Modal.propTypes = {};

export default Modal;
