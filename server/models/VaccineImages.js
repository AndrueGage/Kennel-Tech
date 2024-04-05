const { Schema, model } = require('mongoose');

const vaccineImagesSchema = new Schema({
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

const VaccineImages = model('vaccineimages', vaccineImagesSchema);

module.exports = VaccineImages