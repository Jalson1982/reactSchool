import React, { useState } from "react";

import {
    Container,
    Row,
    Col,
    Button,


} from "react-bootstrap";
import Forms from '../Forms/index';
import Toast from 'react-bootstrap/Toast'
import HeaderStyle from './style';





const Header = ({ pageBackground, headerTitle, headerLogo }) => {


    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);


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

                            {/*<Toast show={showA} onClose={toggleShowA}>
                        <Forms />
                    </Toast>*/}


                            <div>

                                <Button style={HeaderStyle.button} onClick={toggleShowA}>
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