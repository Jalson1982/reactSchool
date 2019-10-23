
import React, { useState } from 'react';
import {
    Accordion,
    Container,
    Card,
    CardDeck,
    Row,
    Col,
    Button,
    Spinner,
    Badge


} from "react-bootstrap";
import CardModal from '../Modals/index';
import { Link } from 'react-router-dom';
import CardLayoutStyle from './style';

const CardLayout = props => {
    const {
        movies,
        loading,
        cardCompTitle,
        cardLogo,
        moviesToDisplay,
        showLess,
        showMore,
        getMovieDetails,
        getSerieDetails,
        details,
        searched
    } = props

    const [dataIdAndType, setDataIdAndType] = useState({ id: null, media_type: '' });
    const [modalShow, setModalShow] = useState(false);
    //const [moviesToShow, setMoviesToShow] = useState(8)

    const newMovie = (date) => {
        let releaseDate = new Date(date);
        let dateToday = new Date();
        let timeDiff = (new Date(dateToday)) - (new Date(releaseDate));
        let days = timeDiff / (1000 * 60 * 60 * 24);


        if (days < 30) {
            return (
                <Badge style={{
                    backgroundColor: 'red',
                    opacity: '0.9',
                    color: 'white',
                    left: '100px',
                    top: '150px',
                    position: 'apsolute',
                    fontSize: '1.5rem',
                    float: 'right',
                    zIndex: '2'
                }}>
                    New
                </Badge>)
        }
    }

    //const [buttonText, setButtonText] = React.useState('Read More');

    const handleButtonTextAndId = (id, type) => {
        setDataIdAndType({ id: id, media_type: type });

        {/* Namjeravo sam rijesiti dugme na kartici kada je otvoreno da pishe 'close',
        a kada je zavoreno 'Read More' i to samo za selectovanu karticu
        movies.filter((movie) => {
            debugger;
            if (movie.id === id) {
                if (buttonText == 'Close') {
                    setButtonText('Read More')
                } else {
                    setButtonText('Close')
                }
            }
        })*/}
    }


    if (!loading) {
        return (
            <div>
                {searched ? (
                    <h1 style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: '4rem',
                        padding: '3rem '
                    }}>
                        Your search for "
                        <span style={{
                            fontSize: '6rem',
                            color: 'red',
                            textShadow: '3px 3px black'
                        }}>{cardCompTitle}
                        </span>
                        " listed below</h1>
                ) : (
                        <h1 style={{
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: '4rem',
                            padding: '3rem '
                        }}>
                            <span style={{ fontSize: '6rem' }}>
                                {cardCompTitle}
                            </span>
                        </h1>
                    )}
                {modalShow === true ? (
                    <CardModal
                        cardLogo={cardLogo}
                        style={{ transition: 'height 0.6s' }}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        dataIdAndType={dataIdAndType}
                        getMovieDetails={getMovieDetails}
                        getSerieDetails={getSerieDetails}
                        details={details}
                    />) : (null)}
                < CardDeck style={CardLayoutStyle.cardDeck} >


                    {movies.length ? ( //mogao sam i moviesToDisplay da rijesim kroz hooks,a ovo je ostalo dok sam ucio state managment sa reduxom i svakako okidam window.scrooll ovako
                        movies.slice(0, moviesToDisplay).map((movie) =>
                            <Accordion key={movie.id} >

                                <Card key={movie.id} style={CardLayoutStyle.layout} xs={12}>
                                    <Card.Img src={`http://image.tmdb.org/t/p/w342//${movie.poster_path}`} />
                                    {newMovie(movie.release_date)}
                                    <Card.Body  >

                                        <Container>
                                            <img
                                                src={cardLogo}
                                                width="30%"
                                                height="30%"
                                                className="d-inline-block align-top"
                                                alt="React Bootstrap logo"
                                            />
                                            <Link to={'/' + movie.id}>
                                                <Card.Title style={CardLayoutStyle.titleStyle}>{movie.title || movie.name}</Card.Title>
                                            </Link>
                                            <Accordion.Collapse style={{ transition: 'height 0.6s' }} eventKey="0">
                                                <Card.Text style={{ paddingBottom: '2rem' }}>
                                                    {movie.overview}

                                                    <Button onClick={() => setModalShow(true)} style={CardLayoutStyle.trailerButton}  >
                                                        Detailed Info
                                                        </Button>
                                                </Card.Text>
                                            </Accordion.Collapse>{/*onClick={() => { getDetails(movie.id) }}*/}
                                            <Card.Header>
                                                <Accordion.Toggle style={{
                                                    borderColor: 'black',
                                                    backgroundColor: 'black'
                                                }} eventKey="0" >
                                                    <p style={CardLayoutStyle.cardButton} onClick={() => { handleButtonTextAndId(movie.id, movie.media_type) }} >
                                                        Read More
                                                    </p>
                                                </Accordion.Toggle>
                                                <p style={{ fontWeight: 'bold', paddingTop: "2rem" }}>
                                                    <span style={CardLayoutStyle.numberOfMovieVotes}>
                                                        {movie.vote_count}
                                                    </span> MOVIE LOVER VOTES</p>
                                            </Card.Header>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Accordion>

                        )

                    ) : (

                            <Container >
                                <Row>
                                    <Col></Col>
                                    <Col lg={8}><h1>NO AVAILABLE CONTENT </h1></Col>
                                    <Col></Col>

                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col><Spinner animation="border" variant="danger" /></Col>
                                    <Col></Col>
                                </Row>

                            </Container>
                        )
                    }
                    {movies.length && moviesToDisplay === 8 ? (

                        <Button style={CardLayoutStyle.showMoreNLessButton} onClick={() => showMore(movies.length)} >Show more</Button>

                    ) : (

                            moviesToDisplay !== 8 &&

                            <Button style={CardLayoutStyle.showMoreNLessButton} onClick={() => showLess(8)} >SHOW LESS</Button>

                        )}
                </CardDeck>

            </div >

        );
    } else {
        return (
            <Container>
                <Col> </Col>
                <Col><Spinner animation="border" variant="danger" /></Col>
                <Col></Col>

            </Container>
        )
    }

}

export default CardLayout;