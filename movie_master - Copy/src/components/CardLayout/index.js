
import React from 'react';
import {
    Accordion,
    Container,
    Card,
    CardDeck,
    Row,
    Col,
    Button,
    Spinner,


} from "react-bootstrap";
import { Link } from 'react-router-dom';
import CardLayoutStyle from './style';

const CardLayout = props => {
    const { movies, loading, cardCompTitle, cardLogo, moviesToDisplay, showLess, showMore } = props
    const [buttonText, setButtonText] = React.useState('Read More');

    debugger;

    const handleButtonText = (id) => {
        movies.filter((movie) => {
            debugger;
            if (movie.id === id) {
                if (buttonText == 'Close') {
                    setButtonText('Read More')
                } else {
                    setButtonText('Close')
                }
            }
        })

    }

    if (!loading) {

        return (


            <div>

                <h1 style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: '4rem', padding: '3rem ' }}>{cardCompTitle}</h1>

                <CardDeck style={CardLayoutStyle.cardDeck} >

                    {movies.length ? (
                        movies.slice(0, moviesToDisplay).map((movie) =>
                            <Accordion key={movie.id} >

                                <Card key={movie.id} style={CardLayoutStyle.layout} xs={12}>
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
                                                    <div style={{ paddingBottom: '2rem' }}> {movie.overview}</div>

                                                    <Button style={CardLayoutStyle.trailerButton}  >watch trailer</Button>
                                                </Card.Text>
                                            </Accordion.Collapse>
                                            <Card.Header>
                                                <Accordion.Toggle style={{
                                                    borderColor: 'black',
                                                    backgroundColor: 'black'
                                                }} eventKey="0" >
                                                    <p style={CardLayoutStyle.cardButton} onClick={e => setButtonText(() => { handleButtonText(movie.id) })} >{buttonText}</p>
                                                </Accordion.Toggle>
                                                <p style={{ fontWeight: 'bold', paddingTop: "2rem" }}><h3 style={CardLayoutStyle.numberOfMovieVotes}>{movie.vote_count}</h3> MOVIE LOVER VOTES</p>
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

            </div>

        );
    } else {
        return (
            <Container>
                <Col></Col>
                <Col><Spinner animation="border" variant="danger" /></Col>
                <Col></Col>

            </Container>
        )
    }

}

export default CardLayout;