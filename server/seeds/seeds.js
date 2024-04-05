const db = require('../config/connection');
const { Admin, Dog, User, Reservation } = require('../models');
const cleanDB = require('./cleanDB');

const adminData = require('./adminData.json');
const dogData = require('./dogData.json');
const userData = require('./userData.json');
const reservationData = require('./reservationData.json');

db.once('open', async () => {
    await cleanDB('Admin', 'admin');
    await cleanDB('Dog', 'dog');
    await cleanDB('User', 'user');
    await cleanDB('Reservation', 'reservation');

    
    
    process.exit(0);
});