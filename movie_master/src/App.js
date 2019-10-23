import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BestMovies from "./pages/BestMovies";
import BestSeries from "./pages/BestSeries";
import ComingSoon from "./pages/ComingSoon";
import Search from "./pages/Search";
import PageLayoutSwitcher from './pages/Layout';


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

        {/* Home,BestMovies,ComingSoon,Search suvishne komponente */}

        {/*<Switch>
          <Route exact path="/" component={Home} />
          <Route path="/best-movies" component={BestMovies} />
          <Route path="/best-series" component={BestSeries} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route path="/search" component={Search} />
          <Route path="/category_search" component={Search} />
        </Switch>*/}
      </Router>
    );
  }
}

export default App;
