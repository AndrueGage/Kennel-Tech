import mongoose from 'mongoose';
import Dog from './Dog.js';

const reservationSchema = new mongoose.Schema({
    reservationType: {
        type: String,
        required: true,
    },
    reservationDate_Time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    dogs: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: Dog, // referencing Dog model
        },
    ],
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
