import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Nav() {
    const theme = useSelector(store => store);
    const dispatch = useDispatch();
    return (
        <nav className={ theme === 'dark' ? "wrapper wrapper-dark-nav" : "wrapper"}>
            <div className="container">
                <ul>
                    <Link to="/" className="link">
                        <li>Home</li>
                    </Link>
                    <Link to="/movies" className="link">
                        <li>Movies</li>
                    </Link>
                    <Link to="/posts" className="link">
                        <li>Posts</li>
                    </Link>
                </ul>
                <span className="theme-toggler" onClick={() => dispatch({type: 'toggle'})}>
                    {	theme === 'light' ? '🌚' : '🌝' }
                </span>
            </div>
        </nav>
    )
}