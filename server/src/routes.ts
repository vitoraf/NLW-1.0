import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinute';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionController = new ConnectionsController();





routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);


export default routes;