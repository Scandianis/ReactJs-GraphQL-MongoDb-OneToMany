const mongoose = require('mongoose'); 

const departmentSchema = new mongoose.Schema({
  name: String,
  city: String,    
});

export default mongoose.model('department', departmentSchema)