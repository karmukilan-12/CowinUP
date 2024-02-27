import React from 'react'
import "./Footer.css"
import "./Navbar.css"

const Footer = () => {
    return (
        <>
            <div id = "footer" className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3 className='fancy'>CowinUP</h3>
                            <p className='fcolor'>"Secure Your Shot, Safeguard Your Health: Book Your COVID Vaccine Slot Now!"</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/slot">Book Slot</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/home#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/home#faq">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/home#footer">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p className='fcolor'><i class="fa-solid fa-phone-volume"></i> +91 9121324083</p>
                            <p className='fcolor'><i class="fa-solid fa-envelope"></i> cowinup@gmail.com</p>
                            <p className='fcolor'><i class="fa-solid fa-paper-plane"></i> Tamil Nadu, India.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>©2024 Copyright CowinUP - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer