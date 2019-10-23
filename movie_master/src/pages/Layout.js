import React, { Component } from "react";
import CardLayout from '../components/CardLayout/index';
import Header from '../components/Header/index';
import MidPageJumbo from '../components/Jumbotron/index';
import FooterComp from '../components/Footer/index';
import NavBar from '../components/NavBar/index';
import ButtonCategories from '../components/ButtonCategories/index';
import { connect } from "react-redux";
import {
  serieDetails,
  seriesFilter,
  getNowPlay,
  comingSoon,
  categoryFilter,
  showMoreHandler,
  showLessHandler,
  getMovie,
  movieFilter,
  movieDetails,
  movieVideo,
  getAllMovies
} from '../newRedux/allActions'

//import {Redirect} from 'react-router-dom'


class Layout extends Component {

  componentDidMount = () => {
    console.log(this.props)
    switch (this.props.location.pathname) {
      case "/": return this.props.getNowPlay()
      case "/best-movies": return this.props.movieFilter(28);
      case "/best-series": return this.props.seriesFilter(28);
      case "/coming-soon": return this.props.comingSoon();
      default: return this.props.getNowPlay();
    }
  }



  handleSubmit = (name) => {
    this.props.getMovie(name);
    window.scrollTo(0, 0);
  }
  /*mozemo i getDetails iskoristiti za prikupljanje 
  podataka i serija, i filmova, i animiranih filmova tako sto mu proslijedimo
    path,ali evo pishem razdvojeno uzimajuci u obzir savjet da jedna funkcija
    radi samo jednu stvar*/

  getMovieDetails = (id) => {
    this.props.movieDetails(id);
  }

  getSerieDetails = (id) => {
    this.props.serieDetails(id);
  }

  filterHandler = (genre, movieGroup) => {
    this.props.categoryFilter(genre, movieGroup)

    console.log(movieGroup)
    console.log(genre)

  }


  showMoreHandler = (moviesLength) => {
    this.props.showMoreHandler(moviesLength);

  }

  showLessHandler = (moviesToShow) => {
    this.props.showLessHandler(moviesToShow);
    if (this.props.searched) {
      window.scrollTo(0, 0)
    } else {
      window.scrollTo(0, 1450);
    }
  }


  findIndex(index) {
    this.props.getAll(index);;
  }

  render() {
    const {
      movies,
      categories,
      details,
      searched,
      loading,
      moviesToDisplay,
      errorMessage,
      headerTitle,
      cardCompTitle,
      pageBackground,
      navbarLogo,
      searchLogo,
      cardLogo,
      headerLogo,
      jumbotronLogo } = this.props;

    const pathName = this.props.location.pathname

    {/* const title = () => {
      if (genres !== '') {
        return 'Most popular movies in category : ' + genres
      } else if (searched) {
        return "You searched for Titles below"
      } else {
        return cardCompTitle
      }
    }
   Redirect sam izbacio misleci da je ovo ljepshe rjesenje
    
    if(searched){
  return(<Redirect to='/search')
} */}



    debugger;
    return (

      <div>
        {searched ? (<div>
          <NavBar
            navbarLogo={navbarLogo}
            searchLogo={searchLogo}
            handleSubmit={this.handleSubmit}

          />
          <br /><br /><br />
          <ButtonCategories
            categories={categories}
            filterHandler={this.filterHandler}
          />
          <CardLayout
            movies={movies}
            searched={searched}
            pathName={pathName}
            details={details}
            cardCompTitle={cardCompTitle}
            cardLogo={cardLogo}
            loading={loading}
            errorMessage={errorMessage}
            moviesToDisplay={moviesToDisplay}
            showMore={this.showMoreHandler}
            showLess={this.showLessHandler}
            input={this.inputHandler}
            getMovieDetails={this.getMovieDetails}
            getSerieDetails={this.getSerieDetails}
          />
          <FooterComp />
        </div>
        ) : (
            <div>
              <NavBar
                navbarLogo={navbarLogo}
                searchLogo={searchLogo}
                handleSubmit={this.handleSubmit}

              />
              <Header
                pageBackground={pageBackground}
                headerTitle={headerTitle}
                headerLogo={headerLogo}
              />
              <MidPageJumbo jumbotronLogo={jumbotronLogo} />
              <CardLayout
                movies={movies}
                pathName={pathName}
                details={details}
                cardCompTitle={cardCompTitle}
                cardLogo={cardLogo}
                loading={loading}
                errorMessage={errorMessage}
                moviesToDisplay={moviesToDisplay}
                showMore={this.showMoreHandler}
                showLess={this.showLessHandler}
                input={this.inputHandler}
                getMovieDetails={this.getMovieDetails}
                getSerieDetails={this.getSerieDetails}


              />
              <ButtonCategories
                categories={categories}
                filterHandler={this.filterHandler}
              />
              <FooterComp />
            </div>)}
      </div>

    )
  }
}
const mapStateToProp = state => {
  return {
    movies: state.movies,
    categories: state.categories,
    details: state.details,
    searched: state.searched,
    loading: state.loading,
    moviesToDisplay: state.moviesToDisplay,
    errorMessage: state.errorMessage,
    headerTitle: state.headerTitle,
    cardCompTitle: state.cardCompTitle,
    pageBackground: state.pageBackground,
    navbarLogo: state.navbarLogo,
    searchLogo: state.searchLogo,
    cardLogo: state.cardLogo,
    headerLogo: state.headerLogo,
    jumbotronLogo: state.jumbotronLogo
  };
};

const mapDispatchToProps = {
  getMovie,
  getNowPlay,
  movieFilter,
  seriesFilter,
  comingSoon,
  movieDetails,
  serieDetails,
  categoryFilter,
  showMoreHandler,
  showLessHandler

}

export default connect(mapStateToProp, mapDispatchToProps)(Layout);
