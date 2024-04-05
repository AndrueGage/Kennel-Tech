const { Schema, model } = require('mongoose');

const reservationSchema = new Schema({
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
    dog: [
        {
            type: Schema.Types.ObjectId,
            ref: 'dog',
        },
    ],
});

const Reservation = model('reservation', reservationSchema);

module.exports = Reservation;