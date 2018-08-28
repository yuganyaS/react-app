import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  // this.handleIncrement = this.handleIncrement.bind(this); instead we can use arrow function
  //   }

  //   state = {
  //     count: this.props.counter.value,
  //     tag: ["tag1", "tag2", "tag3"]
  // imageUrl: "https://picsum.photos/200"
  //   };

  //   renderTags() {
  //     if (!this.state.tag) return <h1> There are no tags</h1>;
  //     else return this.state.tag.map(tag => <li key={tag}>{tag}</li>);
  //   }
  //   handleIncrement = product => {
  // this.props.value = 0; we can't udpate the props like this. bcoz props is read only
  //     console.log("product", product);
  //     this.setState({
  //       count: this.props.counter + 1
  //     });
  //   };
  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <div style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </div>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.ondelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        {/* {this.props.children} */}
        {/* <ul>{this.renderTags()}</ul> */}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; //using destructring
    const x = <h3>zero</h3>;
    return value === 0 ? x : value;
  }
}

export default Counter;
