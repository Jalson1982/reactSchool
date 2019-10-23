import React, { Component } from "react";
import { connect } from "react-redux";
import { comingSoon } from "../redux/store";
import Layout from "../components/Layout";

class ComingSoon extends Component {

  componentDidMount() {
    this.props.comingSoon();
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
  comingSoon
}

export default connect(null, mapDispatchToProps)(ComingSoon);

