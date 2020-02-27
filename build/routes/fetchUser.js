"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWTSECRET = 'signupProject';
const fetchUser_1 = __importDefault(require("../controllers/fetchUser"));
const router = express_1.Router();
var verifyToken = (req, res, next) => {
    var token = req.cookies.jwtToken;
    if (token) {
        jsonwebtoken_1.default.verify(token, JWTSECRET, (err, data) => {
            if (err) {
                return res.status(403).send();
            }
            else {
                console.log('Getting', data);
                req.body.email = data;
                next();
            }
        });
    }
    else {
        res.render('login', { message: 'Not authorised', pageTitle: 'logIn' });
    }
};
router.get('/fetchUser', verifyToken, fetchUser_1.default);
exports.default = router;
