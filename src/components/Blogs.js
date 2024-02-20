function Blogs() {
    return (
        <div className = "w3l-blog-block-5 py-5" id="blog">
        <div className="container py-md-5 py-4">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" >
                <p className="text-uppercase">Our News</p>
                <h3 className="title-style">Latest <span>Blog</span> Posts</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="blog-card-single">
                        <div className="grids5-info">
                            <a href="#blog"><img src="assets/images/blog2.jpg" alt="" /></a>
                            <div className="blog-info">
                                <h4><a href="#blog">ABA Program Helps a lot</a></h4>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt inc
                                    officia deserunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="blog-card-single">
                        <div className="grids5-info">
                            <a href="#blog"><img src="assets/images/blog1.jpg" alt="" /></a>
                            <div className="blog-info">
                                <h4><a href="#blog">Therapeutic Sessions at Care for Autism that aim for Better Growth of your Child</a></h4>
                                <p>Care for Autism has experts catering to major therapeutic sessions that are an essential part of treatment for children with</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="blog-card-single">
                        <div className="grids5-info">
                            <a href="#blog"><img src="assets/images/blog3.jpg" alt="" /></a>
                            <div className="blog-info">
                                <h4><a href="#blog">Fun-filled Learning Activities for Special Children</a></h4>
                                <p>Play is an activity that engages children and makes them feel happy. The right approach and guidance for different playful</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default Blogs;