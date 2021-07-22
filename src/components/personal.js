import React, { Component } from "react";

class PersonalInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
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
    e.preventDefault();
    this.props.handleSubmit(e);
    this.handleChange(e);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        id="personalInformationForm"
      >
        <h2>Personal Information</h2>
        <input
          onChange={this.handleChange}
          type="text"
          id="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          required
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          required
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="title"
          placeholder="Title"
          value={this.state.title}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="address"
          placeholder="Address"
          value={this.state.address}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="phoneNumber"
          placeholder="Phone Number"
          value={this.state.phoneNumber}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="email"
          placeholder="Email"
          value={this.state.email}
        ></input>
        <input
          onChange={this.handleChange}
          type="text"
          id="description"
          placeholder="Description"
          value={this.state.description}
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default PersonalInfoForm;
