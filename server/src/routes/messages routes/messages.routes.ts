import express from "express"
import { httpFetchMessages } from "./messages.controler"
import { httpSaveCourses } from "../courses route /courses.controller"

const messagesRoute = express.Router()

messagesRoute.get("/get", httpFetchMessages)

//ROUTES TO SAVE MESSAGES
messagesRoute.post("/save", httpSaveCourses)

export default messagesRoute