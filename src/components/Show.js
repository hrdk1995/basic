import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/company/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.company.name}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Company List</Link></h4>
            <dl>
              <dt>Address : </dt>
              <dd>{this.state.company.address}</dd>
              <dt>City</dt>
              <dd>{this.state.company.city}</dd>
              <dt>Owner</dt>
              <dd>{this.state.company.owner}</dd>
            </dl>
            <Link to={`/edit/${this.state.company._id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.company._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;