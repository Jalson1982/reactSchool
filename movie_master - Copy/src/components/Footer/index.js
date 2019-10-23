import React from 'react';
import {
    Card,
    Button,
    Container,
    Col,
    Row,
    InputGroup,
    FormControl

} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default function index() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Container style={{ padding: '3rem 2rem', color: 'white' }} >
                <Container>
                    <Row>
                        <Col lg={6}> <h1 style={{ padding: '1rem 0 2rem 2rem ' }}> 🅼🅾🆅🅸🅴 🅼🅰🆂🆃🅴🆁</h1>
                        </Col>
                        <Col></Col>
                        <Col lg={4} style={{ paddingTop: '1rem' }}>
                            <SocialIcon url="http://twitter.com/ " />
                            <SocialIcon url="http://facebook.com/ " />
                            <SocialIcon url="http://google.com/ " />
                            <SocialIcon url="http://whatsapp.com/ " />
                            <SocialIcon url="http://instagram.com/ " />
                        </Col>
                    </Row>
                </Container>

                <Row style={{ padding: '2rem', backgroundImage: 'linear-gradient(black,rgba(235, 25, 25, 0.7))', borderRadius: '5px' }}>
                    <Col lg={5} >
                        <div >
                            <h3 >ABOUT US</h3>
                            <h6 style={{ padding: '2rem 2rem 0 0' }}>
                                ko sam ja? Ja sam samostalna književnica i blogerica, bivša TV voditeljica i novinarka, diplomirana profesorica hrvatskog jezika, književnosti i filozofije. Dobitnica sam nagrade – Influencer godine u kategoriji “književnost” za 2018. godinu po izboru čitatelja i časopisa Cosmopolitan.
                            </h6>
                        </div>
                    </Col>
                    <Col>
                        <div >
                            <h3>MENU</h3>
                            <h5 style={{ padding: '2rem 2rem 0 0' }}>
                                Contacts
                            </h5>
                            <h5>Terms & Conditions</h5>
                            <h5>Privacy Policy</h5>
                            <h5>Members</h5>
                            <h5>Promos</h5>
                        </div>

                    </Col>
                    <Col >
                        <div style={{}}>
                            <h3>NEWSLETTER</h3>
                        </div>


                        <h6 style={{ padding: '2rem 2rem 0 0' }}>
                            A rover wearing a fuzzy suit dosen't alarm the real penguins, be who you are and enjoy Movies
                        </h6>
                        <InputGroup className="mb-3">

                            <FormControl
                                style={{ marginTop: '2rem' }}
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Prepend style={{ marginTop: '2rem' }}>
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col style={{ paddingTop: '1.5rem', fontSize: '1.2rem' }}> &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.moviemaster.com"> moviemaster.com  </a></Col>
                    <Col></Col>

                </Row>
            </Container>

        </div>
    )
}

