import React, { Component } from "react";
import { connect } from "react-redux";
import { seriesFilter } from "../redux/actions/seriesActions/index";
import Layout from "./Layout";

class BestSeries extends Component {

  componentDidMount() {
    this.props.seriesFilter(28);
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
  seriesFilter
}

export default connect(null, mapDispatchToProps)(BestSeries);

