import React, { Component } from "react";
import MovieList from '../components/MovieList/index';
import Header from '../components/Header/index';
import MidPageJumbo from '../components/Jumbotron/index';
import FooterComp from '../components/Footer/index';
import NavBar from '../components/NavBar/index';
import ButtonCategories from '../components/ButtonCategories/index';
import SmartPropsHOC from './SmartPropsHOC';
import LoadingStatus from './LoadingStatus';
import { connect } from "react-redux";
import {
  seriesFilter,
  getNowPlay,
  comingSoon,
  movieFilter
} from '../newRedux/allActions';
//import {Redirect} from 'react-router-dom';

class Layout extends Component {

  componentDidMount = () => {

    switch (this.props.location.pathname) {
      case "/": return this.props.getNowPlay()
      case "/best-movies": return this.props.movieFilter(28);
      case "/best-series": return this.props.seriesFilter(28);
      case "/coming-soon": return this.props.comingSoon();
      default: return this.props.getNowPlay();
    }
  }

  /*mozemo i getDetails iskoristiti za prikupljanje 
  podataka i serija, i filmova, i animiranih filmova tako sto mu proslijedimo
    path,ali evo pishem razdvojeno uzimajuci u obzir savjet da jedna funkcija
    radi samo jednu stvar*/


  render() {
    const {
      searched
    } = this.props;

    const path = this.props.location.pathname

    const MovieListWithLoadingStatus = LoadingStatus(MovieList)


    return (
      <div>
        {searched ? (
          <SmartPropsHOC {...this.props.location.pathname} >
            <NavBar />
            <br /><br /><br />
            <ButtonCategories />
            <MovieList path={path} />
            <ButtonCategories />
            <FooterComp />
          </SmartPropsHOC>
        ) : (
            <SmartPropsHOC>
              <NavBar />
              <Header path={path} />
              <MidPageJumbo />
              <MovieList path={path} />
              <ButtonCategories />
              <FooterComp />
            </SmartPropsHOC>
          )}
      </div>
    )
  }
}
const mapDispatchToProps = {
  getNowPlay,
  movieFilter,
  seriesFilter,
  comingSoon
}

const mapStateToProp = state => {
  return {
    searched: state.searched
  };
};



export default connect(mapStateToProp, mapDispatchToProps)(Layout);
