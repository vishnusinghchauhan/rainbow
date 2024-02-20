function About() {
    return (
        <section className="w3l-servicesblock pt-lg-5 pt-4 pb-5 mb-lg-5" id="about">
        <div className="container pb-md-5 pb-4">
            <div className="row pb-xl-5 align-items-center">
                <div className="col-lg-6 position-relative home-block-3-left pb-lg-0 pb-5">
                    <div className="position-relative">
                        <img src="assets/images/img1.jpg" alt="" className="img-fluid radius-image" />
                    </div>
                    <div className="imginfo__box">
                        <h6 className="imginfo__title">Get a Appointment Today!</h6>
                        <p>Nemo enim ipsam oluptatem quia oluptas<br/> sit aspernatur aut odit aut fugit. </p>
                        <a href="tel:http://1(800)7654321"><i className="fas fa-phone-alt"></i> 1-800-654-3210</a>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5 pt-lg-0 pt-5">
                    <h3 className="title-style">We Are The Best Choice For Your Child</h3>
                    <p className="mt-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.</p>
                    <ul className="mt-4 list-style-lis pt-lg-1">
                        <li><i className="fas fa-check-circle"></i>Special Education</li>
                        <li><i className="fas fa-check-circle"></i>Access more then 100K online courses</li>
                        <li><i className="fas fa-check-circle"></i>Traditional Academies</li>
                    </ul>
                    <a href="contact.html" className="btn btn-style mt-5">Apply Now</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;