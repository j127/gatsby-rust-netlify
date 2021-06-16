import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Spinner from "react-text-spinners";
import Metadata from "../components/metadata";

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
        fetchData().then((data) => {
            setIsLoading(false);
            setMessage(data);
        });
    }, []);

    return (
        <Layout>
            {/* TODO: There's an error with the static query in this component.
                I'm not sure if it's because I moved gatsby to a non-standard dir.
                The graphql query does work in graphiql.

            <Metadata
                title="The Home Page"
                description="This is the home page of the site"
                isHomePage={true}
            /> */}

            <h1>Home Page</h1>

            <p>
                Anything below this line is from the Rust function on the
                backend.
            </p>
            <hr />
            <div>
                {isLoading ? <Spinner theme="dots2" /> : <p>{message}</p>}
            </div>
        </Layout>
    );
};

export default HomePage;
