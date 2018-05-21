import React from 'react';
import { Link } from 'react-router-dom'
import {
    gql,
    graphql,
} from 'react-apollo';

import AddDepartment from './AddDepartment';

const DepartmentList = ({ data: {loading, error, getDepartments }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="channelsList">
      <AddDepartment />
      { getDepartments.map( ch =>
        (<div key={ch._id} >
          <div className="department">
            <span>
              <Link to={`department/${ch._id}`}>
                {ch.name}
              </Link>
            </span>
            <span className="padding300">{ch.city}</span>
          </div>
        </div>)
      )}
    </div>
  );
};

export const departmentListQuery = gql`
  query DepartmentListQuery {
    getDepartments {
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



export default graphql(departmentListQuery, {
  options: { pollInterval: 5000 },
})(DepartmentList);
