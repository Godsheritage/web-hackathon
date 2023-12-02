import { RequestHandler } from "express";
import {
  fetchMessages,
  saveMessage,
} from "../../models/message models/message.models";

export const httpFetchMessages: RequestHandler = async (req, res) => {
  const messages = await fetchMessages();
  return res.status(200).json({
    messages,
  });
};

export const httpSaveMessages: RequestHandler = async (req, res) => {
  const message = req.body;
  await saveMessage(message);
  return res.status(201).json({
    message,
  });
};
