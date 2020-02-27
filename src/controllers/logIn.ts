import Person from '../models/registerModel';
import {RequestHandler} from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';


const loguser:RequestHandler=(req,res)=>{
    console.log('body',req.body);
    const email=req.body.email;
    const pass=req.body.password;
    Person.findOne({email:email}).then((person:any)=>{
        console.log(person)
        if(person===null){
            return res.render('login.ejs',{pageTitle:'logIn',message:'User Not exists'})
        }
        if(person.passWord!==pass){
         return res.render('login.ejs',{pageTitle:'logIn',message:'Wrong Password'})
        }
         var token= jwt.sign({email:person.email},'signupProject');
          res.cookie('jwtToken',token);
         console.log('jwtToken',token);
         res.redirect('/fetchUser');

    });
  };


  export default loguser;