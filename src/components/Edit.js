import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        company: {}
    };
  }

  componentDidMount() {
    axios.get('/company/'+this.props.match.params.id)
      .then(res => {
        this.setState({ company: res.data });
        console.log(this.state.company);
      });
  }

  onChange = (e) => {
    const state = this.state.company
    state[e.target.name] = e.target.value;
    this.setState({company:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, city, owner } = this.state.company;

    axios.put('/company/'+this.props.match.params.id, { name, address, city, owner })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div clclassNameass="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT Company
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/show/${this.state.company._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Company List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="name">Name : </label>
                <input type="text" className="form-control" name="name" value={this.state.company.name} onChange={this.onChange} placeholder="NAME" />
              </div>
              <div className="form-group">
                <label for="address">Address :</label>
                <input type="text" className="form-control" name="address" value={this.state.company.address} onChange={this.onChange} placeholder="ADDRESS" />
              </div>
              <div className="form-group">
                <label for="city">City :</label>
                <input type="text" className="form-control" name="city" value={this.state.company.city} onChange={this.onChange} placeholder="CITY" />
              </div>
              <div className="form-group">
                <label for="owner">Owner :</label>
                <input type="text" className="form-control" name="owner" value={this.state.company.owner} onChange={this.onChange} placeholder="OWNER" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;