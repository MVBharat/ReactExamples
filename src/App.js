import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: 'bharat'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeNameFromInput = (event) =>{
    this.setState({
      name: event.target.value
    })
  }


  render() {
    return (
      <div className="App">

        <br/><br/>
        <input type="text" onChange= {this.changeNameFromInput} value={this.state.name} />
        <br/><br/>
        <button onClick= { () => this.changeName('bharat awesome :( ')} > change state using anonymous functions </button>
        <button onClick= {this.changeName.bind(this, 'bharat awesome :)')} > change state using bind  </button>
        <br/><br/>
        <h4>{this.state.name}</h4>
      </div>
    );
  }
}

export default App;
