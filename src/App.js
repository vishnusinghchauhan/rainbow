import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./common/Header"
import Footer from "./common/Footer"
import PageNotFound from "./common/PageNotFound"

import Home from "./components/Home"
import About from "./components/About"
import Blogs from "./components/Blogs"
import Contact from "./components/Contact"
import Gallary from "./components/Gallary"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"



function App() {
    return ( <
        >
        <
        Router >
        <Header />

        <
        Routes >
        <Route path="/" element={<Home />} />

        <
        Route path = "/about"
        element = { <About /> }
        />


        <
        Route path = "/blogs"
        element = { <Blogs /> }
        />

        <
        Route path = "/contact"
        element = { <Contact /> }
        />

        <
        Route path = "/gallery"
        element = { <Gallary /> }
        />

        <
        Route path = "/services"
        element = { <Services /> }
        />

        <
        Route path = "/testimonials"
        element = { <Testimonials /> }
        />

        <
        Route path = "*"
        element = { <PageNotFound /> }
        />

        <
        /
        Routes >

        <
        Footer / >


        <
        /
        Router >
        <
        />
    );
}

export default App;