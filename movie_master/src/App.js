import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLayoutSwitcher from './containers/Layout';

class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={PageLayoutSwitcher} />
          <Route path="/best-movies" component={PageLayoutSwitcher} />
          <Route path="/best-series" component={PageLayoutSwitcher} />
          <Route path="/coming-soon" component={PageLayoutSwitcher} />
          {/*<Route path="/search" component={Search} />
          <Route path="/category_search" component={Search} />*/}
        </Switch>
      </Router>
    );
  }
}

export default App;
