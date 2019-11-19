import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
    Navbar,
    Nav,
    Col,
    FormControl,
    Form,
    Button
} from "react-bootstrap";
import Forms from '../Forms/index';
import SearchBar from '../SearchBar/index';
import FadeInRight from '../../animations/FadeInRight';
import FadeOutRight from '../../animations/FadeOutRight';
import './style.css';

const NavBar = (props) => {
    console.log(props)
    const { buttons, links } = props.components_data.static_data;
    const [showForm, setShowForm] = useState({ show: false, typeOfForm: '' });

    const toggleThroughForms = (bool, type, formType) => {
        if (formType === '' && showForm.show == false) {
            setShowForm({ show: !bool, typeOfForm: type })
        }
        else if (formType === type) {
            setShowForm({ show: !showForm.show, typeOfForm: '' })
        }
        else if (formType !== type) {
            setShowForm({ show: showForm.show, typeOfForm: type })
        }
        else {
            setShowForm({ show: bool, typeOfForm: type })
        }
    }

    const FormFadeInAndOut = (form_data) => {
        if (showForm.show == true) {
            return (<FadeInRight><Forms toggleThroughForms={toggleThroughForms} showForm={showForm} form_data={form_data} /></FadeInRight>)
        }/* else if (showForm.show == false && showForm.typeOfForm == type) {
            return (<FadeOutRight><Forms toggleThroughForms={toggleThroughForms} showForm={showForm} /></FadeOutRight>)
        }*/
        else {
            return null;
        }
    }

    return (

        <Router>
            <Navbar className='navbar_layout' expand="lg">
                <Navbar.Brand className="navbar_links logo_style" href="/">
                    <img
                        src={props.components_data.dynamic_data.cardLogo}
                        width="30%"
                        height="30%"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle className='hamburger_menu' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">


                        <Nav.Link href="/">
                            <h6 className="navbar_links "> {links.first_link}</h6>
                        </Nav.Link>
                        <Nav.Link href="/best-movies">
                            <h6 className="navbar_links">{links.second_link}</h6>
                        </Nav.Link>
                        <Nav.Link href="/best-series">
                            <h6 className="navbar_links"> {links.third_link}</h6>
                        </Nav.Link>
                        <Nav.Link href="/coming-soon">
                            <h6 className="navbar_links">{links.fourt_link}</h6>
                        </Nav.Link>
                    </Nav>

                    {FormFadeInAndOut(props.components_data.form_data)}
                    <SearchBar {...props} />

                    <Button onClick={() => toggleThroughForms(showForm.show, 'Log In', showForm.typeOfForm)} className="navbar_buttons login_button_color" >
                        {buttons.first_button}
                    </Button>
                    <Button onClick={() => toggleThroughForms(showForm.show, 'Sing Up', showForm.typeOfForm)} className=" navbar_buttons sign_up_button_color" >
                        {buttons.second_button}
                    </Button>
                </Navbar.Collapse>
            </Navbar>
        </Router >

    )
};

export default NavBar;

