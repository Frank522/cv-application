import React, { Component } from "react";
import jsPDF from "jspdf";
import 'pdfobject';


class PDFDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            pdf: new jsPDF(),
            doc: '',
            display: <embed width='100%' height='100%'></embed>
        }
        this.state.pdf.text("Octonyan loves jsPDF", 35, 25);
        this.statedoc = this.state.pdf.output("dataurlistring");
    }

    render(){
        return (
            <div>
                {this.state.display}
            </div>
        )
    }
}

export default PDFDisplay;