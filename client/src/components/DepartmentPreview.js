import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';


const DepartmentPreview = ({ data: {loading, error, getDepartment } }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div className="channelName">
        {getDepartment.name}
      </div>
      <div>Loading Messages</div>
    </div>);
}; 

export const departmentQuery = gql`
  query DepartmentDetailsQuery($departmentId : ID!) {    
    getDepartment (_id: $departmentId) {
      _id
      name      
    }
  }   
`;

export default (graphql(departmentQuery, {
  options: (props) => ({
    variables: { departmentId: props.departmentId },
  }),
})(DepartmentPreview));
