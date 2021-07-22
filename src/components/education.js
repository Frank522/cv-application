import React, { Component } from "react";

class EducationInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      university: "",
      degree: "",
      subject: "",
      start: "",
      end: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    this.props.handleSubmit(e);
    this.handleChange(e);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="educationInformationForm">
        <h2>Education</h2>
        <input
          onChange={this.handleChange}
          type="text"
          id="university"
          placeholder="University"
          value={this.state.university}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="degree"
          placeholder="Degree"
          value={this.state.degree}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="subject"
          placeholder="Subject"
          value={this.state.subject}
        ></input>
        <label htmlFor="start">Start</label>
        <input
          onChange={this.handleChange}
          type="date"
          id="start"
          value={this.state.start}
        ></input>
        <label htmlFor="end">End</label>
        <input
          onChange={this.handleChange}
          type="date"
          placeholder="end"
          value={this.state.end}
        ></input>
        <input type="submit"></input>
        <input type="button" value="Add" />
        <input
          type="button"
          value="Delete"
          style={{ display: this.props.deleteHidden ? "none" : "inline" }}
        />
      </form>
    );
  }
}

export default EducationInfoForm;
