import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Container,
    Row,
    Col,
    Button,
    Accordion

} from "react-bootstrap";
import ModalHeader from '../Modals/index.js';
import Toast from 'react-bootstrap/Toast'
import HeaderStyle from './style';





const Header = ({ pageBackground, headerTitle, headerLogo }) => {


    const [modalShow, setModalShow] = React.useState(false);


    return (

        <div style={{
            backgroundImage: `url(${pageBackground}) `, backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <div style={HeaderStyle.layout}>
                <Container>
                    <Row >
                        <Col style={HeaderStyle.centerBackground} >
                            <h1 style={HeaderStyle.titleIllustration}>
                                🅼🅾🆅🅸🅴 🅼🅰🆂🆃🅴🆁
                            </h1>
                            <h1 style={HeaderStyle.title}>
                                {headerTitle}
                            </h1>

                            <div>
                                <ModalHeader style={{ transition: 'height 0.6s' }}
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>


                            <div>
                                <Button style={HeaderStyle.button} onClick={() => setModalShow(true)}>
                                    TRY 30 DAYS FREE >
                                </Button>
                            </div>

                            <div>
                                <img
                                    src={headerLogo}
                                    width="250rem"
                                    height="250rem"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </div>)
};

export default Header;