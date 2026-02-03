import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "../../assets/images/testimonail.png";
import Image2 from "../../assets/images/testimonial-user-cover-99.png";
import Image3 from "../../assets/images/testimonial2.png";

import TestimonialCard from "../../molecules/testimonialsCard/TestimonialCard";
import "./swiper.css";

const Swipeer = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            grabCursor={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            <SwiperSlide>
                <TestimonialCard
                    parag="Slate helps you see how many more days you need to work to reach your financial goal."
                    src={Image}
                    namee="Regina Miles"
                    proff="Designer"
                />
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialCard
                    parag="Slate helps you see how many more days you need to work to reach your financial goal."
                    src={Image2}
                    namee="Regina Miles"
                    proff="Designer"
                />
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialCard
                    parag="Slate helps you see how many more days you need to work to reach your financial goal."
                    src={Image3}
                    namee="Regina Miles"
                    proff="Designer"
                />
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialCard
                    parag="Slate helps you see how many more days you need to work to reach your financial goal."
                    src={Image}
                    namee="Regina Miles"
                    proff="Designer"
                />
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialCard
                    parag="Slate helps you see how many more days you need to work to reach your financial goal."
                    src={Image2}
                    namee="Regina Miles"
                    proff="Designer"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Swipeer;
