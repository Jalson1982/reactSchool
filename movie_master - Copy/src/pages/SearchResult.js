import React, { Component } from "react";
import { connect } from "react-redux";
import { getNowPlay } from "../redux/store";
import Layout from "../components/Layout";



class Search extends Component {


    render() {

        return (
            <div>
                <Layout />
            </div>
        )
    }
}


export default Search;