import express from "express"
import { httpFetchMessages } from "./messages.controler"
import { httpSaveMessages } from "./messages.controler"

const messagesRoute = express.Router()

messagesRoute.get("/get", httpFetchMessages)


messagesRoute.post("/save", httpSaveMessages)

export default messagesRoute