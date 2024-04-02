const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not valid email address!`
        },
        unique: [true, 'User email address is required'],
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        bcrypt: true,
        rounds: 10,
    },
    phone: {
        type: String,
        required: true,
        bcrypt: true,
        rounds: 10,
    },
    dogs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'dogs',
        },
    ],
    vetOffice: {
        type: String,
        required: true,
    },
    emergencyContact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    reservations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'reservation',
        },
    ],
});

userSchema
    .virtual('fullName')
    .get(function () {
        return `${this.first} ${this.last}`;
    })
    .set(function (v) {
        const first = v.split(' ')[0];
        const last = v.split(' ')[1];
        this.set({ first, last });
});

userSchema.plugin(require('mongoose-bcrypt'));

const User = model('user', userSchema);

module.exports = User;