 import { Link } from "react-router-dom";

 function Header() {
     return (
         <header id="site-header" className="fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
               <img src="assets/images/logo.jpeg" style={{width:"100px"}}/>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="testimonials">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
     );
 }

 export default Header;