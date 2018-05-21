import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { channelDetailsQuery } from './EmployeeDetails';
import { withRouter } from 'react-router';

 
class AddEmployee extends Component {

  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', position: ''  };
  }
  
  onSubmit(event) {
    event.preventDefault();
    
    this.props.mutate({ 
      variables: {departmentId: this.props.match.params.departmentId, firstName: this.state.firstName, lastName: this.state.lastName, position: this.state.position },      
    }).then(() => this.setState({ firstName: '', lastName: '', position: '' }));     
  } 

  render() {
    return (
      <div className="messageInput">
       <form onSubmit={this.onSubmit.bind(this)} >
          <input type="text" placeholder="Employee First Name" 
            value={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}  
          />
          <input type="text" placeholder="Employee Last Name" 
            value={this.state.lastName}
            onChange={e => this.setState({ lastName: e.target.value })}  
          />
          <input type="text" placeholder="Employee Position" 
            value={this.state.position}
            onChange={e => this.setState({ position: e.target.value })}  
          />
          <input type="submit" className="cursorsub" />
        </form>
      </div>
    );
  }  
};

const addEmployeeMutation = gql`
  mutation addEmplyee($departmentId: ID!, $firstName: String, $lastName: String, $position: String ) {
    createEmployee(departmentId: $departmentId, firstName: $firstName, lastName: $lastName, position: $position ) {
      firstName 
      lastName 
      position 
    }
  }
`;  


const AddEmployeeWithMutation = graphql(
  addEmployeeMutation,
)(withRouter(AddEmployee));

export default AddEmployeeWithMutation;
