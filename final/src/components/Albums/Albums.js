import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function Albums() {
    const [loaded, setLoaded] = useState(false)
    const [movies, setMovies] = useState([])
    const theme = useSelector(store => store);
    const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1';
    useEffect(() =>{
        fetch(`${baseUrl}`, {
            method: 'GET',
        }).then((raw) => raw.json())
        .then((res) => {
            console.log(res.results)
            setMovies({movies: res});
            setLoaded({loaded: true});
        })
    }, [])
    
    return (
        <div className={ theme === 'dark' ? "wrapper wrapper-components-dark" : "wrapper wrapper-components"}>
            {!loaded ? 
                <h1>Loading...</h1> : 
                movies.movies.results.map(movie => (
                    <p key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></p>
                ))
                
        }
                
        </div>
    )
}
