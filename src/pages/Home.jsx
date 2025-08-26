import TrendyProds from "../components/TrendyProds";
import Benefit from "../components/Benefit";
import SpecialProds from "../components/SpecialProds";
import Review from "../components/Review";

function HomePage() {
    return (
        <>

            {/* <Banner Sec */}
            <section className="banner_sec">
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="banner_text text-center">
                                <h1 className="mb-3">Make Every Room Feel Like Home</h1>
                                <p className="mb-4">From soft textures to warm tones, explore décor that turns your house into a
                                    haven of comfort and personality.</p>
                                <a href="shop.html" className="theme_btn">Shop now <i className="fa fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Sec End */}

            <TrendyProds />

            
            {/* CTA Sec */}
            <section className="cta_sec">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-6 col-12">
                            <div className="cta_text">
                                <h2 className="sec_title text-white mb-0 mb-xl-2">Brighten your home with the perfect glow.</h2>
                                <p className="text-white pb-xl-3 mb-4">Add a touch of warmth and style to any room with our thoughtfully designed lamp - where function meets elegance.</p>
                                <a href="shop.html" className="cta_btn">Shop now <i className="fa fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Sec End */}


            {/* Featured Sec */}
            <section className="featured_sec" id="featured">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="featured_text">
                                <h2 className="sec_title pb-3 mb-0">Your Stylish Solution - The Versatile Accent Table</h2>
                                <p className="mb-4">Saleberate Solid Mango Wood 13-Inch Wide Round Contemporary Accent Table in Warm Natural, Fully Assembled, Ideal for Living Room and Bedroom.</p>
                                <div className="price_wrap d-flex align-items-center gap-4 pb-2 mb-4">
                                    <h5 className="mb-0">₹13,599 &nbsp; <span><s>₹23,499</s></span></h5>
                                    <a href="shop.html" className="theme_btn">Explore now <i className="fa fa-chevron-right"></i></a>
                                </div>
                                <div className="featured_img_wrap row d-none d-lg-flex">
                                    <img src="images/featured_img1.jpg" alt="Versatile Accent Table" className="w-50 h-100 object-fit-cover" />
                                    <img src="images/featured_img2.jpg" alt="Versatile Accent Table" className="w-50 h-100 object-fit-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="featured_prod d-flex flex-column justify-content-between h-100">
                                <div className="featured_img text-center">
                                    <img src="images/featured_prod1.png" alt="Versatile Accent Table" className="w-50 object-fit-contain" />
                                </div>
                                <div className="prod_specification">
                                    <p className="d-flex justify-content-between">
                                        <span>Top & Base</span>
                                        <span>Mango Wood</span>
                                    </p>
                                    <p className="d-flex justify-content-between">
                                        <span>Dimensions</span>
                                        <span>33D x 40W x 33H</span>
                                    </p>
                                </div>
                                <div className="featured_img_wrap row d-lg-none mt-5">
                                    <img src="images/featured_img1.jpg" alt="Versatile Accent Table" className="w-50 h-100 object-fit-cover" />
                                    <img src="images/featured_img2.jpg" alt="Versatile Accent Table" className="w-50 h-100 object-fit-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Sec End */}


            <Benefit />

            <SpecialProds />


            {/* CTA Light Sec */}
            <section className="cta_sec light">
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-6 col-12">
                            <div className="cta_text text-center">
                                <h2 className="sec_title mb-0 mb-xl-2">Beautiful thing that defines your elegance</h2>
                                <p className="pb-xl-3 px-lg-4 px-xl-5 mb-4">A timeless piece that speaks softly yet leaves a lasting impression, blending grace with refined simplicity.</p>
                                <a href="shop.html" className="theme_btn">Shop now <i className="fa fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Light Sec End */}


            {/* Featured Sec */}
            <section className="featured_sec review">
                <div className="container-xl">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="featured_prod d-flex flex-column justify-content-between h-100">
                                <div className="featured_img text-center">
                                    <img src="images/featured_prod2.png" alt="Coffee Table" className="w-50 object-fit-contain" />
                                </div>
                                <div className="prod_specification">
                                    <p className="d-flex justify-content-between">
                                        <span>Top & Base</span>
                                        <span>Mango Wood</span>
                                    </p>
                                    <p className="d-flex justify-content-between">
                                        <span>Dimensions</span>
                                        <span>33D x 40W x 33H</span>
                                    </p>
                                </div>
                                <div className="featured_review bg-light d-flex d-lg-none align-items-start gap-3 p-3 mt-5">
                                    <div className="featured_review_img">
                                        <img src="images/featured_review_img.jpg" alt="Coffee Table" className="w-100 h-100 object-fit-cover" />
                                    </div>
                                    <div className="featured_review_text">
                                        <h4 className="mb-2">Marble Finish Wooden Coffee Table</h4>
                                        <p className="mb-2">Stylish and sturdy, this marble finish wooden coffee table adds a touch of elegance to any room. Perfect blend of modern design & everyday function. <a href="#">Learn More</a></p>
                                        <h5 className="featured_review_price mb-0">₹13,599 &nbsp; <span><s>₹23,499</s></span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="featured_text">
                                <h2 className="sec_title pb-3 mb-0">Elegant and Durable!</h2>
                                <p className="mb-3">"This coffee table instantly elevated my living room. The marble finish looks premium and blends beautifully with the wooden base. It's sturdy, easy to clean, and has become a conversation starter when guests visit."</p>
                                <h5 className="mb-4">~ Priya R.</h5>
                                <div className="featured_review d-none d-lg-flex align-items-center gap-4">
                                    <div className="featured_review_img">
                                        <img src="images/featured_review_img.jpg" alt="Coffee Table" className="w-100 h-100 object-fit-cover" />
                                    </div>
                                    <div className="featured_review_text">
                                        <h4 className="mb-3">Marble Finish Wooden Coffee Table</h4>
                                        <p>Stylish and sturdy, this marble finish wooden coffee table adds a touch of elegance to any room. Perfect blend of modern design & everyday function. <a href="#">Learn More</a></p>
                                        <h5 className="featured_review_price mb-0">₹13,599 &nbsp; <span><s>₹23,499</s></span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Sec End */}


            <Review 
                innerPageClass=""
            />

        </>
    );
}

export default HomePage;