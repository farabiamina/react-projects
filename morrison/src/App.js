import './App.css';
import MovieList from "./comp/MovieList.jsx";


function App() {
  return (
    <div className="main">
      <div className="container">
        <MovieList />
      </div>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
