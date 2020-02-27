"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerModel_1 = __importDefault(require("../models/registerModel"));
const postuser = (req, res) => {
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;
    const passWord = req.body.psw;
    const cnfrmpsw = req.body.cnfrmpsw;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (passWord !== cnfrmpsw) {
        const message = 'Password did not macthed';
        return res.render('signUp.ejs', { message: message, pageTitle: 'SignUp' });
    }
    if (!mailformat.test(email)) {
        return res.render('signUp.ejs', { pageTitle: 'signUP', message: ' Please Enter valid Email' });
    }
    registerModel_1.default.find({ email: email })
        .then(users => {
        console.log(users);
        if (users.length > 0) {
            return res.render('signUp', { pageTitle: 'signUp', message: 'Email already Exists' });
        }
        else {
            const user = new registerModel_1.default({ firstName, lastName, email, passWord });
            user.save().then((doc) => {
                console.log(doc);
                //res.render('signUp',{pageTitle:'signUp',message:'signUp successfully'})
                res.redirect('/');
            }, (e) => {
                res.status(400).send(e);
            });
        }
        ;
    });
};
exports.default = postuser;
