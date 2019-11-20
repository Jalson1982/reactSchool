
import React, { useState } from 'react';
import {
    Accordion,
    Container,
    Card,
    CardDeck,
    Row,
    Col,
    Button,



} from "react-bootstrap";
import FadeInRight from '../../animations/FadeInRight';
import FadeOutRight from '../../animations/FadeOutRight';
import MovieListModal from '../Modal/index';
import { manageStateDependingOnPath } from '../../helpers/manageStateDependingOnPath';
import { Link } from 'react-router-dom';
import NewMovie from '../NewMovie/index';
import './style.css';


const MovieList = props => {

    const {
        loading,
        searched,
        videoKey,
        movies,
        searchAndCategoriesTitle,
        cardLogo,
        details

    } = props.components_data.dynamic_data;

    const {
        movieDetails,
        serieDetails,
        movieVideo,
        serieVideo,
        castingCrew
    } = props.components_data.functions;

    const {
        home_title_movie_list,
        best_movies_title_movie_list,
        best_series_title_movie_list,
        coming_soon_title_movie_list,
        bottom_text,
        button_beneat_list_when_closed,
        button_beneat_list_when_open,
        default_title_text_first_part,
        detault_title_text_second_part,
        first_button,
        frist_button_clicked,
        movies_to_show,
        second_button } = props.components_data.static_data;

    const { static_data_modal } = props.components_data;

    const [dataIdAndType, setDataIdAndType] = useState({ id: null, type: '' });
    const [modalShow, setModalShow] = useState(false);

    const path = props.path;

    const movieListTitle = manageStateDependingOnPath(
        path,
        home_title_movie_list,
        best_movies_title_movie_list,
        best_series_title_movie_list,
        coming_soon_title_movie_list)

    const getIdAndType = (media) => {
        if (media.title) {
            setDataIdAndType({ id: media.id, type: 'Movies' })
        }
        else {
            setDataIdAndType({ id: media.id, type: 'Series' })
        }
    }

    const modalData = {
        cardLogo,
        dataIdAndType,
        movieDetails,
        serieDetails,
        movieVideo,
        serieVideo,
        castingCrew,
        videoKey,
        details,
        static_data_modal
    }

    var [moviesToShow, setMoviesToShow] = useState(movies_to_show);

    const showMoreORLess = (numOfItems) => {
        if (moviesToShow !== numOfItems) {
            console.log(moviesToShow)
            setMoviesToShow(moviesToShow = numOfItems)
        } else {
            setMoviesToShow(moviesToShow = numOfItems)
        }
    }


    return (
        <div>
            {/*fix this additional condnition length*/}
            {searched ? (<h1 className='main_title' >
                {default_title_text_first_part}
                <span className='searched_title' >{searchAndCategoriesTitle}
                </span>
                {detault_title_text_second_part}</h1>
            ) : (
                    <h1 className='main_title' >
                        {movieListTitle}
                    </h1>
                )}

            {modalShow === true ? (
                <MovieListModal
                    modal_data={modalData}
                    style={{ transition: 'height 0.6s' }}
                    show={modalShow}
                    onHide={() => setModalShow(false)}



                />) : (null)}

            < CardDeck className='movie_list_layout'  >
                {movies.length ? (
                    movies.slice(0, moviesToShow).map((movie) =>
                        <Accordion key={movie.id} > <FadeInRight>
                            <Card className='movie_list_style' key={movie.id} xs={12}> {NewMovie(movie.release_date || movie.first_air_date)}
                                <Card.Img className='img' src={`http://image.tmdb.org/t/p/w342//${movie.poster_path}`} />

                                <Card.Body  >
                                    <Container>
                                        <img
                                            src={cardLogo}
                                            style={{ zIndex: '2' }}
                                            width="30%"
                                            height="30%"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                        />
                                        <Link to={'/' + movie.id}>
                                            <Card.Title className='movie_title'>{movie.title || movie.name}</Card.Title>
                                        </Link>
                                        <Accordion.Collapse style={{ transition: 'height 0.6s' }} eventKey="0">
                                            <Card.Text style={{ paddingBottom: '2rem' }}>
                                                {movie.overview}

                                                <Button onClick={() => setModalShow(true)} className='more_details_button'  >
                                                    {second_button}
                                                </Button>
                                            </Card.Text>
                                        </Accordion.Collapse>{/*onClick={() => { getDetails(movie.id) }}*/}
                                        <Card.Header>
                                            <Accordion.Toggle className='toggle_background_style' eventKey="0" >
                                                <p className='movie_list_button' onClick={() => getIdAndType(movie)} >
                                                    {first_button}
                                                </p>
                                            </Accordion.Toggle>
                                            <p className='movie_votes_text'>
                                                <span className='movie_votes'>
                                                    {movie.vote_count}
                                                </span>  {bottom_text}</p>
                                        </Card.Header>
                                    </Container>
                                </Card.Body>
                            </Card></FadeInRight>
                        </Accordion>)
                ) : (
                        <Container >
                            <Row>
                                <Col></Col>
                                <Col lg={8}><h1>NO AVAILABLE CONTENT </h1></Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    )
                }
                {movies.length && moviesToShow === movies_to_show ? (
                    <Button
                        className='show_more_less_button'
                        onClick={() => showMoreORLess(movies.length)} >
                        {button_beneat_list_when_closed}
                    </Button>
                ) : (movies.length && movies.length !== movies_to_show &&
                    <Button
                        className='show_more_less_button'
                        onClick={() => showMoreORLess(movies_to_show)} >
                        {button_beneat_list_when_open}
                    </Button>
                    )}
            </CardDeck>
        </div >
    )
}

export default MovieList;