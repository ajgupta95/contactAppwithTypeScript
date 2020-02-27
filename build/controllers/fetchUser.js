"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactsModel_1 = __importDefault(require("../models/contactsModel"));
var fetchUser = (req, res) => {
    console.log('Email', req.body.email);
    const email = req.body.email;
    contactsModel_1.default.find({ userEmail: email.email }).then((user) => {
        console.log('123456', user);
        if (user) {
            console.log(user);
            return res.render('fetchUser', { message: `Welcome To Contact App`, contacts: user });
        }
        else {
            return res.json({ status: false, code: 101, message: 'not found' });
        }
    });
};
exports.default = fetchUser;
