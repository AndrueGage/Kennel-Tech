import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        unique: true,
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
    },
    phone: {
        type: String,
        required: false,
    },
    dogs: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Dog', // referencing Dog model
        },
    ],
    vetOffice: {
        type: String,
        required: false,
    },
    emergencyContact: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
});

// userSchema.virtual('fullName').get(function () {
//     return `${this.firstName} ${this.lastName}`;
// });

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }


    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
const User = mongoose.model('User', userSchema);

export default User;