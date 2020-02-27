"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logIn_1 = __importDefault(require("./logIn"));
const app = express_1.Router();
logIn_1.default.post('/logout', (req, res) => {
    res.clearCookie('jwtToken');
    res.header('cache-control', 'private,no-cache, no-store, must-revalidate');
    res.header('Expires', '0');
    res.header('Pragma', 'no-cache');
    res.redirect('/');
});
exports.default = logIn_1.default;
