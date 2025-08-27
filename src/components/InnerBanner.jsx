import { Link } from "react-router-dom";

const InnerBanner = ({bannerTitle, pageName, productName}) => {
    return (
        <>
            <section className="inner_sec">
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="inner_heading text-center">
                                <h2 className="mb-3">{bannerTitle}</h2>
                                <p className="mb-4 text-white"><Link to="/" className="text-decoration-underline text-white px-2">Home</Link>/ {pageName} {productName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InnerBanner;