import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import { userContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="info" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">Need Riders</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <Link to="/">
                            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/display/1">
                            <ReactBootStrap.Nav.Link href="#destination">Destination</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/about">
                            <ReactBootStrap.Nav.Link href="#about">About</ReactBootStrap.Nav.Link>
                        </Link>
                        <Link to="/login">
                            <ReactBootStrap.Nav.Link href="#about">{loggedInUser.email ? <h6>{loggedInUser.name || loggedInUser.email}</h6> : "Log In"}</ReactBootStrap.Nav.Link>
                        </Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    );
};

export default Header;