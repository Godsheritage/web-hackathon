import { RequestHandler } from "express";
import { fetchMajors } from "../../models/majors models/majors.model";

export const httpGetMajors: RequestHandler = async (req, res) => {
  const majors = await fetchMajors();
  return res.status(200).json({
    majors,
  });
};
