import './App.css';
import React from 'react';
import Timer from './Timer.js';

class App extends React.Component {
  state = {
    showTimer: true
  }
  render() {
    return (
      <div className="box">
        <p className="p1">App component</p>
        {this.state.showTimer && <Timer/>}  
        {this.state.showTimer && <button onClick={() => this.setState({showTimer: false})}>Stop and remove <b>Timer Component</b></button>}
        {!this.state.showTimer && <div className="removed">Successfully removed!</div>}
      </div>
    );
  }
}

export default App;
