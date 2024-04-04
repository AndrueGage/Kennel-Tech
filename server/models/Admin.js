const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
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
    password: {
        type: String,
        required: true,
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    dogs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'dog',
        },
    ],
    reservations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'reservation',
        },
    ],
});

adminSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password =  await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

const Admin = model('admin', adminSchema);

module.exports = Admin;