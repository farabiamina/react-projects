import React from "react";

class ClassForm extends React.Component {
    constructor(props) {
        super(props);
        let name = props.name;
        let age = props.age;
        let nameIsValid = this.validateName(name);
        let ageIsValid = this.validateAge(age);
        this.state = {name: name,
            age: age,
            ageValid: ageIsValid,
            nameValid: nameIsValid};
    }

    changeName = (event) => {
        let val = event.target.value;
        let valid = this.validateName(val);
        this.setState({name: val, nameValid: valid});
        // if (this.validateName(this.state.name)) {
        //     this.setState({nameColor: "green"});
        // }
        // else {
        //     this.setState({nameColor: "red"});
        // }

    }

    changeAge = (event) => {
        let val = event.target.value;
        let valid = this.validateAge(val);
        this.setState({age: val, ageValid: valid});
        // if (this.validateAge(this.state.age)) {
        //     this.setState({ageColor: "green"});
        // }
        // else {
        //     this.setState({ageColor: "red"});
        // }
    }

    validateName(name) {
        return name.length > 3;
    }

    validateAge(age) {
        return age > 0;
    }

    send = (event) => {
        event.preventDefault();
        // preventDefault отключает дефолтное поведение браузера
        // в нашем случае перезагурзку страницы при отправке формы
        if (this.state.nameValid === true && this.state.ageValid === true) {
            console.log("Name: " + this.state.name + " " + this.state.age);
        }

    }

    render() {
        let nameColor = (this.state.nameValid) ? "green" : "red";
        let ageColor = (this.state.ageValid) ? "green" : "red";
        return (
            <form>
                <div>
                    <label>Name: </label>
                    <input placeholder="Введите имя"
                           type="text"
                           value={this.state.name}
                           onChange={this.changeName}
                           style={{borderColor: nameColor}}
                    />
                    <input type="number"
                           value={this.state.age}
                           onChange={this.changeAge}
                           style={{borderColor: ageColor}}
                    />
                </div>
                <button onClick={this.send}>Submit</button>
            </form>
        )
    }
}

export default ClassForm;