import React from 'react';
import {
    Container,
    Col,
    Row,
    InputGroup,
    FormControl

} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import './style.css'

const Footer = props => {

    const {
        left_section,
        mid_section,
        right_section,
        copy_rights
    } = props.components_data.static_data;
    return (
        <div className='footer_frame' >
            <Container className='central_layout' >
                <Row>
                    <Col lg={6}>
                        {/* <withRouter> fixxxxxxxxxxxxxxx router </withRouter>*/}

                        <Link to='/' className='illustrated_title'>
                            🅼🅾🆅🅸🅴 🅼🅰🆂🆃🅴🆁
                        </Link>

                    </Col>
                    <Col></Col>
                    <Col lg={4} className='social_icons_layout'>
                        <SocialIcon className='social_icons_select' url="http://twitter.com/ " />
                        <SocialIcon className='social_icons_select' url="http://facebook.com/ " />
                        <SocialIcon className='social_icons_select' url="http://google.com/ " />
                        <SocialIcon className='social_icons_select' url="http://whatsapp.com/ " />
                        <SocialIcon className='social_icons_select' url="http://instagram.com/ " />
                    </Col>
                </Row>
                <Row className='mid_content_wrapper'>
                    <Col lg={5} className='section_padding' >
                        <h3 >{left_section.title}</h3>
                        <br></br>
                        <h6  >{left_section.text} </h6>
                    </Col>
                    <Col className='section_padding'>
                        <h3 > {mid_section.title}</h3>
                        <br></br>
                        <h5 className='mid_section_links'>{mid_section.link_1}                                </h5>
                        <h5 className='mid_section_links'> {mid_section.link_2}</h5>
                        <h5 className='mid_section_links'>{mid_section.link_3}</h5>
                        <h5 className='mid_section_links'>{mid_section.link_4}</h5>
                        <h5 className='mid_section_links'>{mid_section.link_5}</h5>
                    </Col>
                    <Col className='section_padding'>
                        <h3>{right_section.title}</h3>
                        <br></br>
                        <h6 >{right_section.text}</h6>
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
                    <Col className='footer_copyrights'>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.moviemaster.com">{copy_rights.title}</a></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;