import MovieItem from "./MovieItem";
import {useState, useEffect} from "react";
// import movies from "../movies.json"
import react from "react";

function MovieList() {
  const [movies, setMovies]= useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
    .then(res => res.json())
    .then(data => {
      setMovies(data.results)
    })
    },[])
  return (
    <div className="movie-list">
      {
        movies.map(item =>(
          <MovieItem data={item} />
        ))
      }
      {/* <MovieItem data={movies[0]} />
      <MovieItem data={movies[1]} /> */}
    </div>
  );
}
export default MovieList;
