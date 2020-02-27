import path from 'path';
import {Router} from 'express';

import liginController from '../controllers/logIn'



const router=Router();

router.get('/',(req,res)=>{
    res.render('login.ejs',{pageTitle:'LogIn',message:''})
});

router.post('/login',liginController)


export default router;