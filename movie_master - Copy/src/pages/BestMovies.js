import React, { Component } from "react";
import { connect } from "react-redux";
import { movieFilter } from "../redux/store";
import Layout from "../components/Layout";

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

