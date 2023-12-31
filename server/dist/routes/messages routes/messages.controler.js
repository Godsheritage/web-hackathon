"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpSaveMessages = exports.httpFetchMessages = void 0;
const message_models_1 = require("../../models/message models/message.models");
const httpFetchMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield (0, message_models_1.fetchMessages)();
    return res.status(200).json({
        messages,
    });
});
exports.httpFetchMessages = httpFetchMessages;
const httpSaveMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = req.body;
    yield (0, message_models_1.saveMessage)(message);
    return res.status(201).json({
        message,
    });
});
exports.httpSaveMessages = httpSaveMessages;
