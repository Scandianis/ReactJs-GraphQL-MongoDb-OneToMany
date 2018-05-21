import React from 'react';

import AddEmployee from './AddEmployee';

const EmployeeList = ({ employees }) => {
  return (
    <div className="messagesList"> 
    
      { employees.map( ch =>
        (<ul key={ch.firstName}   >
            <li>{ch.firstName + " " + ch.lastName}</li>  
            <li>{ch.position}</li>  
        </ul>)
      )}
      
      <AddEmployee />
      
    </div>
  );
};
export default (EmployeeList);
