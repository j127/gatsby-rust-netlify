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
    plugins: [
        // This ignores the `src` dir, because I put the Rust code there.
        // {
        //     resolve: "gatsby-plugin-page-creator",
        //     options: {
        //         path: `${__dirname}/src`,
        //         ignore: ["*.js"],
        //     },
        // },
        // // It will load pages from here instead.
        // {
        //     resolve: "gatsby-plugin-page-creator",
        //     options: {
        //         path: `${__dirname}/gatsby/pages`,
        //     },
        // },
        "gatsby-plugin-emotion",
    ],
};
