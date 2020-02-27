"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signUp_1 = __importDefault(require("../controllers/signUp"));
//import signUpcontroller from 
const router = express_1.Router();
router.get('/signUp', (req, res) => {
    res.render('signUp', { pageTitle: 'signUp', message: '' });
});
router.post('/signup', signUp_1.default);
exports.default = router;
