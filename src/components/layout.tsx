import React from "react";
import Navbar from "./navbar";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    max-width: 800px;
    margin: auto;
`;

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <Wrapper>
            <Global
                styles={css`
                    a {
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    .navbar a:hover {
                        text-decoration: none;
                    }
                `}
            />
            <Navbar />
            <main>{children}</main>
        </Wrapper>
    );
};

export default Layout;