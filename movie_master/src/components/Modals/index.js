import React, { useEffect } from 'react'


import {
    Modal,
    Button,
    Container,
    Row,
    Col,
    Badge

} from "react-bootstrap";
import ModalStyle from './style'



const ModalHeader = (props) => {

    const {

        dataIdAndType,
        getMovieDetails,
        getSerieDetails,
        details,
        cardLogo,

    } = props

    const newMovie = () => {
        let releaseDate = new Date(details.release_date);
        let dateToday = new Date();
        let timeDiff = (new Date(dateToday)) - (new Date(releaseDate));
        let days = timeDiff / (1000 * 60 * 60 * 24);


        if (days < 30) {
            return (
                <Badge style={{ backgroundColor: 'red', opacity: '0.9', color: 'white', fontSize: '2.5rem', position: 'apsolute', float: 'right' }}>
                    New
                </Badge>)
        }
    }


    useEffect(() => {
        if (dataIdAndType.media_type === "movies") {
            getMovieDetails(dataIdAndType.id);
        } else if (dataIdAndType.media_type === "tv") {
            getSerieDetails(dataIdAndType.id)
        } else {
            getMovieDetails(dataIdAndType.id);
        }


    })



    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div style={ModalStyle.layout}>
                <Modal.Header style={{ backgroundImage: 'linear-gradient(red,black)' }} closeButton>
                    <Modal.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="contained-modal-title-vcenter">
                        <img
                            src={cardLogo}
                            style={{
                                width: '2.5rem', margin: '0.8rem 1.5rem 0.8rem 0.8rem'
                            }}
                            alt="React Bootstrap logo"
                        />   <h1 style={{ display: 'inline-block', marginRight: '4rem', paddingRight: '4rem' }} >{details.title ? details.title : details.original_name}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ paddingTop: '0' }}>
                    <Row style={{ backgroundImage: 'linear-gradient(rgba(119, 119, 119, 0.2),black)', }}>
                        <Col></Col>
                        <Col>
                            <img src={`http://image.tmdb.org/t/p/w342//${details.poster_path}`} style={{ boxShadow: '2rem 0.5rem   5px rgba(62, 137, 212, 0.3)', borderRadius: '5px', padding: '1.7rem' }} />
                            {newMovie()}
                        </Col>
                        <Col> </Col>
                    </Row>

                    <i style={{ color: 'red', textDecoration: 'italic', fontSize: '2.3rem', fontWeight: '600', display: 'block', margin: '2rem ' }} >{details.tagline ? ('" ' + details.tagline + ' "') : '"...a Must See Masterpiece"'}</i>
                    <h6 style={{ padding: '0 2rem' }}>{details.overview}</h6>
                </Modal.Body>

                <Modal.Footer>
                    <Container>
                        <Row>
                            <Col>
                                <h3>MM Votes  </h3>
                                <h1 style={{ color: 'red' }}>
                                    {'  ' + details.vote_count}
                                </h1>
                            </Col>
                            <Col>
                                <h3>Average grade  </h3>
                                <h1 style={{ color: 'red' }}>
                                    {'  ' + details.vote_average}
                                </h1>
                            </Col>
                            <Col>

                                <Button style={{
                                    fontWeight: 'bold',
                                    float: 'right',
                                    backgroundImage: 'linear-gradient(black,red)',
                                    padding: '1.3rem ',
                                    color: 'white',
                                    margin: '0.7rem',
                                    borderRadius: '5px',
                                    backgroundColor: 'black',
                                    borderColor: 'black'
                                }} onClick={props.onHide}>
                                    Close
                                        </Button>

                            </Col>
                        </Row>

                    </Container>



                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default ModalHeader;