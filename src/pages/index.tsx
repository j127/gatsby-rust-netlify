import React, { useState, useEffect } from "react";
import Spinner from "react-text-spinners";
import styled from "@emotion/styled";

import Layout from "../components/layout";
import Metadata from "../components/metadata";

const OutputArea = styled.div`
    margin-top: 7px;
    padding: 17px;
    background-color: #eee;
    border-radius: 3px;
`;

const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");

    const fetchData = async () => {
        const url = "/.netlify/functions/backend";
        const result = await fetch(url);
        const { msg } = await result.json();
        return msg;
    };

    useEffect(() => {
        fetchData()
            .then((data) => {
                setIsLoading(false);
                setMessage(data);
            })
            .catch((err) => {
                setIsLoading(false);
                setMessage(
                    "Sorry there was an error. This won't work until you deploy it."
                );
                console.error("there was an error", err);
            });
    }, []);

    return (
        <Layout>
            <Metadata
                title="The Home Page"
                description="This is the home page of the site"
                isHomePage={true}
            />

            <h1>Home Page</h1>

            <p>
                Anything below this line is from the Rust function on the
                backend.
            </p>

            <hr />

            <OutputArea>
                {isLoading ? (
                    <Spinner theme="dots2" backgroundColor="#eee" />
                ) : (
                    <p>{message}</p>
                )}
            </OutputArea>
        </Layout>
    );
};

export default HomePage;
