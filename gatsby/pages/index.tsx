import React from "react";
import Layout from "../components/layout";
import Metadata from "../components/metadata";

const HomePage: React.FC = () => {
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                fugit nisi similique quaerat distinctio vel. Quis ad, provident
                ut quaerat dicta nesciunt exercitationem error sapiente unde,
                ullam, at aut cumque!
            </p>
        </Layout>
    );
};

export default HomePage;
