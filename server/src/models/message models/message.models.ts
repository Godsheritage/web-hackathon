import messageDatabase from "./message.mongo";
import { messageType } from "../../Types";
export const fetchMessages = async () => {
  return await messageDatabase.find({}, { __v: 0 });
};

//SAVE THE MESSAGE IN THE DATABASE
export const saveMessage = async (message:messageType) => {
  return await messageDatabase.create(message);
};
