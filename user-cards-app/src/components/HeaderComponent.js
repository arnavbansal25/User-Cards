import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../logo.png';

function Header(props) {
    return (
        <Navbar light>
            <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                    <img src={logo} width="40" alt="brand logo" /> User Cards
                </NavbarBrand>
                <button className="" onClick={props.btnClick}>
                    Get Users
                </button>
            </div>
        </Navbar>
    );
}

export default Header;