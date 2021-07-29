import React, { Component } from "react";
import PDFGenerator from "../../modules/pdf-generator";

class GeneratePDFButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pdfVisible: true,
      buttonText: "Clear PDF",
    };

    this.buttonAction = this.buttonAction.bind(this);
  }

  buttonAction(e) {
    let pdfDisplay = document.querySelector("#pdfView");
    let iframe = document.querySelector('iframe');
    pdfDisplay.style.display = this.state.pdfVisible ? "none" : "flex";
    PDFGenerator.setInfo();
    let newPDF = PDFGenerator.generatePDF().output('datauristring');
    console.log(newPDF);
    iframe.setAttribute('src', newPDF);

    let newText =
      this.state.buttonText === "Generate PDF" ? "Clear PDF" : "Generate PDF";
    e.target.innerHTML = newText;
    this.setState({
      pdfVisible: !this.state.pdfVisible,
      buttonText: newText,
    });
  }

  render() {
    return (
      <button id="generatePdfBtn" onClick={this.buttonAction}>
        {this.state.buttonText}
      </button>
    );
  }
}

export default GeneratePDFButton;
