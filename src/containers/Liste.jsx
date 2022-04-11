import React, { Component } from "react";

class Liste extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.list.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <p>{item}</p>
        </React.Fragment>
      );
    });
  }
}

export default Liste;
