import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InnerBanner from "../components/InnerBanner";
import FAQ from "../components/FAQ";

function ShopPage() {
    return (
        <>
            <InnerBanner
                bannerTitle="Our Products"
                pageName="Shop"
            />

            <section className="prod_sec">
                <div className="container-xl">
                    <div className="heading_sec text-center mb-5">
                        <h2 className="sec_title">Shop from Our Collection</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <div className="prod_box">
                                <div className="prod_img mb-4">
                                    <img src="images/product_img1.png" alt="Tufted Arm Chair" className="w-100 h-100 object-fit-contain" />
                                </div>
                                <div className="prod_details text-center">
                                    <h4 className="mb-3">Tufted Arm Chair</h4>
                                    <h6 className="mb-0">₹13,599 &nbsp; <span><s>₹23,499</s></span></h6>
                                </div>
                                <div className="prod_box_overlay">
                                    <div className="prod_icon d-flex gap-3">
                                        <a href="product-details.html" className="hover_btn"><FontAwesomeIcon icon="eye" /></a>
                                        <a href="#" className="hover_btn"><FontAwesomeIcon icon="cart-shopping" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
        </>
    );
}

export default ShopPage;