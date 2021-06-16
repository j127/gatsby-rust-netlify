import React from "react";
import Layout from "../components/layout";
import Metadata from "../components/metadata";

const Error404Page: React.FC = () => {
    return (
        <Layout>
            <Metadata
                title="Not Found"
                description="Sorry, the page could not be found."
            />

            <h1>404 Not Found</h1>

            <p>The page you requested could not be found.</p>
        </Layout>
    );
};

export default Error404Page;
