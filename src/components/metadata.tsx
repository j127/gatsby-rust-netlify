import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type MetadataProps = {
    title: string;
    description: string;
    lang?: string;
    isNoIndex?: boolean;
    isHomePage?: boolean;
    bodyClass?: string;
    featuredImage?: string;
};

import defaultFeaturedImage from "../images/cat.jpg";

/**
 * Insert metadata in the head of the page.
 */
const Metadata: React.FC<MetadataProps> = ({
    title,
    description,
    isHomePage = false,
    lang = "en",
    isNoIndex = false,
    bodyClass = "default",
    featuredImage = defaultFeaturedImage,
}) => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetadata {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteURL
                        social {
                            twitter {
                                url
                                username
                            }
                            youtube {
                                url
                            }
                        }
                    }
                }
            }
        `
    );

    // The site name should come first in the HTML `<title>` only on the
    // homepage.
    const titleTemplate =
        isHomePage === true
            ? `${site.siteMetadata.title} | %s`
            : `%s | ${site.siteMetadata.title}`;

    // Adds robots noindex meta tag to a page if <Metadata isNoIndex={true} />
    const metaRobots = isNoIndex === true ? "noindex" : null;

    const img = featuredImage || defaultFeaturedImage;
    const twitterHandle = site.siteMetadata.social.twitter.username;

    return (
        <Helmet title={title} titleTemplate={titleTemplate}>
            <html lang={lang} />
            <body className={bodyClass} />
            <meta name="description" content={description} />

            {/* Override to remove the version number */}
            <meta name="generator" content="Gatsby" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={img} />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitterHandle} />

            {metaRobots ? <meta name="robots" content={metaRobots} /> : null}
        </Helmet>
    );
};

export default Metadata;
