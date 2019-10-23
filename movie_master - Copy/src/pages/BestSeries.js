import React, { Component } from "react";
import { connect } from "react-redux";
import { seriesFilter } from "../redux/store";
import Layout from "../components/Layout";

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

