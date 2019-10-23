import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BestMovies from "./pages/BestMovies";
import BestSeries from "./pages/BestSeries";
import ComingSoon from "./pages/ComingSoon";
import Search from "./pages/SearchResult";


class App extends Component {
  render() {
    return (

      <Router>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/best-movies" component={BestMovies} />
          <Route path="/best-series" component={BestSeries} />
          <Route path="/coming-soon" component={ComingSoon} />
          {/*<Route path="/search" component={Search} />*/}
        </Switch>
      </Router>
    );
  }
}

export default App;
