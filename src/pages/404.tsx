import React from "react";
import Layout from "../components/layout";

const Error404Page: React.FC = () => {
    return (
        <Layout>
            <h1>404 Not Found</h1>
            <p>The page you requested could not be found.</p>
        </Layout>
    );
};

export default Error404Page;
