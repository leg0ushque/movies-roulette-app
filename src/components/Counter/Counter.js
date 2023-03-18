import React, { Component } from "react";
import "./styles.css";

class Counter extends Component {
  state = {
    value: 0,
  };

  constructor(props) {
    super(props);
    this.state.value = props.value;
  }

  incrementCounter = () => {
    this.setState((state) => {
      return { value: +state.value + 1 };
    });
  };

  decrementCounter = () => {
    this.setState((state) => {
      return { value: +state.value - 1 };
    });
  };

  render() {
    return React.createElement("div", { className: "counter" }, [
      React.createElement(
        "span",
        { className: "counterValue" },
        this.state.value
      ),
      React.createElement("div", {}, [
        React.createElement(
          "button",
          {
            className: "button incButton",
            type: "button",
            onClick: this.incrementCounter,
          },
          "+1"
        ),
        React.createElement(
          "button",
          {
            className: "button decButton",
            type: "button",
            onClick: this.decrementCounter,
          },
          "-1"
        ),
      ]),
    ]);
  }
}

export default Counter;
