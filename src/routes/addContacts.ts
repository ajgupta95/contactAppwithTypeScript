import path from 'path';

import addContactsController from '../controllers/addContacts'
//import {Router} from 'express';

import Person from '../models/registerModel';
import {RequestHandler,Router} from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
const JWTSECRET = 'signupProject';
import Contacts from '../models/contactsModel';
import router from './logIn';


const app =Router();

router.post('/addcontacts',addContactsController)
export default router;