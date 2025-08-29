import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const DecorDetails = ({product}) => {
    return (
        <>
            <section className="details_sec">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="prod_img mb-4 mb-md-0">
                                <img src={product.prodImg} alt={product.prodTitle} className="w-100 h-100 object-fit-contain" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="prod_details">
                                <h3 className="mb-3">{product.prodTitle}</h3>
                                <p className="d-flex gap-3 mb-3">
                                    <span>
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                    </span>
                                    <span>Loved By People</span>
                                </p>
                                <h6 className="prod_price mb-3 mb-xl-4">₹{(product.price.currentPrice).toLocaleString('en-IN')} &nbsp; <span><s>₹{(product.price.originalPrice).toLocaleString('en-IN')}</s></span></h6>
                                <p className="mb-2">{product.prodDescription}</p>
                                <ul className="list-unstyled mb-3">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <Link to="/cart" className="theme_btn">Add to Cart <FontAwesomeIcon icon="right-chevron" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DecorDetails;