import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allProducts } from "../data/product-data";
import { Link } from "react-router-dom";

function TrendyProds() {

    const trendyProducts = allProducts.slice(0, 4);

    return (
        <>
            <section className="prod_sec">
                <div className="container-xl">
                    <div className="heading_sec text-center mb-5">
                        <h2 className="sec_title">Trendy Collections</h2>
                    </div>
                    <div className="row gy-4">
                        {trendyProducts.map(product => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={product.id}>
                                <div className="prod_box h-100">
                                    <div className="prod_img mb-4">
                                        <img src={product.prodImg} alt={product.prodTitle} className="w-100 h-100 object-fit-contain" />
                                    </div>
                                    <div className="prod_details text-center">
                                        <h4 className="mb-3">{product.prodTitle}</h4>
                                        <h6 className="mb-0">₹{product.price.currentPrice} &nbsp; <span><s>₹{product.price.originalPrice}</s></span></h6>
                                    </div>
                                    <div className="prod_box_overlay">
                                        <div className="prod_icon d-flex gap-3">
                                            <Link to={`/product-details/${product.slug}`} className="hover_btn"><FontAwesomeIcon icon="eye" /></Link>
                                            <Link to="/cart" className="hover_btn"><FontAwesomeIcon icon="cart-shopping" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default TrendyProds;