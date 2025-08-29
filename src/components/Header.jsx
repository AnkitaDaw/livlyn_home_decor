import { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


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
                            <Link to="/" className="nav-link p-0" onClick={handleClose}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth to="/#features" className="nav-link p-0" onClick={handleClose}>Features</HashLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link p-0" onClick={handleClose}>Shop</Link>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth to="/#review" className="nav-link p-0" onClick={handleClose}>Review</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth to="/#footer" className="nav-link p-0" onClick={handleClose}>Contact</HashLink>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

            <header className="sticky-top z-2">
                <nav className="navbar navbar-expand-lg py-2 py-md-3">
                    <div className="container-xl">
                        <Link to={"/"} className='navbar-brand'><img src="/images/logo.png" alt="logo" /></Link>
                        {/* <a className="navbar-brand" href="index.html"><img src="/images/logo.png" alt="logo" /></a> */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link p-0">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <HashLink smooth to="/#features" className="nav-link p-0">Features</HashLink>
                                </li>
                                <li className="nav-item">
                                    <Link to="/shop" className="nav-link p-0">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <HashLink smooth to="/#review" className="nav-link p-0">Review</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink smooth to="/#footer" className="nav-link p-0">Contact</HashLink>
                                </li>
                            </ul>
                        </div>
                        <div className="menu_right">
                            <ul className="list-unstyled d-flex align-items-center gap-4 gap-md-5 gap-lg-4 mb-0">
                                <li>
                                    <Link to="/cart" className="cart_icon position-relative">
                                        <img src="/images/cart.png" alt="Cart Icon" />
                                        <span className="cart_count">0</span>
                                    </Link>
                                </li>
                                <li>
                                    <img src="/images/search.png" alt="Search Icon" />
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