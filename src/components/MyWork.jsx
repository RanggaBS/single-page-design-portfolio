import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import imgSlide1 from "../assets/images/image-slide-1.jpg";
import imgSlide2 from "../assets/images/image-slide-2.jpg";
import imgSlide3 from "../assets/images/image-slide-3.jpg";
import imgSlide4 from "../assets/images/image-slide-4.jpg";
import imgSlide5 from "../assets/images/image-slide-5.jpg";

const numberOfWorks = 5;
const middleWorkIndex = Math.floor((numberOfWorks - 1) / 2);

const MyWork = () => {
	return (
		<section className="text-center my-work">
			<h2 className="text-[1.625rem] font-bold pb-4">My Work</h2>

			{/* SwiperJS */}
			<p hidden={true} style={{ width: 0, height: 0 }}>
				SwiperJS
			</p>
			<Swiper
				slidesPerView={1}
				// initialSlide={middleWorkIndex}
				spaceBetween={8}
				// centeredSlides={true}
				loop={true}
				grabCursor={true}
				modules={[Autoplay]}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				wrapperTag="ul"
				className="works carousel"
			>
				<SwiperSlide tag="li">
					<img src={imgSlide1} alt="work 1" />
				</SwiperSlide>
				<SwiperSlide tag="li">
					<img src={imgSlide2} alt="work 2" />
				</SwiperSlide>
				<SwiperSlide tag="li">
					<img src={imgSlide3} alt="work 3" />
				</SwiperSlide>
				<SwiperSlide tag="li">
					<img src={imgSlide4} alt="work 4" />
				</SwiperSlide>
				<SwiperSlide tag="li">
					<img src={imgSlide5} alt="work 5" />
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default MyWork;
