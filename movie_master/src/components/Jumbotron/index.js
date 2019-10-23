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
import MidPageJumboStyle from './style';

const MidPageJumbo = ({ jumbotronLogo }) => (
    <Jumbotron >
        <Container>
            <Row>
                <Col lg="6">
                    <div style={MidPageJumboStyle.layout}>
                        {" "}
                        <h1 style={{ fontWeight: "500" }}>
                            Greedy Member Movie Club
                            <Badge style={{ backgroundColor: 'red', opacity: '0.9', color: 'white' }}>
                                New
                             </Badge><hr />


                            {" "}



                        </h1>
                        <p>
                            Tko sam ja? Ja sam samostalna književnica i blogerica, bivša TV
                            voditeljica i novinarka, diplomirana profesorica hrvatskog jezika,
                            književnosti i filozofije. Dobitnica sam nagrade – Influencer
                            godine u kategoriji “književnost” za 2018. godinu po izboru
                            čitatelja i časopisa Cosmopolitan. Tko sam ja? Ja sam samostalna
                            književnica i blogerica, bivša TV voditeljica i novinarka,
                            diplomirana profesorica hrvatskog jezika, književnosti i
                            filozofije. Dobitnica sam nagrade – Influencer godine u kategoriji
                            “književnost” za 2018. godinu po izboru čitatelja i časopisa
                Cosmopolitan.{" "}
                        </p>

                    </div>
                </Col>

                <Col lg="6">
                    {" "}
                    <Link to="/">
                        <img
                            src={jumbotronLogo}
                            width="70%"
                            className="d-inline-block align-top"
                            alt="Some Logo"
                        />
                    </Link>
                </Col> <hr /><br />
            </Row>
            {/*<Accordion>
                <Card >
                    <Card.Header style={{ padding: '0' }}>


                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card><Accordion.Toggle style={{
                    textAlign: 'center',
                    margin: ' 0 ',
                    opacity: '0.9',
                    backgroundColor: 'red', color: 'white',
                    fontWeight: '500',
                    paddingTop: '0.5rem auto 0 auto',
                    borderColor: 'red'
                }} as={Button} eventKey="0" size="lg" block>

                    <p s>  GET ALL BENEFITS BY BEEING A MEMBER. JOIN MEMBERS CLUB TODAY</p>
                </Accordion.Toggle>
            </Accordion>*/}


        </Container>
    </Jumbotron>
);

export default MidPageJumbo;