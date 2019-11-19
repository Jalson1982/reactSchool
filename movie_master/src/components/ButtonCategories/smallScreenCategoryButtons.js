import React from 'react'
import { Dropdown } from 'react-bootstrap';
import './style_mobile.css';

const SmallScreenCategoryButtons = (props) => {
    const { categoryFilter } = props.components_data.functions;
    return (
        <div className='mobile_buttons_wrapper'>
            <Dropdown className='dropdown_layout_mobile'>
                <Dropdown.Toggle className='dropdown_button_mobile' drop='down'>

                    {props.components_data.static_data.title}

                </Dropdown.Toggle>
                <Dropdown.Menu className='buttons_layout_mobile'>
                    {props.components_data.dynamic_data.categories.map((category, index) =>

                        <Dropdown.Item
                            onClick={() => categoryFilter(category.number, category.title)}
                            className='button_style_mobile' key={index} >
                            {category.title}
                        </Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown></div>)

}

export default SmallScreenCategoryButtons;
