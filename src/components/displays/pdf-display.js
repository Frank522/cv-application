import React, { Component } from "react";
import PDFGenerator from "../../modules/pdf-generator";
import 'pdfobject';


class PDFDisplay extends Component {

    render(){
        return (
            <div id="pdfView" style={{display: "flex"}}>
                <iframe width='100%' height='500px' src={PDFGenerator.generatePDF().output('datauristring')}></iframe>
            </div>
        )
    }
}

export default PDFDisplay;