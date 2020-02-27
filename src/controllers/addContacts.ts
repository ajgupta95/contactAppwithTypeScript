import Person from '../models/registerModel';
import {RequestHandler} from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import Contacts from '../models/contactsModel'
const JWTSECRET = 'signupProject';

var addContacts:RequestHandler=(req,res)=>{
    var token=req.cookies.jwtToken;
    console.log('cheking token',token);
    jwt.verify(token,JWTSECRET,(err:any,data:any)=>{
        if(err){ return res.status(403).send();

     }else{
         console.log('Gettinggg',data);
        // req.body.email=data;
        const userEmail=data.email;
        const firstName=req.body.name;
        const email=req.body.email;
        const mobileNumber=req.body.number;
    
        console.log(userEmail);
        const contact= new Contacts({userEmail,firstName,email,mobileNumber});
        contact.save().then((doc:any)=>{
            console.log(doc);
         //res.render(' fetchUser.ejs',{message:'Contact Added'});
         return res.redirect('/fetchUser');
         
        },(e:any)=>{
            res.status(400).send(e);
         } )
        };
        
    });
   
}

export default addContacts;