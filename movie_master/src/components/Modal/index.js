import React, { useEffect } from 'react';
import {
    Modal,
    Button,
    Container,
    Row,
    Col,
    Badge

} from "react-bootstrap";
import NewMovieBadge from '../NewMovie/index';

import './style.css'



const MovieModal = (props) => {
    console.log(props)
    const {
        cardLogo,
        dataIdAndType,
        movieDetails,
        serieDetails,
        movieVideo,
        serieVideo,
        details,
        videoKey,
        castingCrew
    } = props.modal_data;

    const {
        button_body_middle_1,
        button_body_middle_2,
        default_tagline,
        footer_left,
        footer_middle,
        footer_right_button,
    } = props.modal_data.static_data_modal

    const { id, type } = dataIdAndType;

    useEffect(() => {
        if (type === "Movies") {
            movieDetails(id);
            console.log(props)
        } else if (type === "Series") {
            serieDetails(id)
        } else {
            movieDetails(id);
        }

    }, [])

    const getMovieOrSerieVideo = () => {
        if (type === 'Movies') {
            movieVideo(id);
        } else if (type === 'Series') {
            serieVideo(id);
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className='modal_layout_wrapper'>
                <Modal.Header className='modal_header_background' closeButton>
                    <Modal.Title className='modal_logo_and_title_wrapper' id="contained-modal-title-vcenter">
                        <img
                            src={cardLogo}
                            className='modal_logo'
                            alt="React Bootstrap logo"
                        />   <h1 className='modal_title' >{details.title ? details.title : details.original_name}</h1>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal_body' >
                    <Row >



                        {videoKey == ' ' ?

                            <Col lg={6} xs={8} className='modal_img'>
                                <div className='modal_badge'>
                                    {NewMovieBadge(details.release_date || details.first_air_date)}
                                </div>
                                <div >
                                    <img onClick={type === "Movies" ? () => { movieVideo(id) } : () => { serieVideo(id) }} src={`http://image.tmdb.org/t/p/w342//${details.poster_path}`} />
                                </div> </Col> :
                            <iframe className='modal_video_frame' src={`https://www.youtube.com/embed/${videoKey}`} allowFullScreen="true" title="Trailer" />}
                    </Row>
                    <Row>
                        <i className='modal_tagline' >{details.tagline ? ('" ' + details.tagline + ' "') : default_tagline}</i>
                        <Button
                            className='modal_close_and_trailer_button'
                            onClick={getMovieOrSerieVideo}>
                            {videoKey == ' ' ? button_body_middle_1 : button_body_middle_2}
                        </Button>
                    </Row>
                    <Row><h6 className='modal_overview_text'>{details.overview}</h6></Row>
                    <Row><h6 className='modal_overview_text'></h6></Row>

                </Modal.Body>

                <Modal.Footer>
                    <Container>
                        <Row>
                            <Col>
                                <h3>{footer_left} </h3>
                                <h1 className='modal_MM_votes_and_grades_num'>
                                    {'  ' + details.vote_count}
                                </h1>
                            </Col>
                            <Col>
                                <h3>{footer_middle} </h3>
                                <h1 className='modal_MM_votes_and_grades_num'>
                                    {'  ' + details.vote_average}
                                </h1>
                            </Col>
                            <Col>
                                <Button className='modal_close_and_trailer_button'
                                    onClick={props.onHide}>
                                    {footer_right_button}
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </div>
        </Modal >
    );
}

export default MovieModal;