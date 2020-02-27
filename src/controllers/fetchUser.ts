import Person from '../models/registerModel';
import {RequestHandler} from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import Contacts from '../models/contactsModel'


var fetchUser:RequestHandler=(req,res)=>{
    console.log('Email',req.body.email);
    const email=req.body.email;
    Contacts.find({userEmail:email.email}).then((user)=>{
        console.log('123456',user);
      if(user){
        console.log(user);
          return res.render('fetchUser',{message:`Welcome To Contact App`,contacts:user});
      }else{
        return res.json({status : false,code : 101,message : 'not found'});
      }
    });

};
export default fetchUser;