import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ThankyouPage() {
    return (
        <>
            <section className="thank_sec p-4 p-md-5">
                <div className="container-xl h-100">
                    <div className="row h-100">
                        <div className="col-12 align-self-center">
                            <div className="thank_text text-center">
                                <h2 className="text-uppercase pb-3 pb-xxl-4 mb-4 mb-xxl-5">Thank You! <span className="d-block">For your order</span></h2>
                                <p className="mb-2">We are currenyly preparing your order, and  let you know as soon as it ships.</p>
                                <p className="mb-0" id="printOD">Your Order ID is - <span className="fw-semibold fst-italic">#123456789</span></p>
                                <a href="index.html" className="theme_btn mt-4">Back to home <FontAwesomeIcon icon="right-chevron" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ThankyouPage;