import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const MovieDetails = () => {
    const [loaded, setLoaded] = useState(false)
    const [album, setAlbum] = useState([])
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU`, {
            method: 'GET',
        }).then((raw) => raw.json())
            .then((res) => {
                setAlbum({album: res});
                setLoaded({loaded: true});
            })
    }, [])

    function goBack() {
        navigate('/movies')
    }

    return (
        <div>
            {!loaded ?
                <h1>Loading...</h1> :
                <div>
                    <div id='movie'>
                        <div id='poster'>
                            <img src={'https://image.tmdb.org/t/p/w500/'+album.album.poster_path} alt='poster' />
                        </div>
                        <div id='about'>
                            <h1>{album.album.title}</h1>
                            <p>Release date: {album.album.release_date}</p>
                            <p>Genre: {album.album.genres.map(genre => <span>{genre.name}</span>)}</p>
                            {album.album.tagline && <p>Tagline: {album.album.tagline}</p>}
                            <p>Budget: ${album.album.budget}</p>
                            <p>Revenue: ${album.album.revenue}</p>
                        </div>
                        <div id='rating'>
                            <p>Rating: {album.album.vote_average} from {album.album.vote_count} votes</p>
                        </div>
                    </div>
                    <p>Overview: <br /> {album.album.overview}</p>
                </div>

            }
            <button onClick={goBack}>Go back</button>
        </div>
    )
};

export default MovieDetails;