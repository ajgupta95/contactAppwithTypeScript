import path from 'path';
import {Request,Response,Router} from 'express';
import router from './logIn';

const app =Router();

 router.post('/logout',(req,res)=>{
    res.clearCookie('jwtToken');
    res.header('cache-control','private,no-cache, no-store, must-revalidate');
    res.header('Expires','0');
    res.header('Pragma', 'no-cache');

    res.redirect('/');

});

export default router;