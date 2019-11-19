import React from 'react';
import { Link } from 'react-router-dom';
import {
    Accordion,
    Card,
    Container,
    Jumbotron,
    Row,
    Col,
    Button,
    Badge
} from "react-bootstrap";
import './style.css'

const MidPageJumbo = (props) => {
    const { title, badge, text } = props.components_data.static_data;
    return (
        < Jumbotron >
            <Container>
                <Row>
                    <Col lg="6">
                        <div className='layout'>
                            {" "}
                            <h1 className='text'>
                                {title}
                                <Badge className='badge'>
                                    {badge}
                                </Badge><hr />
                            </h1>
                        </div>
                        <div>
                            <p>{text}</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        {" "}
                        <Link to="/">
                            <img
                                src={props.components_data.dynamic_data.jumbotronLogo}
                                width="70%"
                                className="movie_club_logo"
                                alt="Some Logo"
                            />
                        </Link>
                    </Col> <hr /><br />
                </Row>
            </Container>
        </Jumbotron >)
};

export default MidPageJumbo;