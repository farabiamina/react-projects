import React from 'react';
import {Link} from "react-router-dom";

const MovieItem = ({movie}) => {
    const link = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div>
            <Link to={`/movies/${movie.id}`}>
                <div className="movie-item">
                    <img src={link} alt=""/>
                    <h1>{movie.title}</h1>
                </div>
            </Link>
        </div>
    );
};

export default MovieItem;