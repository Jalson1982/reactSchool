import React, { Component } from "react";
import { connect } from "react-redux";
import { getNowPlay } from "../redux/actions/otherActions/index";
import Layout from "./Layout";



class Home extends Component {

    componentDidMount() {
        this.props.getNowPlay();
        console.log(this.props)
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
    getNowPlay
}

export default connect(null, mapDispatchToProps)(Home);
