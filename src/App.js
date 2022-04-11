import React, { Component } from "react";
import Liste from "./containers/Liste";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listeFruits: ["Pomme", "Banane", "Abricot", "Fraise"],
      listeLegumes: ["Salade", "Courgette", "Poivron", "Poireau"],
    };
  }
  render() {
    const random = Math.random();
    return (
      <>
        {random > 0.5 ? (
          <Liste list={this.state.listeFruits} />
        ) : (
          <Liste list={this.state.listeLegumes} />
        )}
      </>
    );
  }
}

export default App;
