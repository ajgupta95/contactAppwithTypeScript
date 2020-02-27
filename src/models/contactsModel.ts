
import mongoose, { Schema } from 'mongoose';

const Contacts: Schema = new Schema({
    userEmail:{type:String,required:true},
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  mobileNumber:{type:String,required:true},
  
});
const contacts=mongoose.model('Contacts',Contacts);
export default contacts;