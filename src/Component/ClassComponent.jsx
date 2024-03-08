import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "John",
      count: 0,
      Counter: () => {
        this.setState({ count: this.state.count + 2 });
      },
    };
  }
  render() {
    return (
      <>
        <h1>Class Component</h1>
        <p>{this.state.count}</p>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 2 }))
          }
        >
          count
        </button>
        <p>{this.state.name}</p>
        <button
          onClick={() =>
            this.setState({ name: (this.state.name = "Jhon Wick") })
          }
        >
          Update Name
        </button>
      </>
    );
  }
}
