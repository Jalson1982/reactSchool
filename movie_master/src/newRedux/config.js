export const ENV_data = {
    URL: process.env.REACT_APP_API_URL,
    API_KEY: process.env.REACT_APP_API_KEY,
    getNowPlay: process.env.REACT_APP_API_GET_NOW_PLAY,
    comingSoon: process.env.REACT_APP_API_GET_NOW_PLAY,
    movieFilter: process.env.REACT_APP_API_MOVIE_FILTER,
    categoryFilter: process.env.REACT_APP_API_CATEGORY_FILTER,
    seriesFilter: process.env.REACT_APP_API_SERIE_FILTER,
    getMovie: process.env.REACT_APP_API_GET_MOVIE,
    movieDetails: process.env.REACT_APP_API_GET_MOVIE_DETAILS,
    serieDetails: process.env.REACT_APP_API_GET_SERIE_DETAILS,
    movieVideo: process.env.REACT_APP_API_GET_MOVIE_VIDEO,
    serieVideo: process.env.REACT_APP_API_GET_SERIE_VIDEO,
    castingCrew: process.env.REACT_APP_API_GET_CASTING_CREW,
    categories: process.env.REACT_APP_API_GET_CATEGORIES

}

const stringToArray = (apiUrl) => {
    return apiUrl.split(' ');
}

const joinUrlData = (urlArray, methodName, id) => {

    var URL = ENV_data.URL
    var ApiKey = ENV_data.API_KEY

    switch (methodName) {
        case 'movieDetails':
            return URL + urlArray[0] + id + urlArray[1] + ApiKey + urlArray[2]
        case 'serieDetails':
            return URL + urlArray[0] + id + urlArray[1] + ApiKey + urlArray[2]
        case 'getMovie':
            return URL + urlArray[0] + ApiKey + urlArray[1] + id + urlArray[2]
        case 'castingCrew':
            return URL + urlArray[0] + id + urlArray[1] + ApiKey
        case 'movieVideo':
            return URL + urlArray[0] + id + urlArray[1] + ApiKey + urlArray[2]
        case 'serieVideo':
            return URL + urlArray[0] + id + urlArray[1] + ApiKey + urlArray[2]
        default:
            return URL + urlArray[0] + ApiKey + urlArray[1]
    }
}

export const generateApiHit = (methodName, id) => {

    var keys = Object.keys(ENV_data);

    for (var i = 0; i < keys.length; i++) {
        if (methodName === keys[i]) {
            let name = methodName
            let envUrlData = Object(ENV_data[name])
            var urlArray = stringToArray(envUrlData)
            return joinUrlData(urlArray, methodName, id)
        }
    }
}

export default generateApiHit;