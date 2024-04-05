const { Schema, model } = require('mongoose');

const dogSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    dog_images: [
        {
            type: Schema.Types.ObjectId,
            ref: 'dogimages'
        }
    ],      
    vaccine_images: [
        {
            type: Schema.Types.ObjectId,
            ref: 'vaccineimages'
        }
    ],
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
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
    vaccine: {
        type: String,
        required: true,
    },
})

const Dog = model('dog', dogSchema);

module.exports = Dog;
