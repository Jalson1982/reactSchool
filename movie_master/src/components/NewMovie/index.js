import React from 'react';
import { Badge } from 'react-bootstrap';
import './style.css';

const newMovie = (date) => {
    let releaseDate = new Date(date);
    let dateToday = new Date();
    let timeDiff = (new Date(dateToday)) - (new Date(releaseDate));
    let days = timeDiff / (1000 * 60 * 60 * 24);


    if (days < 30) {
        return (
            <Badge className='new_movie_badge'>
                New
            </Badge>)
    }
}

export default newMovie;