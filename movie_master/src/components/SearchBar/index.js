import React, { useState } from "react";
import './style.css';



const SearchBar = (props) => {
    console.log(props)
    const [name, setName] = useState("");
    const { getMovie } = props.components_data.functions;
    const { default_text } = props.components_data.static_data.labela;

    const submitName = (evt) => {
        evt.preventDefault();
        getMovie(name);
        setName('')
    }

    return (
        <form className='search_lable_layout' onSubmit={submitName}>
            <label>
                <input
                    type="text"
                    placeholder={default_text}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={name == '' ? 'search_label' : 'search_lable_active'}
                />
            </label>
            <img
                src={props.components_data.dynamic_data.arrow}
                className={name == '' ? 'search_arrow' : 'search_arrow_active'}
                alt="React Bootstrap logo"
                onClick={submitName}
            />
        </form>);
}
export default SearchBar;