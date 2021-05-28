import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../logo.png';

function Header(porps) {
    return (
        <Navbar light>
            <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                    <img src={logo} width="40" />
                    <span className="fa fa-user"></span>
                </NavbarBrand>
            </div>
        </Navbar>
    );
}

export default Header;