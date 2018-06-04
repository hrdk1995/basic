import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      owner: ""
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, address, city, owner } = this.state;

    axios
      .post("/company", {
        name,
        address,
        city,
        owner
      })
      .then(result => {
        this.props.history.push("/");
      });
  };

  render() {
    const { name, address, city, owner } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">ADD Company</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/">
                <span
                  className="glyphicon glyphicon-th-list"
                  aria-hidden="true"
                />{" "}
                Company List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="name">Name : </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <label for="address">Address : </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={this.onChange}
                  placeholder="address"
                />
              </div>
              <div className="form-group">
                <label for="city">City : </label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={city}
                  onChange={this.onChange}
                  placeholder="city"
                />
              </div>
              <div className="form-group">
                <label for="owner">Owner :</label>
                <input
                  type="text"
                  className="form-control"
                  name="owner"
                  value={owner}
                  onChange={this.onChange}
                  placeholder="owner"
                />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
