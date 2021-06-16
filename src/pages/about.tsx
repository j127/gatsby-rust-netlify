import React from "react";
import Layout from "../components/layout";
import Metadata from "../components/metadata";

const AboutPage: React.FC = () => {
    return (
        <Layout>
            <Metadata title="About Us" description="This is the about page" />

            <h1>About</h1>

            <p>
                The code is{" "}
                <a href="https://github.com/j127/gatsby-rust-netlify">here</a>.
            </p>
        </Layout>
    );
};

export default AboutPage;
