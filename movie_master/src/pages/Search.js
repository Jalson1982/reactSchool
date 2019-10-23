import React, { Component } from "react";
import { connect } from "react-redux";
import { getNowPlay } from "../redux/store/reduxStore";
import Layout from "./Layout";
import { categoryFilter } from '../redux/actions/otherActions/index';



class Search extends Component {

    componentDidMount = () => {
        // this.props.categoryFilter(genre, movieGroup)
    }


    render() {

        return (
            <div>
                <Layout />
            </div>
        )
    }
}

const mapDispatchToProps = {
    categoryFilter
}

export default connect(null, mapDispatchToProps)(Search);