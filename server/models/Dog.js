import mongoose from 'mongoose';
import User from './User.js';

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
    },
    age: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    vet: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    vaccine: {
        type: String,
        required: true
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