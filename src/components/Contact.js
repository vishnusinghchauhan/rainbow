function Contact() {
    return ( <
        >


        <section className="w3l-contact py-5" id="contact">
        <div className="container py-md-5 py-4">
            <div className="title-main text-center mx-auto mb-md-5 mb-4">
                <p className="text-uppercase">Get In Touch</p>
                <h3 className="title-style">Contact Us</h3>
            </div>
            <div className="row contact-block">
                <div className="col-md-7 contact-right">
                    <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                        <div className="input-grids">
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" name="w3lName" id="w3lName" placeholder="Your Name"
                                        className="contact-input" required="" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email"
                                        className="contact-input" required="" />
                                </div>
                            </div>
                            <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject"
                                className="contact-input" required="" />
                            <input type="text" name="w3lWebsite" id="w3lWebsite" placeholder="Website URL"
                                className="contact-input" required="" />
                        </div>
                        <div className="form-input">
                            <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here"
                                required=""></textarea>
                        </div>
                        <div className="text-start">
                            <button className="btn btn-style btn-style-3">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 ps-lg-5 mt-md-0 mt-5">
                    <div className="contact-left">
                        <div className="cont-details">
                            <div className="d-flex contact-grid">
                                <div className="cont-left text-center me-3">
                                    <i className="fas fa-building"></i>
                                </div>
                                <div className="cont-right">
                                    <h6>Company Address</h6>
                                    <p>SDS Nri Residency, Sector Omega 2, Greater Noida.</p>
                                </div>
                            </div>
                            <div className="d-flex contact-grid mt-4 pt-lg-2">
                                <div className="cont-left text-center me-3">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="cont-right">
                                    <h6>Call Us</h6>
                                    <p><a href="tel:+91 81788 86574">+91 81788 86574</a></p>
                                </div>
                            </div>
                            <div className="d-flex contact-grid mt-4 pt-lg-2">
                                <div className="cont-left text-center me-3">
                                    <i className="fas fa-envelope-open-text"></i>
                                </div>
                                <div className="cont-right">
                                    <h6>Email Us</h6>
                                    <p><a href="mailto:disha@rainbowkidsco.com" className="mail">disha@rainbowkidsco.com</a></p>
                                </div>
                            </div>
                            <div className="d-flex contact-grid mt-4 pt-lg-2">
                                <div className="cont-left text-center me-3">
                                    <i className="fas fa-headphones-alt"></i>
                                </div>
                                <div className="cont-right">
                                    <h6>Customer Support</h6>
                                    <p><a href="mailto:disha@rainbowkidsco.com" className="mail">disha@rainbowkidsco.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> <
        div class = "map" >

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.609456325271!2d77.5251965150836!3d28.514426582456336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18a02da1c67%3A0x2498175f2fc3752!2sSDS%20Nri%20Residency!5e0!3m2!1sen!2sin!4v1646165982120!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

        <
        /div>

        <
        />

    );

}

export default Contact;