import majorsDatabase from "./majors.mongo";

//FETCHES ALL THE COURSES
export const fetchMajors = async () => {
  return await majorsDatabase.find({}, { __v: 0 });
};
