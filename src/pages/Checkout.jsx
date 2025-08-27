import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InnerBanner from "../components/InnerBanner";

function CheckoutPage() {
    return (
        <>
            <InnerBanner
                bannerTitle="Complete Purchase"
                pageName="Checkout"
            />

            <section className="checkout_sec">
                <div className="container-xl">
                    <div className="heading_sec text-center mb-5">
                        <h2 className="sec_title mb-3">Complete Your Shopping</h2>
                        <p>Simply fill the form, and get your delivery on time</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10 col-12">
                            <form className="checkout_form" id="checkout_form">
                                <div className="shipping_info mb-3">
                                    <h3 className="checkout_heading mb-4">Shipping Information</h3>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="each_field mb-3">
                                                <input placeholder="First Name" required="" className="form-control" type="text" name="fname" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="each_field mb-3">
                                                <input placeholder="Last Name" required="" className="form-control" type="text" name="lname" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="each_field mb-3">
                                                <input placeholder="Email" required="" className="form-control" type="email" name="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="each_field mb-3">
                                                <input placeholder="Phone Number" required="" className="form-control" type="text" name="phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="each_field mb-3">
                                                <input placeholder="Address" required="" className="form-control" type="text" name="address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="each_field mb-3">
                                                <select name="country" required="" className="form-select">
                                                    <option value="">Country</option>
                                                    <option value="India">India</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="each_field mb-3">
                                                <select name="country" required="" className="form-select">
                                                    <option value="">Select State</option>
                                                    <option value="India">West Bengal</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="each_field mb-3">
                                                <input placeholder="City" required="" className="form-control" type="text" name="city" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="each_field mb-3">
                                                <input placeholder="ZIP Code" required="" className="form-control" type="text" name="zip" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shipping_info">
                                    <h3 className="checkout_heading mb-4">Payment Information</h3>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="each_field mb-3">
                                                <input placeholder="Card Number" required="" className="form-control" type="text" name="cardNo" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-6">
                                            <div className="each_field mb-3">
                                                <select name="expiryMonth" required="" className="form-select">
                                                    <option value="">Month</option>
                                                    <option value="January">January</option>
                                                    <option value="February">February</option>
                                                    <option value="March">March</option>
                                                    <option value="April">April</option>
                                                    <option value="May">May</option>
                                                    <option value="June">June</option>
                                                    <option value="July">July</option>
                                                    <option value="August">August</option>
                                                    <option value="September">September</option>
                                                    <option value="October">October</option>
                                                    <option value="November">November</option>
                                                    <option value="December">December</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-6">
                                            <div className="each_field mb-3">
                                                <select name="expiryYear" required="" className="form-select">
                                                    <option value="">Year</option>
                                                    <option value="2025">2025</option>
                                                    <option value="2026">2026</option>
                                                    <option value="2027">2027</option>
                                                    <option value="2028">2028</option>
                                                    <option value="2029">2029</option>
                                                    <option value="2030">2030</option>
                                                    <option value="2031">2031</option>
                                                    <option value="2032">2032</option>
                                                    <option value="2033">2033</option>
                                                    <option value="2034">2034</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-12">
                                            <div className="each_field mb-3">
                                                <input placeholder="CVV" required="" className="form-control" type="text" name="cvv" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="theme_btn w-100 mt-3" id="checkout_submit">Proceed to Checkout <FontAwesomeIcon icon="chevron-right" /></button>
                            </form>                    
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CheckoutPage;