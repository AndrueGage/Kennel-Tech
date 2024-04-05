const { Schema, model } = require('mongoose');

const dogSchema = new Schema({
    // dog_images: {
    //     type: Image,
    //     content: Mixed
    // },
    // vaccine_images: {
    //     type: Image,
    //     content: Mixed
    // },
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    // sex:{
    //     type: String
    // },
    // age: {
    //     type: String,
    //     required: true,
    // },
    // weight: {
    //     type: String,
    //     required: true,
    // },
    // vet: {
    //     type: String,
    //     required: true,
    // },
    // vaccine: {
    //     type: String,
    // },
    user_id:{
        type: String,
        required: true
    }
})

const Dog = model('dog', dogSchema);

module.exports = Dog;
