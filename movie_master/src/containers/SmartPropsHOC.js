import React, { Component } from 'react';
import Resources from '../static_resurces';
import { connect } from "react-redux";
import {
    serieDetails,
    seriesFilter,
    getNowPlay,
    comingSoon,
    categoryFilter,
    getMovie,
    movieFilter,
    movieDetails,
    movieVideo,
    serieVideo,
    castingCrew,
    getAllMovies
} from '../newRedux/allActions';


class SmartPropsHOC extends Component {

    componentDidMount = () => {
        console.log(this.props)

    }

    handleSubmit = (name) => {
        getMovie(name);
        window.scrollTo(0, 0);
    }


    passAdequatePropsToComponent = (componentName) => {

        const {
            movies, categories, details, videoKey, searched, loading, showModal,
            moviesToDisplay, errorMessage, headerTitle, searchAndCategoriesTitle,
            pageBackground, arrow, cardLogo, headerLogo, jumbotronLogo,
            getMovie, movieDetails, movieVideo, serieVideo, castingCrew,
            serieDetails, categoryFilter,
            getAllMovies
        } = this.props

        switch (componentName) {
            case "NavBar":
                return {
                    static_data: Resources.nav_bar,
                    form_data: {
                        login: Resources.log_in_form,
                        signup: Resources.sign_up_form
                    },
                    dynamic_data: {
                        cardLogo: cardLogo,
                        arrow: arrow
                    },
                    functions: {
                        getMovie: getMovie
                    }
                }
            case "Header":
                return {
                    static_data: Resources.header,
                    dynamic_data: {
                        headerTitle: headerTitle,
                        pageBackground: pageBackground,
                        headerLogo: headerLogo
                    },
                    functions: {

                    }
                }
            case "MidPageJumbo":
                return {
                    static_data: Resources.jumbotron,
                    dynamic_data: {
                        jumbotronLogo: jumbotronLogo
                    },
                    functions: {

                    }
                }

            case "MovieListWithLoadingStatus":
                return {
                    static_data: Resources.movie_list,

                    dynamic_data: {
                        loading: loading,
                        movies: movies,
                        searched: searched,
                        showModal: showModal,
                        errorMessage: errorMessage,
                        details: details,
                        searchAndCategoriesTitle: searchAndCategoriesTitle,
                        moviesToDisplay: moviesToDisplay,
                        cardLogo: cardLogo,

                    },
                    functions: {
                        serieDetails: serieDetails,
                        movieDetails: movieDetails,
                        movieVideo: movieVideo,
                        serieVideo: serieVideo
                    }
                }
            case "MovieList":
                return {
                    static_data: Resources.movie_list,
                    static_data_modal: Resources.modal,
                    dynamic_data: {
                        loading: loading,
                        searched: searched,
                        showModal: showModal,
                        movies: movies,
                        errorMessage: errorMessage,
                        details: details,
                        videoKey: videoKey,
                        searchAndCategoriesTitle: searchAndCategoriesTitle,
                        moviesToDisplay: moviesToDisplay,
                        cardLogo: cardLogo
                    },
                    functions: {
                        serieDetails: serieDetails,
                        movieDetails: movieDetails,
                        movieVideo: movieVideo,
                        serieVideo: serieVideo,
                        castingCrew: castingCrew
                    }
                }

            case "ButtonCategories":
                return {
                    static_data: Resources.buttons_component,
                    dynamic_data: {
                        categories: categories
                    },
                    functions: {
                        categoryFilter: categoryFilter
                    }
                }
            case "ButtonCategoriesMobile":
                return {
                    static_data: Resources.buttons_component,
                    dynamic_data: {
                        categories: categories
                    },
                    functions: {
                        categoryFilter: categoryFilter
                    }
                }

            case "Footer":
                return {
                    static_data: Resources.footer,
                    dynamic_data: {},
                    functions: {}
                }

            default:
                return Resources
        }
    }

    render() {
        const { children } = this.props
        const childElements = React.Children.map(children, child =>
            React.cloneElement(child, {
                components_data: this.passAdequatePropsToComponent(child.type.name)
            })
        )
        return (<div>
            {childElements}
        </div>)
    }
}


const mapStateToProp = state => {
    return {
        movies: state.movies,
        categories: state.categories,
        details: state.details,
        videoKey: state.videoKey,
        searched: state.searched,
        showModal: state.showModal,
        loading: state.loading,
        moviesToDisplay: state.moviesToDisplay,
        errorMessage: state.errorMessage,
        headerTitle: state.headerTitle,
        searchAndCategoriesTitle: state.searchAndCategoriesTitle,
        pageBackground: state.pageBackground,
        arrow: state.arrow,
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
    serieVideo,
    movieVideo,
    castingCrew,

}

export default connect(mapStateToProp, mapDispatchToProps)(SmartPropsHOC);