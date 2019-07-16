import Employee from './models/employee'; 
const graphql = require('graphql');

const resolvers = { 
  getEmployee: (_, { _id }) => Employee.findById(_id),
  getEmployees: () => Employee.find({}),   
  getEmployeesByDepartment: (department, {}) =>  Employee.find({departmentId: department._id }),  
  createEmployee: async (_, args) => {    
    return await Employee.create(args) 
  }
};

module.exports = resolvers;
