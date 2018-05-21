import Department from './models/department'; 
const graphql = require('graphql');

const resolvers = { 
  Query: { 
    getDepartment: (_, { _id }) => Department.findById(_id), 
    getDepartments: () => Department.find({}),
    getDepartmentByEmployee: (employee, args) => Department.findById(employee.departmentId),   
  },
  Mutation: { 
    createDepartment: (_, args) => {
      return Department.create(args) 
    },    
  },
};

module.exports = resolvers;