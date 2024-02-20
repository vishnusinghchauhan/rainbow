function Gallary() {
    return (
        <div className="w3l-grids-block-5 home-course-bg py-5" id="courses">
        <div className="container py-md-5 py-4">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" >
                <p className="text-uppercase">Best Courses</p>
                <h3 className="title-style">Find The Right Course For You</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="coursecard-single">
                        <div className="grids5-info position-relative">
                            <img src="assets/images/c1.jpg" alt="" className="img-fluid" />
                            <div className="meta-list">
                                <a href="courses.html">Art & Design</a>
                            </div>
                        </div>
                        <div className="content-main-top">
                            <div className="content-top mb-4 mt-3">
                                <ul className="list-unstyled d-flex align-items-center justify-content-between">
                                    <li> <i className="fas fa-book-open"></i> 43 Lesson</li>
                                    <li> <i className="fas fa-star"></i> 4.5</li>
                                </ul>
                            </div>
                            <h4><a href="courses.html">Educational Programs</a></h4>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                                <h6>$42.00</h6>
                                <a className="btn btn-style-primary" href="courses.html">Know Details<i
                                        className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="coursecard-single">
                        <div className="grids5-info position-relative">
                            <img src="assets/images/c2.jpg" alt="" className="img-fluid" />
                            <div className="meta-list">
                                <a href="courses.html" className="sec-2">Meditation</a>
                            </div>
                        </div>
                        <div className="content-main-top">
                            <div className="content-top mb-4 mt-3">
                                <ul className="list-unstyled d-flex align-items-center justify-content-between">
                                    <li> <i className="fas fa-book-open"></i> 72 Lesson</li>
                                    <li> <i className="fas fa-star"></i> 4.3</li>
                                </ul>
                            </div>
                            <h4><a href="courses.html">Best Meditation Classes</a></h4>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                                <h6>$36.00</h6>
                                <a className="btn btn-style-primary" href="courses.html">Know Details<i
                                        className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="coursecard-single">
                        <div className="grids5-info position-relative">
                            <img src="assets/images/c3.jpg" alt="" className="img-fluid" />
                            <div className="meta-list">
                                <a href="courses.html" className="sec-3">Games</a>
                            </div>
                        </div>
                        <div className="content-main-top">
                            <div className="content-top mb-4 mt-3">
                                <ul className="list-unstyled d-flex align-items-center justify-content-between">
                                    <li> <i className="fas fa-book-open"></i> 14 Lesson</li>
                                    <li> <i className="fas fa-star"></i> 4.2</li>
                                </ul>
                            </div>
                            <h4><a href="courses.html">Games Program in a Week</a></h4>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                                <h6>$30.00</h6>
                                <a className="btn btn-style-primary" href="courses.html">Know Details<i
                                        className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-sm-5 mt-4 pt-sm-0 pt-1">
                <a className="btn btn-style btn-style-secondary mt-sm-3" href="courses.html">
                    Browse more courses</a>
            </div>
        </div>
    </div>
    );

}

export default Gallary;