import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

import Navbar from "./navbar";

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
                    .navbar a,
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
