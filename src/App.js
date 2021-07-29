import React, { Component } from "react";
import DataForm from "./components/forms/data-form";
import Buttons from "./components/buttons/button-div";
import PDFDisplay from "./components/displays/pdf-display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CV Builder Application</h1>
        </header>
        <div id="content">
          <DataForm />
          <Buttons />
          <PDFDisplay />
        </div>
      </div>
    );
  }
}

export default App;
