import path from 'path';

import express,{Request,Response,NextFunction} from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import ejs from  'ejs';
import  mongoose from 'mongoose';

import logInRoutes  from './routes/logIn'
import signUpRoutes  from './routes/signUp'
import fetchUser from './routes/fetchUser'
import addcontacts from './routes/addContacts'
import logout from './routes/logOut'

const app=express();

app.set('view engine','ejs');
app.set('views', './views');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));

app.use(logInRoutes);
app.use(signUpRoutes);
app.use(fetchUser);
app.use(addcontacts);
app.use(logout);



//mongoose.Promise=global.Promise;
mongoose.set('useUnifiedTopology',true)
mongoose.connect('mongodb://localhost:27017/ContactAPP',{
    useNewUrlParser:true
}).then((res)=>{
    console.log('Connected to Db')

},(err)=>{
    console.log('Not connected to Db')
});

app.use((req,res)=>{
    res.status(404).render('404.ejs',{pageTitle:'Page Not Found'});
    });

app.listen(3000,()=>{
    console.log('Server is listening')
});