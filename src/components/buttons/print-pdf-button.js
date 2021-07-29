import React, { Component } from "react";
import PDFGenerator from "../../modules/pdf-generator";

class PrintPDFButton extends Component{

    render(){
        return <button id="printPdfBtn" onClick={
            () => {
                PDFGenerator.generatePDF().save("CurriculumVitae.pdf")
            }
        }>Print PDF</button>
    }
}

export default PrintPDFButton