import React, { Component } from "react";
import CVInformation from "../../modules/cv-info";

class EditButton extends Component{
    render(){
        return <button id="editBtn" onClick={CVInformation.handleEdit}>Edit</button>
    }
}

export default EditButton