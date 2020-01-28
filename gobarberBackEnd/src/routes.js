import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';
import RoleController from './app/controllers/RoleController';
import PeriodController from './app/controllers/PeriodController';
import RetailController from './app/controllers/RetailController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/roles', RoleController.show);
routes.post('/roles', RoleController.store);
routes.put('/roles', RoleController.update);
routes.delete('/roles', RoleController.delete);

routes.get('/periods', PeriodController.show);
routes.post('/periods', PeriodController.store);
routes.put('/periods', PeriodController.update);
routes.delete('/periods', PeriodController.delete);

routes.get('/retails', RetailController.show);
routes.post('/retails', RetailController.store);
routes.put('/retails', RetailController.update);
routes.delete('/retails', RetailController.delete);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
