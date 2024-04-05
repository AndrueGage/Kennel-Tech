const db = require('../config/connection');
const { Admin, Dog, User, Reservation } = require('../models');
const cleanDB = require('./cleanDB');

// const adminData = require('./adminData.json');
const dogData = require('./dogData.json');
const userData = require('./userData.json');
// const reservationData = require('./reservationData.json');

db.once('open', async () => {
    await cleanDB('Admin', 'admin');
    await cleanDB('Dog', 'dog');
    await cleanDB('User', 'user');
    await cleanDB('Reservation', 'reservation');

    await User.insertMany(userData);
    for (let i = 0; i < dogData.length; i++) {
        const { _id, user_id } = await Dog.create(dogData[i]);
        await User.findOneAndUpdate(
            { user_id: user_id },
            {
                $addToSet: {
                    dogs: _id,
                },
            }
        );
    }

    process.exit(0);
});