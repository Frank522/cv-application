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
    let index = e.target.id.substring(0, e.target.id.length - 1);
    newState[index] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    this.props.handleSubmit(e);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="educationInformationForm"
        id={"eduForm" + this.props.count}
      >
        <h2>Education</h2>
        <input
          onChange={this.handleChange}
          type="text"
          id={"university" + this.props.count}
          placeholder="University"
          value={this.state.university}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id={"degree" + this.props.count}
          placeholder="Degree"
          value={this.state.degree}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id={"subject" + this.props.count}
          placeholder="Subject"
          value={this.state.subject}
        ></input>
        <label htmlFor="start">Start</label>
        <input
          onChange={this.handleChange}
          type="date"
          id={"start" + this.props.count}
          value={this.state.start}
        ></input>
        <label htmlFor="end">End</label>
        <input
          onChange={this.handleChange}
          type="date"
          id={"end" + this.props.count}
          value={this.state.end}
        ></input>
        <input type="submit"></input>
        <input type="button" value="Add" onClick={this.props.handleAdd} />
        <input
          type="button"
          value="Delete"
          onClick={this.props.handleDelete}
          style={{ display: this.props.deleteHidden ? "none" : "inline" }}
        />
      </form>
    );
  }
}

export default EducationInfoForm;
