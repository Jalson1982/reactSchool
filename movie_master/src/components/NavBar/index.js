import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
    Container,
    Navbar,
    Nav,
    FormControl,
    Form,
    Button,
    NavDropdown
} from "react-bootstrap";
import SearchBar from '../SearchBar/index';
import NavBarStyle from './style.js';
import './style.css';



const NavBar = ({ navbarLogo, handleSubmit }) => (
    <div style={NavBarStyle.layout}>
        <Container>
            <Router>
                <Navbar expand="lg">
                    <Navbar.Brand className="hoverButton" href="/">
                        <img
                            src={navbarLogo}
                            width="30%"
                            height="30%"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: 'red', opacity: '0.8' }} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="box5">
                            <Nav.Link className="hoverButton" style={NavBarStyle.links} href="/">
                                <h6> Home</h6>
                            </Nav.Link>
                            <Nav.Link className="hoverButton" style={NavBarStyle.links} href="/best-movies">
                                <h6>Best Movies</h6>
                            </Nav.Link>
                            <Nav.Link className="hoverButton" style={NavBarStyle.links} href="/best-series">
                                <h6> Best Series</h6>
                            </Nav.Link>
                            <Nav.Link className="hoverButton" style={NavBarStyle.links} href="/coming-soon">
                                <h6>Coming Soon</h6>
                            </Nav.Link>
                        </Nav>
                        {/* <Nav.Link style={NavBarStyle.links} href="/coming-soon">
                            <Button style={NavBarStyle.button} variant="success">
                                LOG IN
                            </Button>
                        </Nav.Link>
                        <Nav.Link style={NavBarStyle.links} href="/coming-soon">
                            <Button style={NavBarStyle.button} variant="primary">
                                SIGN UP
                            </Button>
                        </Nav.Link>*/}

                        <SearchBar handleSubmit={handleSubmit} />

                    </Navbar.Collapse>

                </Navbar>
            </Router>
        </Container>
    </div>
);

export default NavBar;

