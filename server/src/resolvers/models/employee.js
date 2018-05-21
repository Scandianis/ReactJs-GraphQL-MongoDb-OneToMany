import mongoose, { Schema } from 'mongoose'

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  position: String,
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: 'department'
  }
}, { timestamps: true })

export default mongoose.model('employee', employeeSchema) 