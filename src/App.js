import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 6 },
      { id: 5, value: 7 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters]; //cloning the array
    const index = counters.indexOf(counter); //getting the current index of counter
    counters[index] = { ...counter }; //getting and clone the particuklar object
    counters[index].value++; // increment the selected counter as one
    this.setState({ counters });
  };
  handleDelete = counterId => {
    console.log("counterid", counterId);
    const counters = this.state.counters.filter(
      count => count.id !== counterId
    );
    this.setState({ counters }); //if newvariable and state variable is same then no need  x:x we can directly mention
    console.log("countlist", counters);
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });

    //single source of truth
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          counterlength={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
