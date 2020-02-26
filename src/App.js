import React, { Component } from 'react';
import './App.css';
import Visual from './components/Visual';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      sort: false
    };
  }
  componentDidMount() {
    this.generateNumbers();
  }

  generateNumbers = () => {
    let newArray = [];
    for (let i = 0; i < 30; i++) {
      let num = Math.floor(Math.random() * 85) + 10;
      newArray.push({ number: num, beingSorted: false });
    }
    this.setState({ numbers: newArray });
  };

  setSort = () => {
    this.setState({ sort: true });
  };

  render() {
    if (this.state.numbers.length) {
      return (
        <>
          <button onClick={this.setSort}>Visualize</button>
          <Visual numbers={this.state.numbers} startSort={this.state.sort} />
        </>
      );
    } else {
      return <h1>Hold on bro</h1>;
    }
  }
}

export default App;
