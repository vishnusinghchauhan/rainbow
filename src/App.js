function App() {
  return (
    <div classNameName="App">
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
                            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="courses.html">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <div className="header-search position-relative">
                        <div className="search-right mx-lg-2">
                            <a href="#search" className="btn search-btn p-0" title="search">
                                <i className="fas fa-search"></i></a>
                            
                        </div>
                    </div>
                </div>
                <div className="cont-ser-position">
                    <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div className="mode-container">
                                    <i className="gg-sun"></i>
                                    <i className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    </header>

    <section id="home" className="w3l-banner py-5">
        <div className="banner-content">
            <div className="container py-4">
                <div className="row align-items-center pt-sm-5 pt-4">
                    <div className="col-md-6">
                        <h3 className="mb-lg-4 mb-3">Your Kids Deserve The<span className="d-block">Best Education</span>
                        </h3>
                        <p className="banner-sub">Active Learning, Expert Teachers & Safe Environment</p>
                        <div className="d-flex align-items-center buttons-banner">
                            <a href="contact.html" className="btn btn-style mt-lg-5 mt-4">Admission Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 right-banner-2 text-end position-relative mt-md-0 mt-5">
                        <div className="sub-banner-image mx-auto">
                            <img src="assets/images/banner.png" className="img-fluid position-relative" alt=" " />
                        </div>
                        <div className="banner-style-1 position-absolute">
                            <div className="banner-style-2 position-relative">
                                <h4>Back to School</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


 <section className="services-w3l-block py-5" id="features">
        <div className="container py-md-5 py-4">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" >
                <p className="text-uppercase">Best Features</p>
                <h3 className="title-style">Achieve Your Goals With Edu School</h3>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                    <div className="icon-box icon-box-clr-1">
                        <div className="icon"><i className="fas fa-user-friends"></i></div>
                        <h4 className="title"><a href="#about">Expert Teachers</a></h4>
                        <p>Ras effic itur metusga via suscipit consect eturerse adi unde omnis.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-md-0 mt-4">
                    <div className="icon-box icon-box-clr-2">
                        <div className="icon"><i className="fas fa-book-reader"></i></div>
                        <h4 className="title"><a href="#about">Quality Education</a></h4>
                        <p>Ras effic itur metusga via suscipit consect eturerse adi unde omnis.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-lg-0 mt-4">
                    <div className="icon-box icon-box-clr-3">
                        <div className="icon"><i className="fas fa-user-graduate"></i></div>
                        <h4 className="title"><a href="#about">Life Time Support</a></h4>
                        <p>Ras effic itur metusga via suscipit consect eturerse adi unde omnis.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-lg-0 mt-4">
                    <div className="icon-box icon-box-clr-4">
                        <div className="icon"><i className="fas fa-university"></i></div>
                        <h4 className="title"><a href="#about">Best Scholarships</a></h4>
                        <p>Ras effic itur metusga via suscipit consect eturerse adi unde omnis.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

    <footer className="w3l-footer-29-main">
        <div className="footer-29 pt-5 pb-4">
            <div className="container pt-md-4">
                <div className="row footer-top-29">
                    <div className="col-lg-4 col-md-6 footer-list-29">
                        <h6 className="footer-title-29">Contact Info </h6>
                        <p className="mb-2 pe-xl-5">Address : Edu School, 10001, 5th Avenue, #06 lane street, NY - 62617.
                        </p>
                        <p className="mb-2">Phone Number : <a href="tel:+1(21) 234 4567">+1(21) 234 4567</a></p>
                        <p className="mb-2">Email : <a href="mailto:info@example.com">info@example.com</a></p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 footer-list-29 mt-md-0 mt-4">
                        <ul>
                            <h6 className="footer-title-29">Quick Links</h6>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="#become-teacher">Become a Teacher</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="#career">Career</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-6 ps-lg-5 ps-lg-4 footer-list-29 mt-md-0 mt-4">
                        <ul>
                            <h6 className="footer-title-29">Explore</h6>
                            <li><a href="#blog">Blog Posts</a></li>
                            <li><a href="#privacy">Privacy policy</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="#license">License & uses</a></li>
                            <li><a href="#tutorials">Tutorials</a></li>
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
                <p className="copy-footer-29 text-center pt-lg-2 mt-5 pb-2">© 2021 Edu School. All rights reserved. Design
                    by <a href="https://w3layouts.com/" target="_blank">W3Layouts</a></p>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
