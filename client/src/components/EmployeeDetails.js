import React from 'react';
import EmplyeeList from './EmplyeeList';
import DepartmentPreview from './DepartmentPreview';
import NotFound from './NotFound';

import {
    gql,
    graphql,
} from 'react-apollo';

const EmployeeDetails = ({ data: {loading, error, getDepartment }, match }) => {
  if (loading) {
    return <DepartmentPreview departmentId={match.params.departmentId}/>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if(getDepartment === null){
    return <NotFound />
  }

  return (
    <div>
      <div className="channelName">
        {getDepartment.name}{", "}  {getDepartment.city}
      </div> 
      <EmplyeeList employees={getDepartment.employees}/>  
      
    </div>);
}

export const departmentDetailsQuery = gql`
  query DepartmentDetailsQuery($departmentId : ID!) {    
    getDepartment (_id: $departmentId) {
      _id
      name
      city 
      employees {
        firstName
        lastName
        position
      }
    }
  }   
`;

export default (graphql(departmentDetailsQuery, {
  options: (props) => ({
    variables: { departmentId: props.match.params.departmentId },
  }),
})(EmployeeDetails));
