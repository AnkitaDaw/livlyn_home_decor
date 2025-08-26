import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer_top">
                    <div className="container-xl">
                        <div className="row justify-content-between">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer_box">
                                    <img src="images/logo.png" alt="" className="footer_logo mb-3" />
                                    <p className="mb-0">Elevate your living space with stylish, affordable, and timeless home decor ideas. From modern designs to cozy touches, find inspiration that makes every room feel like home.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="footer_box">
                                    <h5 className="mb-3 mt-4 mt-sm-0">Customer Support</h5>
                                    <ul className="footer_links list-unstyled mb-0">
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Knowledge Center</a></li>
                                        <li><a href="#">Site Map</a></li>                                
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="footer_box mt-4 mt-lg-0">
                                    <h5 className="mb-3">Quick Links</h5>
                                    <ul className="footer_links list-unstyled mb-0">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Features</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Review</a></li>                                
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer_box mt-4 mt-lg-0">
                                    <h5 className="mb-3">Contact Us</h5>
                                    <p>Cyber Heights Hitech City Road, Madhapur, Hyderabad, Telangana - 500081</p>
                                    <p><a href="tel:+918957458745">+91 89574 58745</a></p>
                                    <p><a href="mailto:customer@logoname.com">customer@logoname.com</a></p>
                                    <div className="social_links d-flex gap-2">
                                        <a className="social_icon" href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                                        <a className="social_icon" href="#"><FontAwesomeIcon icon={['fab', 'x-twitter']} /></a>
                                        <a className="social_icon" href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                                        <a className="social_icon" href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_sec py-3">
                    <div className="container-xl">
                        <div className="col-12">
                            <p className="copyright_text text-white text-center mb-0">Copyright © 2025 Livlyn. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;