import React, { Component } from "react";
import CardLayout from './CardLayout/index';
import Header from './Header/index';
import MidPageJumbo from './Jumbotron/index';
import FooterComp from './Footer/index';
import NavBar from './NavBar/index';
import ButtonCategories from './ButtonCategories/index';
import { connect } from "react-redux";
import {
  showMoreHandler,
  showLessHandler,
  getMovie,
  movieFilter,
  categoryFilter
} from '../redux/store';
//import {Redirect} from 'react-router-dom'


class Layout extends Component {

  handleSubmit = (name) => {
    this.props.getMovie(name);

  }

  filterHandler = (genre, movieGroup) => {
    this.props.categoryFilter(genre, movieGroup)
    window.scrollTo(0, 1450);
    console.log(movieGroup)

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
      genres,
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

    const title = () => {
      if (genres !== '') {
        return 'Most popular movies in category : ' + genres
      } else if (searched) {
        return "You searched for Titles below"
      } else {
        return cardCompTitle
      }
    }
    {/*Redirect sam izbacio misleci da je ovo ljepshe rjesenje
    
    if(searched){
  return(<Redirect to='/search')
} */}

    return (

      <div>
        {searched ? (<div>
          <NavBar
            navbarLogo={navbarLogo}
            searchLogo={searchLogo}
            handleSubmit={this.handleSubmit}

          />
          <br /><br /><br />
          <ButtonCategories categories={categories} filterHandler={this.filterHandler} />
          <CardLayout
            movies={movies}
            cardCompTitle={'Your search for "' + cardCompTitle + '" listed below'}
            cardLogo={cardLogo}
            loading={loading}
            errorMessage={errorMessage}
            moviesToDisplay={moviesToDisplay}
            showMore={this.showMoreHandler}
            showLess={this.showLessHandler}
            input={this.inputHandler}
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
                cardCompTitle={cardCompTitle}
                cardLogo={cardLogo}
                loading={loading}
                errorMessage={errorMessage}
                moviesToDisplay={moviesToDisplay}
                showMore={this.showMoreHandler}
                showLess={this.showLessHandler}
                input={this.inputHandler}

              />
              <ButtonCategories categories={categories} filterHandler={this.filterHandler} />
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
    genres: state.genres,
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
  movieFilter,
  categoryFilter,
  showMoreHandler,
  showLessHandler

}

export default connect(mapStateToProp, mapDispatchToProps)(Layout);
