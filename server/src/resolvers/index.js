import DepartmentResolvers from './department-resolvers'
import EmployeeResolvers from './employee-resolvers'
 

const resolvers = {  
  Department:{
    employees: EmployeeResolvers.getEmployeesByDepartment   
  },
  Employee:{
    departmentId: DepartmentResolvers.Query.getDepartmentByEmployee   
  },
  Query: {   
    getDepartment: DepartmentResolvers.Query.getDepartment, 
    getDepartments: DepartmentResolvers.Query.getDepartments, 
    getEmployee: EmployeeResolvers.getEmployee,
    getEmployees: EmployeeResolvers.getEmployees       
  },
  Mutation: { 
    createDepartment: DepartmentResolvers.Mutation.createDepartment, 
    createEmployee: EmployeeResolvers.createEmployee    
  }
};

module.exports = resolvers;