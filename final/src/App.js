import { BrowserRouter as Router, Routes, Route,  Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Nav from './components/navigation/Nav'
import Home from './components/Home'
import Albums from './components/Albums/Albums';
import Album from './components/Album/Album';
import Photos from "./components/Photos/Photos";

function App() {
  const theme = useSelector(store => store);
  return (
    <div className={ theme === 'dark' ? "wrapper wrapper-components-dark" : "wrapper wrapper-components"}>
      <Router>
        {/*<Nav />*/}
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movies" element={ <Albums />} />
          <Route path="/movies/:id" element={ <Album />} />
          <Route path="/posts" element={ <Photos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
