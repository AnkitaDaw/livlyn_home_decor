// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Review = ({innerPageClass}) => {

    return (
        <>
            <section className={"review_sec" + innerPageClass} id="review">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-xl-4 col-md-12 col-12">
                            <div className="review_text_wrap">
                                <div className="heading_sec text-start mb-4">
                                    <h2 className="sec_title pb-3 mb-4">Client's Review</h2>
                                    <p className="mb-0">Honest feedback from our valued customers, highlighting their experiences, satisfaction, and trust in our products and services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-12 col-12">
                            <div className="review_slider_wrap d-flex gap-4">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        1200: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    navigation={true} modules={[Navigation]}
                                    className="review_slider"
                                >
                                    <SwiperSlide>
                                        <div className="review_box position-relative p-4 z-1">
                                            <img src="/images/quote_img.png" alt="" className="quote_img position-absolute top-50 z-n1" />
                                            <div className="review_img mb-3">
                                                <img src="/images/review_img1.jpg" alt="Review Img" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                            <div className="review_text">
                                                <p className="mb-3">"Absolutely love the pieces! The quality is top-notch and they completely transformed my living room. Fast delivery and great service"</p>
                                                <h5 className="mb-0">~ K. Sritama</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="review_box position-relative p-4 z-1">
                                            <img src="/images/quote_img.png" alt="" className="quote_img position-absolute top-50 z-n1" />
                                            <div className="review_img mb-3">
                                                <img src="/images/review_img2.jpg" alt="Review Img" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                            <div className="review_text">
                                                <p className="mb-3">"Stylish, elegant, and affordable. Every item feels handpicked with care. My home finally reflects my personality—thank you!"</p>
                                                <h5 className="mb-0">~ D. Rajiv</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="review_box position-relative p-4 z-1">
                                            <img src="/images/quote_img.png" alt="" className="quote_img position-absolute top-50 z-n1" />
                                            <div className="review_img mb-3">
                                                <img src="/images/review_img1.jpg" alt="Review Img" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                            <div className="review_text">
                                                <p className="mb-3">"Absolutely love the pieces! The quality is top-notch and they completely transformed my living room. Fast delivery and great service"</p>
                                                <h5 className="mb-0">~ K. Sritama</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="review_box position-relative p-4 z-1">
                                            <img src="/images/quote_img.png" alt="" className="quote_img position-absolute top-50 z-n1" />
                                            <div className="review_img mb-3">
                                                <img src="/images/review_img2.jpg" alt="Review Img" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                            <div className="review_text">
                                                <p className="mb-3">"Stylish, elegant, and affordable. Every item feels handpicked with care. My home finally reflects my personality—thank you!"</p>
                                                <h5 className="mb-0">~ D. Rajiv</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Review;