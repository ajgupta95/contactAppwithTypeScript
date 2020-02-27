"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addContacts_1 = __importDefault(require("../controllers/addContacts"));
const express_1 = require("express");
const JWTSECRET = 'signupProject';
const logIn_1 = __importDefault(require("./logIn"));
const app = express_1.Router();
logIn_1.default.post('/addcontacts', addContacts_1.default);
exports.default = logIn_1.default;
