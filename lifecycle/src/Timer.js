import React from "react"
import './Timer.css';

export default class Timer extends React.Component {
    
    state = {
        counter: 0
    }
    timer;
    
    componentDidMount = () => {
        this.timer = setInterval(() => {this.setState({counter: this.state.counter + 1})}, 1000)
    }

    componentDidUpdate = () => {
        console.log(this.state.counter)
    }

    componentWillUnmount = () => {
        clearInterval(this.timer)
    }

    render() {
        return(
            <div className="wrap">
                <p className="p2">Timer component</p>
                <h1>Seconds {this.state.counter}</h1>
            </div>
        )
    }
}
