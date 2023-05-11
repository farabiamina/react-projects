import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Friends from "./components/Friends";
import Friend from "./components/Friend";
import {useState} from "react";

function App() {
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate();

    const friends = [
        {id: 1, name: "Alex", age: 35, country: "USA", img: "https://via.placeholder.com/350x150?text=Alex"},
        {id: 2, name: "John", age: 21, country: "Netherlands", img: "https://via.placeholder.com/350x150?text=John"},
        {id: 3, name: "Martha", age: 25, country: "United Kingdom", img: "https://via.placeholder.com/350x150?text=Martha"},
    ]

  const changeAuthed = (auth) => {
      setAuthed(auth);
  }

  const logout = () => {
      setAuthed(false);
      navigate("/");
  }

  return (
    <div className="App">
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/profile">Profile</Link>
        <Link className="link" to="/friends">Friends</Link>
        {!authed ? (
                <Link className="link" to="/login">Login</Link>
            ) : (
                <a className="link" onClick={logout}>Logout</a>
            )
        }

      </nav>
      <Routes>
          <Route path="/" element={
              <Home authed={authed}/>
          } />
          <Route path="/profile" element={
              <Profile authed={authed} setAuthed={changeAuthed}/>
          } />
          <Route path="/login" element={
              <Login authed={authed} setAuthed={changeAuthed}/>
          } />
          <Route path="/friends" element={
              <Friends authed={authed} setAuthed={changeAuthed} friends={friends}/>
          }>
              <Route path={friends[0].name} element={
                  <Friend friend={friends[0]}/>
              } />
              <Route path={friends[1].name} element={
                  <Friend friend={friends[1]}/>
              } />
              <Route path={friends[2].name} element={
                  <Friend friend={friends[2]}/>
              } />

              {/*{*/}
              {/*    friends.map((friend) =>*/}
              {/*        <Route path={friend.name} element={*/}
              {/*            <Friend friend={friend}/>*/}
              {/*        } />*/}
              {/*    )*/}
              {/*}*/}

          </Route>
      </Routes>

    </div>
  );
}

export default App;
