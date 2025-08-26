function DecorDetails() {
    return (
        <>
            <section className="details_sec">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="prod_img mb-4 mb-md-0">
                                <img src="images/product_img1.png" alt="Tufted Arm Chair" className="w-100 h-100 object-fit-contain" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="prod_details">
                                <h3 className="mb-3">Tufted Arm Chair</h3>
                                <p className="d-flex gap-3 mb-3">
                                    <span>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span>Loved By People</span>
                                </p>
                                <h6 className="prod_price mb-3 mb-xl-4">₹13,599 &nbsp; <span><s>₹23,499</s></span></h6>
                                <p className="mb-2">Experience the perfect blend of elegance and comfort with our Tufted Arm Chair, designed to elevate any living space. Featuring a timeless tufted backrest, this chair offers a sophisticated look inspired by classic design. The plush, high-density foam cushioning and generously padded armrests provide superior comfort, making it an ideal spot for reading, relaxing, or entertaining guests.</p>
                                <ul className="list-unstyled mb-3">
                                    <li>Elegant Tufted Design</li>
                                    <li>Premium Upholstery</li>
                                    <li>Comfortable Cushion</li>
                                    <li>Sturdy Wood Frame</li>
                                    <li>Easy to Maintain</li>
                                </ul>
                                <a href="cart.html" className="theme_btn">Add to Cart <i className="fa fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DecorDetails;