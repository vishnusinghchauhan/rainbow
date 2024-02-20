 import { Link } from "react-router-dom";

 function Footer() {
     return (
         <footer className="w3l-footer-29-main">
        <div className="footer-29 pt-5 pb-4">
            <div className="container pt-md-4">
                <div className="row footer-top-29">
                    <div className="col-lg-4 col-md-6 footer-list-29">
                        <h6 className="footer-title-29">Contact Info </h6>
                        <p className="mb-2 pe-xl-5">Address : SDS Nri Residency, Sector Omega 2, Greater Noida     </p>
                        <p className="mb-2">Phone Number : <a href="tel:+91 81788 86574">+91 81788 86574</a></p>
                        <p className="mb-2">Email : <a href="mailto:disha@rainbowkidsco.com">disha@rainbowkidsco.com</a></p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 footer-list-29 mt-md-0 mt-4">
                        <ul>
                            <h6 className="footer-title-29">Quick Links</h6>
                        <li>
                            <Link  to="about">About Us</Link>
                        </li>
                        <li>
                            <Link  to="services">Services</Link>
                        </li>
                        <li>
                            <Link  to="gallery">Gallery</Link>
                        </li>
                        
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 ps-lg-5 ps-lg-4 footer-list-29 mt-md-0 mt-4">
                        <ul>
                            <h6 className="footer-title-29">Explore</h6>
                            <li>
                            <Link  to="testimonials">Testimonials</Link>
                            </li>
                            <li>
                                <Link  to="blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8 footer-list-29 mt-lg-0 mt-4 ps-lg-5">
                        <h6 className="footer-title-29">Subscribe</h6>
                        <form action="#" className="subscribe d-flex" method="post">
                            <input type="email" name="email" placeholder="Email Address" required="" />
                            <button className="button-style"><span className="fa fa-paper-plane"
                                    aria-hidden="true"></span></button>
                        </form>
                        <p className="mt-3">Subscribe to our mailing list and get updates to your email inbox.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
     );
 }

 export default Footer;