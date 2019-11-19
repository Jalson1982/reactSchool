import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Spinn from '../components/Spinner/index';
import './style.css'


const LoadingStatus = (Component) => {
    return function MovieListWithLoadingStatus({ ...props }) {
        console.log(props)
        if (props.components_data.dynamic_data.loading === false) return (<Component {...props} />);

        return (
            <Container >
                <Row>

                    <h1 className='main_title'>Be Hold, fetching data :)</h1>
                    <Spinn />
                </Row>
            </Container>
        )
    }
}
export default LoadingStatus;

