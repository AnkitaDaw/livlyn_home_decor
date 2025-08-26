import { Accordion } from "react-bootstrap";

function FAQ() {
    return (
        <>
            <section className="faq_sec pt-0">
                <div className="container-xl">
                    <div className="heading_sec text-center mb-4">
                        <h2 className="sec_title">Frequently Asked Questions</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 col-12">
                            <div className="faq_wrap">
                                <Accordion flush className="d-flex flex-column gap-3">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>1. What types of home decor products do you offer?</Accordion.Header>
                                        <Accordion.Body className="pt-0">
                                            <p>We offer a wide range of home decor items including wall art, lighting, rugs, furniture, cushions, curtains, and decorative accessories to help you style every corner of your home.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>2. Do you offer customization for furniture or decor items?</Accordion.Header>
                                        <Accordion.Body className="pt-0">
                                            <p>Yes, we offer customization on select products like cushions, furniture finishes, and wall art sizes. You can contact our support team to discuss your preferences.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>3. How long does delivery take?</Accordion.Header>
                                        <Accordion.Body className="pt-0">
                                            <p>Delivery typically takes 5-7 business days. Customized or made-to-order products may take longer, and the estimated time is mentioned on the product page.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>4. What is your return and exchange policy?</Accordion.Header>
                                        <Accordion.Body className="pt-0">
                                            <p>We accept returns within 7 days of delivery for most items, provided they are unused and in original packaging. Customized items are not eligible for return unless damaged or defective.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>5. How can I get help with choosing decor for my space?</Accordion.Header>
                                        <Accordion.Body className="pt-0">
                                            <p>Our team offers free styling advice! Just reach out through our contact form with photos of your space and your preferences, and we'll send back personalized recommendations.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FAQ;