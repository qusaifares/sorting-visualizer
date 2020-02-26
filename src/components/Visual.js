import React, { Component } from 'react';

class Visual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    };
  }

  componentDidMount() {
    let newArray = [];
    for (let i = 0; i < 30; i++) {
      let num = Math.floor(Math.random() * 85) + 10;
      newArray.push({ number: num, beingSorted: false });
    }
    this.setState({ numbers: newArray });
  }

  bubbleSort = arr => {
    let sortedArray = this.state.numbers;
    let swap = true;

    let time = 100;
    while (swap) {
      swap = false;
      const limit = sortedArray.length - 1;
      let i = 1;

      // eslint-disable-next-line no-loop-func
      let myLoop = setInterval(() => {
        sortedArray = sortedArray.map(bar => {
          return { number: bar.number, beingSorted: false };
        });
        console.log(sortedArray[i].number, sortedArray[i - 1].number);
        sortedArray[i].beingSorted = true;
        sortedArray[i - 1].beingSorted = true;
        this.setState({ numbers: sortedArray });
        if (sortedArray[i - 1].number > sortedArray[i].number) {
          [sortedArray[i], sortedArray[i - 1]] = [
            sortedArray[i - 1],
            sortedArray[i]
          ];
          swap = true;
        }
        i++;
        if (i > limit) {
          if (swap) {
            this.bubbleSort();
          }
          clearInterval(myLoop);
        }
      }, time);
      console.log('done', swap);

      this.setState({ numbers: sortedArray });
    }
  };

  testFunction = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log(i);
      }, 200);
    }
  };

  render() {
    return (
      <>
        <button onClick={this.bubbleSort}>Visualize</button>
        <button onClick={this.testFunction}>Test</button>
        <div className="visual">
          {this.state.numbers.map((bar, index) => (
            <div
              key={index}
              className={`bar ${bar.beingSorted && 'current-bar'}`}
              style={{ height: `${bar.number * 5}px` }}
            ></div>
          ))}
        </div>
      </>
    );
  }
}

export default Visual;
