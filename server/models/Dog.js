import mongoose from 'mongoose';
import User from './User.js';

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
    },
    sex: {
        type: String,
    },
    age: {
        type: String,
    },
    weight: {
        type: String,
    },
    vet: {
        type: String,
    },
    image: {
        type: String,
    },
    vaccine: {
        type: String,
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User', // referencing User model
        required: true,
    },
    reservations: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Reservation', // referencing Reservation model
        },
    ],
});

const Dog = mongoose.model('Dog', dogSchema);

export default Dog;