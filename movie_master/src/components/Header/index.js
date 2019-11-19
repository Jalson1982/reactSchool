import React, { useState } from "react";

import {
    Container,
    Row,
    Col,
    Button,


} from "react-bootstrap";
import { manageStateDependingOnPath } from '../../helpers/manageStateDependingOnPath';
import Forms from '../Forms/index';
import Toast from 'react-bootstrap/Toast'
import './style.css';





const Header = (props) => {

    const { pageBackground, headerLogo } = props.components_data.dynamic_data;

    const {
        home_title_header,
        best_movies_title_header,
        best_series_title_header,
        coming_soon_title_header,
        discount_button
    } = props.components_data.static_data;

    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const path = props.path;

    const headerTitle = manageStateDependingOnPath(
        path,
        home_title_header,
        best_movies_title_header,
        best_series_title_header,
        coming_soon_title_header,
    )

    return (
        <div style={{
            backgroundImage: `url(${pageBackground}) `, backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <div className='header_layout'>
                <Container>
                    <Row >
                        <Col className='center_background' >
                            <h1 className='header_illustrated_title'>🅼🅾🆅🅸🅴 🅼🅰🆂🆃🅴🆁</h1>
                            <h1 className='header_title'>{headerTitle}</h1>
                            {/*<Toast show={showA} onClose={toggleShowA}>
                        <Forms />
                    </Toast>*/}
                            <Button className='header_button' onClick={toggleShowA}>
                                {discount_button}
                            </Button>
                            <img
                                src={headerLogo}
                                width="250rem"
                                height="250rem"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Col>
                    </Row>
                </Container>
            </div >
        </div>)
};

export default Header;