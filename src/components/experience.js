import React, { Component } from "react";
import formatISO from "date-fns/esm/formatISO";

class ExperienceInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
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
      <form
        onSubmit={this.handleSubmit}
        id="experienceInformationForm"
      >
        <h2>Experience</h2>
        <input
          onChange={this.handleChange}
          type="text"
          id="position"
          placeholder="Position"
          value={this.state.position}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="company"
          placeholder="Company"
          value={this.state.company}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="city"
          placeholder="City"
          value={this.state.city}
        ></input>
        <label htmlFor="from">From</label>
        <input
          onChange={this.handleChange}
          id="from"
          type="date"
          value={this.state.from}
        ></input>
        <label htmlFor="to">To</label>
        <input
          onChange={this.handleChange}
          id="to"
          type="date"
          placeholder={formatISO(new Date(), { representation: "date" })}
          value={this.state.to}
        ></input>
        <input type="submit"></input>
        <input type="button" value="Add"/>
        <input type="button" value="Delete" style={{display: (this.props.deleteHidden? "none" : "inline")}}/>
      </form>
    );
  }
}

export default ExperienceInfoForm;
