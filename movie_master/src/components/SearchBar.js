import React, { Component } from "react";

const SearchBar = () =>(
    <div className="nav-wrapper">
            <form>
                <div className="input-field">
                    
                <input id="search" type="search" required/>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                
                </div>
            </form>
    </div>
)

export default SearchBar;