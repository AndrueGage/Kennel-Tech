const { Schema, model } = require('mongoose');

const dogImageSchema = new Schema({
    filename: {
        type: String,
        required: true,
    },
    mimetype: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }  
});

const DogImage = model('dogimage', dogImageSchema);

module.exports = DogImage;