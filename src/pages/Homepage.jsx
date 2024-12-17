import React from "react";
import Base from "../components/Base";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Helmet } from "react-helmet";
// import './css/media_queries.css'


const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>Syn 606 | Homepage</title>
            </Helmet>

            <Base>
                <Header />
                <Skills />
                <Projects />
            </Base>
        </>
    );
};

export default Homepage;
