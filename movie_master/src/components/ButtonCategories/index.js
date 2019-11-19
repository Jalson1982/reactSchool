import React from 'react'
import {
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import SmallScreenCategoryButtons from './smallScreenCategoryButtons';
import './style.css';

const BigScreenCategoryButtons = props => {

    const { categoryFilter } = props.components_data.functions;
    return (
        <Container className='buttons_layout'>
            <Row>
                <Col lg={12}>
                    <h1 className='buttons_title'>
                        {props.components_data.static_data.title}
                    </h1>
                    {props.components_data.dynamic_data.categories.map((category, index) =>
                        <Button onClick={() => categoryFilter(category.number, category.title)} className='hoverButton button_style' key={index}>
                            {category.title}
                        </Button>
                    )}
                </Col>
            </Row>
        </Container>)
}

const ButtonCategories = (props) => {
    let width = window.innerWidth;
    return (
        width > 500 ? <BigScreenCategoryButtons {...props} /> : <SmallScreenCategoryButtons {...props} />
    )
}
export default ButtonCategories;
