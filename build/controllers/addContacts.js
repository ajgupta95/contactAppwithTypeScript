"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const contactsModel_1 = __importDefault(require("../models/contactsModel"));
const JWTSECRET = 'signupProject';
var addContacts = (req, res) => {
    var token = req.cookies.jwtToken;
    console.log('cheking token', token);
    jsonwebtoken_1.default.verify(token, JWTSECRET, (err, data) => {
        if (err) {
            return res.status(403).send();
        }
        else {
            console.log('Gettinggg', data);
            // req.body.email=data;
            const userEmail = data.email;
            const firstName = req.body.name;
            const email = req.body.email;
            const mobileNumber = req.body.number;
            console.log(userEmail);
            const contact = new contactsModel_1.default({ userEmail, firstName, email, mobileNumber });
            contact.save().then((doc) => {
                console.log(doc);
                //res.render(' fetchUser.ejs',{message:'Contact Added'});
                return res.redirect('/fetchUser');
            }, (e) => {
                res.status(400).send(e);
            });
        }
        ;
    });
};
exports.default = addContacts;
