import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";
import { withRouter } from "react-router";

class Edit extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonUsername = this.onChangePersonUsername.bind(this);
    this.onChangePersonCity = this.onChangePersonCity.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: "",
      person_position: "",
      person_City: "",
      person_email: "",
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:3000/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          person_name: response.data.person_name,
          person_username: response.data.person_username,
          person_City: response.data.person_city,
          person_Email: response.data.person_email,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }

  onChangePersonUsername(e) {
    this.setState({
      person_position: e.target.value,
    });
  }

  onChangePersonCity(e) {
    this.setState({
      person_City: e.target.value,
    });
  }

  onChangePersonEmail(e) {
    this.setState({
      person_Email: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedperson = {
      person_name: this.state.person_name,
      person_position: this.state.person_position,
      person_City: this.state.person_City,
      person_Email: this.state.person_Email,
    };
    console.log(newEditedperson);

    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:3000/update/" + this.props.match.params.id,
        newEditedperson
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/record");
  }

  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div>
        <h3 align="center">Update Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div>
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_username}
              onChange={this.onChangePersonUsername}
            />
          </div>

          <div>
            <label>City: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_city}
              onChange={this.onChangePersonCity}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_email}
              onChange={this.onChangePersonEmail}
            />
          </div>
          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default withRouter(Edit);
