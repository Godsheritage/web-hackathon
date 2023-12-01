import courseDatabase from "./courses.mongo";

// SAVES ALL THE COURSES TO THE DATABASE
export const saveCourses = async (courses: any) => {
  return await courseDatabase.create(courses);
};

//FETCHES ALL THE COURSES
export const fetchCourses = async () => {
  return await courseDatabase.find({}, { __v: 0 });
};
