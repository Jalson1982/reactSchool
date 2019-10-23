import React from 'react'
import {
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import ButtonCategoriesStyle from './style';
import './style.css'


const ButtonCategories = ({ categories, filterHandler }) => {
    return (
        <Container style={ButtonCategoriesStyle.layout}>
            <Row>

                <Col lg={12}>
                    <h1 style={ButtonCategoriesStyle.title}>Check Out Your Favorite Genres</h1>
                    {categories.map((category, index) =>
                        <Button onClick={() => { filterHandler(category.number, category.title) }} className='hoverButton' style={ButtonCategoriesStyle.button} key={index}>
                            {category.title}
                        </Button>
                    )}</Col>

            </Row>
        </Container>
    )

}

export default ButtonCategories;
