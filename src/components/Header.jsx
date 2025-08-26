import { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';


function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav gap-4 mx-auto mb-0">
                        <li className="nav-item">
                            <a className="nav-link p-0" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-0" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-0" href="shop.html">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-0" href="#">Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-0" href="#">Contact</a>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

            <header className="sticky-top z-2">
                <nav className="navbar navbar-expand-lg py-2 py-md-3">
                    <div className="container-xl">
                        <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-0">
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="shop.html">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="#">Review</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu_right">
                            <ul className="list-unstyled d-flex align-items-center gap-4 gap-md-5 gap-lg-4 mb-0">
                                <li>
                                    <a href="cart.html" className="cart_icon position-relative">
                                        <img src="images/cart.png" alt="Cart Icon" />
                                        <span className="cart_count">0</span>
                                    </a>
                                </li>
                                <li>
                                    <img src="images/search.png" alt="Search Icon" />
                                </li>
                                <li className="d-lg-none">
                                    <Button className="bg-transparent border-0 p-0" onClick={handleShow}>
                                        <span className="navbar-toggler-icon"></span>
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;