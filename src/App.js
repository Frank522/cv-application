import React, { Component } from "react";
import DataForm from "./components/data-form";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DataForm/>
        </header>
      </div>
    );
  }
}

export default App;
