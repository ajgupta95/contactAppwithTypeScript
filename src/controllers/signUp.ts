import Person from '../models/registerModel';
import {RequestHandler} from 'express';

 const postuser:RequestHandler=(req,res)=>{
    const firstName=req.body.firstname;
    const lastName=req.body.lastname;
    const email=req.body.email;
    const passWord=req.body.psw;
    const cnfrmpsw=req.body.cnfrmpsw;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(passWord!==cnfrmpsw){
        const message='Password did not macthed'
    return res.render('signUp.ejs',{message:message,pageTitle:'SignUp'}); 
      } 
     if(!mailformat.test(email)){
         return   res.render('signUp.ejs',{pageTitle:'signUP',message:' Please Enter valid Email'});
      }
      Person.find({email:email})
      .then(users=>{
         console.log(users)
              if(users.length>0){
                
                  return res.render('signUp',{pageTitle:'signUp',message:'Email already Exists'})
              }else{ 
                 const user:any= new Person({firstName,lastName,email,passWord});
                 user.save().then((doc:any)=>{
                     console.log(doc);
                  //res.render('signUp',{pageTitle:'signUp',message:'signUp successfully'})
                  res.redirect('/');
                  
                 },(e:any)=>{
                     res.status(400).send(e);
                  } )};
                  
                 });
                 
              
 
      };
   
export default postuser;