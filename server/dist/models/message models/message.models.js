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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMessage = exports.fetchMessages = void 0;
const message_mongo_1 = __importDefault(require("./message.mongo"));
const fetchMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield message_mongo_1.default.find({}, { __v: 0 });
});
exports.fetchMessages = fetchMessages;
//SAVE THE MESSAGE IN THE DATABASE
const saveMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return yield message_mongo_1.default.create(message);
});
exports.saveMessage = saveMessage;
