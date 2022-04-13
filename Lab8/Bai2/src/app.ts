import express, { request, response, Router } from 'express';
import bodyParser from 'body-parser';
import { json } from 'body-parser';
import * as controller from './controller';

const app = express();

app.use(json());
app.use(bodyParser.urlencoded({extended: true}));

const router = express.Router();
app.use('/route', router);
app.get('/', (request, response)=>{
    response.send('hello world route with nodemon 1!');
})
app.get('/users', controller.users);
router.post('/users/create', controller.create);

app.listen(3000)