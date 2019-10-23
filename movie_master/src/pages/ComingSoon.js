import React, { Component } from "react";
import { connect } from "react-redux";
import { comingSoon } from "../redux/actions/otherActions/index";
import Layout from "./Layout";

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

