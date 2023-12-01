import mongoose, { Schema } from "mongoose";
// where the schema will be stored

const courseSchema: Schema = new mongoose.Schema({
  course_number: { type: String, required: true },
  course_name: { type: String, required: true },
  major: { type: String, required: true },
});

// CREAE THE DATABASE MODEL
const courseDatabase = mongoose.model("course", courseSchema);

export default courseDatabase;
