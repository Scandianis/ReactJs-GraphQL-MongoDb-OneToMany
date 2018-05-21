import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

//import { departmentListQuery } from './DepartmentListWithData';


class AddDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', city: '' };
  }

  onSubmit(event) {
    event.preventDefault();
    
    this.props.mutate({ 
      variables: { name: this.state.name, city: this.state.city },      
    }).then(() => this.setState({ name: '', city: '' }));;     
  } 
  
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} >
        <input type="text" placeholder="New Department Name" 
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}  
        />
        <input type="text" placeholder="New Department City" 
          value={this.state.city}
          onChange={e => this.setState({ city: e.target.value })}  
        />
        <input type="submit" className="cursorsub" />
      </form>
    );
  };
} 

const addDepartmentMutation = gql`
  mutation addDepartment($name: String!, $city: String! ) {
    createDepartment(name: $name, city: $city){
      _id
      name
      city 
    } 
  }
`;


const AddDepartmentWithMutation = graphql(
  addDepartmentMutation,
)(AddDepartment);

export default AddDepartmentWithMutation;