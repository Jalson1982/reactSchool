import React, { Component } from "react";
import { connect } from "react-redux";
import { movieFilter } from "../redux/actions/movieActions/index";
import Layout from "./Layout";

class BestMovies extends Component {

  componentDidMount() {
    this.props.movieFilter(28);
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
  movieFilter
}

export default connect(null, mapDispatchToProps)(BestMovies);

