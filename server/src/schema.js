import { makeExecutableSchema } from 'graphql-tools'; 
 
const resolvers = require('./resolvers');  

const typeDefs = ` 
  
  type Department {
    _id: ID!
    name: String
    city: String
    employees: [Employee]    
  } 
  
  type Employee {
    _id: ID 
    firstName: String,
    lastName: String,
    position: String,
    departmentId: Department
  } 
 
  type Query { 
    getDepartment(_id: ID!): Department  
    getDepartments: [Department]  
    getEmployee(_id: ID!): Employee 
    getEmployees: [Employee]         
  } 
  
  type Mutation {   
    createDepartment(name: String, city: String): Department  
    createEmployee(departmentId: ID!, firstName: String, lastName: String, position: String): Employee
  }
`; 

const schema = makeExecutableSchema({ 
 typeDefs,
 resolvers: resolvers, 
});

export { schema };