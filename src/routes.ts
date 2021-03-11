import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserControllers';

const routes = Router();

const userController = new UserController();
const surveyController = new SurveysController();

const sendMailController = new SendMailController();

const answersController = new AnswerController();

const npsController = new NpsController();

routes.post('/users', userController.create);

routes.get('/surveys', surveyController.index);
routes.post('/surveys', surveyController.create);

routes.post('/mail/send', sendMailController.execute);

routes.get('/answers/:value', answersController.execute);

routes.get('/nps/:survey_id', npsController.execute);

export { routes };