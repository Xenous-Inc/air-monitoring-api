import express from 'express';
import airController from '../controllers/air';

// eslint-disable-next-line new-cap
const airRouter = express.Router();

airRouter.post('/', airController.sendAirParams);
airRouter.get('/', airController.getAirParams);

export default airRouter;
