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
        className="experienceInformationForm"
        id={"expForm" + this.props.count}
      >
        <h2>Experience</h2>
        <input
          onChange={this.handleChange}
          type="text"
          id={"position" + this.props.count}
          placeholder="Position"
          value={this.state.position}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id={"company" + this.props.count}
          placeholder="Company"
          value={this.state.company}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id={"city" + this.props.count}
          placeholder="City"
          value={this.state.city}
        ></input>
        <label htmlFor={"from" + this.props.count}>From</label>
        <input
          onChange={this.handleChange}
          id={"from" + this.props.count}
          type="date"
          value={this.state.from}
        ></input>
        <label htmlFor={"to" + this.props.count}>To</label>
        <input
          onChange={this.handleChange}
          id={"to" + this.props.count}
          type="date"
          placeholder={formatISO(new Date(), { representation: "date" })}
          value={this.state.to}
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

export default ExperienceInfoForm;
