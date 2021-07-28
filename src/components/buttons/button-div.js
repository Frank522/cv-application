import React, { Component } from "react";
import EditButton from "./edit-btn";
import GeneratePDFButton from "./generate-pdf-button";
import PrintPDFButton from "./print-pdf-button";

class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="buttons">
        <EditButton />
        <GeneratePDFButton />
        <PrintPDFButton />
      </div>
    );
  }
}

export default Buttons;
