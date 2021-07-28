import React, { Component } from "react";
import DataForm from "./components/forms/data-form";
import Buttons from "./components/buttons/button-div";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CV Builder Application</h1>
        </header>
        <DataForm />
        <Buttons/>
      </div>
    );
  }
}

export default App;
