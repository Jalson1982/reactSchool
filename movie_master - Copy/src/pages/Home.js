import React, { Component } from "react";
import { connect } from "react-redux";
import { getNowPlay } from "../redux/store";
import Layout from "../components/Layout";



class Home extends Component {

    componentDidMount() {
        this.props.getNowPlay();
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
