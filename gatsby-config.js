module.exports = {
    siteMetadata: {
        title: "Gatsby + Rust Functions on Netlify",
        description:
            "An experiment with running Rust cloud functions on Netlify.",
        author: "🖖",
        siteURL:
            process.env.NODE_ENV === "production"
                ? "https://gatsby-rust.netlify.app/"
                : "http://localhost:8000/",
        social: {
            twitter: {
                username: "@codeselfstudy",
                url: "https://twitter.com/codeselfstudy",
            },
            youtube: {
                url: "https://www.youtube.com/codeselfstudy",
            },
        },
    },
    plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-emotion"],
};
