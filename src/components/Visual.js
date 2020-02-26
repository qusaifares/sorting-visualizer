import React, { Component } from 'react';

class Visual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      time: 20,
      done: false
    };
  }

  componentDidMount() {
    this.setState({ numbers: this.props.numbers });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.startSort === false && this.props.startSort === true) {
      this.bubbleSort();
    }
  }

  bubbleSort = arr => {
    let sortedArray = this.state.numbers;
    let swap = true;
    while (swap) {
      swap = false;
      const limit = sortedArray.length - 1;
      let i = 1;

      // eslint-disable-next-line no-loop-func
      let myLoop = setInterval(() => {
        sortedArray = sortedArray.map(bar => {
          return { number: bar.number, beingSorted: false };
        });
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
          } else {
            this.setState({ done: true });
          }
          clearInterval(myLoop);
        }
      }, this.state.time);

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
    if (this.state.numbers) {
      return (
        <>
          <div className="visual">
            {this.state.numbers.map((bar, index) => (
              <div
                key={index}
                className={`bar ${bar.beingSorted && 'current-bar'} ${this.state
                  .done && 'done-bar'}`}
                style={{ height: `${bar.number * 5}px` }}
              ></div>
            ))}
          </div>
        </>
      );
    } else {
      return <h1>Hold on</h1>;
    }
  }
}

export default Visual;
