import ExperienceInfoForm from "./experience";
import EducationInfoForm from "./education";
import PersonalInfoForm from "./personal";
import CVInformation from "../../modules/cv-info";
import React, { Component } from "react";

class DataForm extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      eduForms: [
        <EducationInfoForm
        handleSubmit={CVInformation.handleSubmit}
        handleAdd={this.handleAdd}
        handleDelete={this.handleDelete}
        deleteHidden={true}
        count={0}
        key={0}
      />,

      ],
      expForms: [
        <ExperienceInfoForm
        handleSubmit={CVInformation.handleSubmit}
        handleAdd={this.handleAdd}
        handleDelete={this.handleDelete}
        deleteHidden={true}
        count={0}
        key={0}
      />,
      ],
      deletedEduForms: [],
      deletedExpForms: [],
    };
  }

  handleDelete(e) {
    let newState = {};
    let formType = e.target.parentNode.getAttribute("class");
    let formId = e.target.parentNode.id;
    let index = parseInt(formId.substring(7));
    switch (formType) {
      case "experienceInformationForm":
        newState.deletedExpForms = this.state.deletedExpForms.concat(index);
        break;
      case "educationInformationForm":
        newState.deletedEduForms = this.state.deletedEduForms.concat(index);
        break;
    }
    this.setState(newState);
    CVInformation.handleDelete(e);
    console.log(newState);
    console.log(this.state);
  }

  handleAdd(e) {
    let newState = {};
    let formType = e.target.parentNode.getAttribute("class");
    switch (formType) {
      case "experienceInformationForm":
        newState.expForms = this.state.expForms.concat(
          <ExperienceInfoForm
            handleSubmit={CVInformation.handleSubmit}
            handleAdd={this.handleAdd}
            handleDelete={this.handleDelete}
            deleteHidden={false}
            count={this.state.expForms.length}
            key={this.state.expForms.length}
          />
        );

        break;
      case "educationInformationForm":
        newState.eduForms = this.state.eduForms.concat(
          <EducationInfoForm
            handleSubmit={CVInformation.handleSubmit}
            handleAdd={this.handleAdd}
            handleDelete={this.handleDelete}
            deleteHidden={false}
            count={this.state.eduForms.length}
            key={this.state.eduForms.length}
          />
        );
        break;
    }


    CVInformation.handleAdd(e);
    this.setState(newState);
    console.log(this.state);
  }

  render() {
    let expForms = this.state.expForms.filter((form) => {
      for (let i = 0; i < this.state.deletedExpForms.length; i++) {
        if (this.state.expForms[this.state.deletedExpForms[i]] === form) {
          return false;
        }
      }
      return true;
    });

    let eduForms = this.state.eduForms.filter((form) => {
      for (let i = 0; i < this.state.deletedEduForms.length; i++) {
        if (this.state.eduForms[this.state.deletedEduForms[i]] === form) {
          return false;
        }
      }
      return true;
    });
    return (
      <div className="Forms">
        <PersonalInfoForm handleSubmit={CVInformation.handleSubmit} />
        <div id="expForms">{expForms}</div>
        <div id="eduForms">{eduForms}</div>
      </div>
    );
  }
}

export default DataForm;
