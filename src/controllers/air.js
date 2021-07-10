import { asyncHandler } from '../middlewares/asyncHandler';
import Boom from '@hapi/boom';
import Air from '../models/Air';
import air from "../routes/air";

const sendAirParams = asyncHandler(async (req, res, next) => {
    const { sensorType, sensorValue, sensorLocation } = req.body;

    if (!sensorType || !sensorValue || !sensorLocation) {
        return next(Boom.badData('missing params'));
    }

    try {
        const newAirParams = new Air({
            sensorLocation,
            sensorValue,
            sensorType,
        });
        await newAirParams.save();
        return res.status(200).json({});
    } catch (error) {
        console.error(error);

        return next(Boom.internal());
    }
});

const getAirParams = asyncHandler(async (req, res, next) => {
    try {
        const airParams = await Air.find();
        return res.status(200).json(airParams);
    } catch (error) {
        console.error(error);

        return next(Boom.internal());
    }
});

export default {
    sendAirParams,
    getAirParams,
};
