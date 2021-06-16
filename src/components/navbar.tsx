import React from "react";
import styled from "@emotion/styled";

import { Link } from "gatsby";

const Nav = styled.nav`
    display: flex;
`;

const NavItem = styled.div`
    padding: 7px 17px;
    margin: 7px;
    background-color: #eee;
    border-radius: 3px;
`;

const Navbar = () => {
    return (
        <Nav className="navbar">
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/about/">About</Link>
            </NavItem>
        </Nav>
    );
};

export default Navbar;
