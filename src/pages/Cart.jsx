import InnerBanner from "../components/InnerBanner";
import FAQ from "../components/FAQ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartPage() {
    return (
        <>
            <InnerBanner
                bannerTitle="Your Cart"
                pageName="Cart"
            />

            <section className="cart_sec">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 col-md-12 col-12">
                            <h3 className="cart_heading mb-4">Items in Bag <span>(2)</span></h3>
                            <div className="cart_wrap d-flex flex-column gap-3">
                                <div className="cart_row cart_empty d-flex flex-column justify-content-center align-items-center p-5">
                                    <h4 className="text-danger mb-3">Your cart is empty.</h4>
                                    <a href="shop.html" className="theme_btn py-3 px-4 fs-6">Shop now <FontAwesomeIcon icon="chevron-right" /></a>
                                </div>
                                <div className="cart_row d-flex justify-content-between align-items-center p-3">
                                    <div className="cart_prod d-flex gap-3 align-items-center">
                                        <div className="cart_img">
                                            <img src="/images/product_img1.png" alt="Tufted Arm Chair" className="w-100 h-100 object-fit-contain" />
                                        </div>
                                        <div className="cart_prod_details d-none d-md-block">
                                            <h5 className="mb-2">Tufted Arm Chair</h5>
                                            <h6 className="mb-0">₹13,599 &nbsp; <span><s>₹23,499</s></span></h6>
                                        </div>
                                    </div>
                                    <div className="quantity_change d-flex align-items-center gap-2">
                                        <button className="btn btn-sm btn-outline-secondary">−</button>
                                        <span className="quantity_count">1</span>
                                        <button className="btn btn-sm btn-outline-secondary">+</button>
                                    </div>
                                    <div className="cart_prod_price">
                                        <p className="mb-0">₹13,599</p>
                                    </div>
                                    <div className="cart_action">
                                        <a href="#" className="remove_btn"><img src="/images/delete_icon.svg" alt="Remove Product" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-12 col-12">
                            <div className="cart_total_box p-4 mt-4 mt-lg-0">
                                <h3 className="cart_heading mb-4">Price Details</h3>
                                <div className="cart_total_price">
                                    <p className="d-flex justify-content-between">
                                        <span>Bag Total</span>
                                        <span className="fw-semibold" id="cart_subtotal">₹20,995</span>
                                    </p>
                                    <p className="d-flex justify-content-between">
                                        <span>Discount</span>
                                        <span className="fw-semibold"><s>₹6,496</s></span>
                                    </p>
                                    <p className="d-flex justify-content-between">
                                        <span>Shipping Fee</span>
                                        <span className="fw-semibold text-uppercase">Free</span>
                                    </p>
                                    <p className="d-flex justify-content-between">
                                        <span>Convenience Fee</span>
                                        <span className="fw-semibold text-uppercase">₹99</span>
                                    </p>
                                </div>
                                <div className="cart_total">
                                    <p className="d-flex justify-content-between mb-0">
                                        <span>Net Payable</span>
                                        <span className="fw-semibold" id="cart_total">₹14,598</span>
                                    </p>
                                </div>
                                <a href="checkout.html" className="theme_btn w-100 mt-4">Proceed To Checkout <FontAwesomeIcon icon="chevron-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
        </>
    );
}

export default CartPage;