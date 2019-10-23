import React, { useState } from "react";
import SearchBarStyle from './style';



const SearhBar = ({ handleSubmit }) => {

    const [name, setName] = useState("");

    const submitName = (evt) => {
        evt.preventDefault();
        handleSubmit(name);
        setName('')
    }
    return (
        <form onSubmit={submitName}>
            <label>

                <input
                    type="text"
                    style={SearchBarStyle.labela}
                    placeholder='Search for Movies and more ...'
                    value={name}
                    onChange={e => setName(e.target.value)}

                />
            </label>

        </form>
    );
}
export default SearhBar;