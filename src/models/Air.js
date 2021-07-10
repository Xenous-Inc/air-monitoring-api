import mongoose from 'mongoose';

const { Schema } = mongoose;

const airSchema = new Schema({
    sensorLocation: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Schema.Types.Number],
            required: true,
        },
    },
    sensorValue: { type: Schema.Types.String, required: true },
    sensorType: { type: Schema.Types.String, required: true, enum: ['mq135'] },
    date: {
        type: Schema.Types.Date,
        default: Date.now,
        required: true,
    },
});

export default mongoose.model('Air', airSchema);
