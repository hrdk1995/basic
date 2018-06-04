import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: []
    };
  }

  componentDidMount() {
    axios.get("/company").then(res => {
      this.setState({ company: res.data });
      console.log(this.state.company);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Companies Details</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/create">
                <span
                  className="glyphicon glyphicon-plus-sign"
                  aria-hidden="true"
                />
                Add Company
              </Link>
            </h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {this.state.company.map(company => (
                  <tr>
                    <td>
                      <Link to={`/show/${company._id}`}>{company.name}</Link>
                    </td>
                    <td>{company.address}</td>
                    <td>{company.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
