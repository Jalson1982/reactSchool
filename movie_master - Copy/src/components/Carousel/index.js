import React from 'react';

import {
    Carousel,
    Accordion,
    Container,
    Card,
    CardDeck,
    Row,
    Col,
    Button,
    Spinner,
    Toast

} from "react-bootstrap";
import CardLayoutStyle from '../CardLayout/style';
import { Link } from 'react-router-dom';

const CarouselBanner = ({ movies, loading, cardCompTitle, cardLogo }) => {
    return (
        <Carousel>
            {movies.length ? (
                movies.map((movie) =>

                    <Carousel.Item style={{ width: '20rem' }}>
                        <Accordion key={movie.id} >
                            <Card key={movie.id} style={CardLayoutStyle.layout}>
                                <Card.Img src={`http://image.tmdb.org/t/p/w342//${movie.poster_path}`} />
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
                                            <Card.Text>
                                                {movie.overview}</Card.Text>
                                        </Accordion.Collapse>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                                                <p style={{ fontWeight: 'bold', marginBottom: '0' }} >Read More</p>
                                            </Accordion.Toggle>
                                            <p style={{ fontWeight: 'bold', paddingTop: "2rem" }}><h3 style={CardLayoutStyle.numberOfMovieVotes}>{movie.vote_count}</h3> MOVIE LOVER VOTES</p>
                                        </Card.Header>


                                    </Container>
                                </Card.Body>
                            </Card>

                        </Accordion>
                    </Carousel.Item>

                )

            ) : (

                    <div >
                        <p>NO MOVIES TO SHOW</p>
                        <Spinner animation="border" variant="danger" />
                    </div>
                )
            }



        </Carousel>
    );
};

export default CarouselBanner;