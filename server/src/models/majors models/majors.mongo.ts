import mongoose, { Schema } from "mongoose";
// where the schema will be stored

const majorsSchema: Schema = new mongoose.Schema({
  index: { type: String, required: true },
  major: { type: String, required: true },
});

//connect launchesSchema with the launches collection
const majorsDatabase = mongoose.model("major", majorsSchema);

export default majorsDatabase;
