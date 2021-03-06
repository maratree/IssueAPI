import * as express from 'express';
import {CompanyController} from './controller/company';
import {UserController} from './controller/user';
import {CustomerController} from './controller/customer';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as auth from './helpers/auth';
import {LoginController} from './controller/login';
import {IssueController} from './controller/issue';
const app: express.Application = express();

//get port or if not found port default port 3000 
const port: string = process.env.PORT || '3000';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(auth.initialize());

app.use('/company',CompanyController);
app.use('/user',UserController);
app.use('/customer',CustomerController);
app.use('/login',LoginController);
app.use('/issue',IssueController);


//Serve the application at the given port
app.listen(port, () => {
    // use ` (windows+changelanguage)
    //Success callback
    console.log(`Listening at http://localhost:${port}/`);
});


