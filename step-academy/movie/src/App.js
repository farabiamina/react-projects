import './App.css';
import movies from './movies.json';
import MovieList from "./comp/MovieList";
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route,  Link} from 'react-router-dom';
import MovieDetails from "./comp/MovieDetails";


function App() {
  return (
    <div className="App">

       {/*<MovieList />*/}
        <Router>
            <nav>
                <Link to="/movies">Movies</Link>
            </nav>
            <Routes>
                <Route path="/movies" element={
                    <MovieList />
                } />
                <Route path="/movies/:id" element={ <MovieDetails />} />
                {/*<Route path="/movies/:id" element={*/}
                {/*    <MovieDetails />*/}
                {/*} />*/}
            </Routes>
        </Router>

    </div>
  );
}

export default App;
