import mongoose, { model, Schema, Model, Document } from "mongoose";
// where the schema will be stored

const messageSchema: Schema = new mongoose.Schema({
  msg: { type: String, required: true },
  room: { type: String, required: true },
  senderId: { type: String, required: true },
});

//connect launchesSchema with the launches collection
const messageDatabase = mongoose.model("message", messageSchema);



export default messageDatabase;