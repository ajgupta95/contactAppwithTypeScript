
import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  passWord:{type:String,required:true},
  
});
 const Person=mongoose.model('Person',UserSchema);
export default Person;