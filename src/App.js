import React, { Component } from "react";
import PersonalInfoForm from "./components/personal";
import ExperienceInfoForm from "./components/experience";
import EducationInfoForm from "./components/education";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {formData: {}};
  }

  handleSubmit(e) {
    e.preventDefault();
    let formId = e.target.id;
    let newState = {};
    newState[formId] = {};



    Array.from(document.querySelectorAll("#" + formId + " input")).forEach(
      (input) => {
        newState[formId][input.id] = input.value;
        input.value = "";
      }
    );

    console.log(newState);
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PersonalInfoForm handleSubmit={this.handleSubmit} />
          <ExperienceInfoForm
            handleSubmit={this.handleSubmit}
            deleteHidden={true}
          />
          <EducationInfoForm
            handleSubmit={this.handleSubmit}
            deleteHidden={true}
          />
        </header>
      </div>
    );
  }
}

export default App;
