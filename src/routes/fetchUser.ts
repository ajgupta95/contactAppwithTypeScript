import path from 'path';
//import {Router} from 'express';

import Person from '../models/registerModel';
import {RequestHandler,Router} from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
const JWTSECRET = 'signupProject';
import fetchController from '../controllers/fetchUser'

const router=Router();

var verifyToken:RequestHandler=(req,res,next)=>{
    var token=req.cookies.jwtToken;
    if(token){
        jwt.verify(token,JWTSECRET,(err:any,data:any)=>{
           if(err){ return res.status(403).send();

        }else{
            console.log('Getting',data);
            req.body.email=data;
            next(); 
        }
        }); 
    }else{
        res.render('login',{message:'Not authorised',pageTitle:'logIn'});
    }
};

router.get('/fetchUser',verifyToken,fetchController);

export default  router;