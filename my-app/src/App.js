import React from 'react';
import Profile from './components/profile.jsx';
import './App.css';


export default class App extends React.Component {
  state = {
    index: 0
  }

  render() {
    const persons = [
      {
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        name: "May",
        age: 21,
        country: "Canada",
        skills: ["HTML", 'CSS', "JS", "SQL"],   
      },
      {
        img: "https://s3.amazonaws.com/arc-authors/washpost/50eda441-600e-4fa5-9f0d-6cb1714ac367.png",
        name: "Jackson",
        age: 35,
        country: "UK",
        skills: ["Python", 'Java', "SQL"],   
      },
      {
        img: "https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg&ga=GA1.2.2042533943.1627603200",
        name: "Alexandra",
        age: 28,
        country: "Australia",
        skills: ["Java", 'Scala', "SQL"],
      },
      {
        img: "https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg",
        name: "Sandra",
        age: 45,
        country: "USA",
        skills: ["HTML", 'React', "JS", "CSS", "Angular"],
      }
    ]
    const randomProfile = () => {
      let ind = Math.floor(Math.random()*persons.length);
      while (ind === this.state.index){
        ind = Math.floor(Math.random()*persons.length);
      }
      this.setState({
        index: ind
      })
    }

    return (
      <React.Fragment>
        <h2>Random Profile Application</h2>
        <div id="main">
          <div id="box">
            <Profile person={persons[this.state.index]}/>  
            <button onClick={randomProfile}>Random profile</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}