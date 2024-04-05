const { User, Dog, Reservation, Admin, DogImages, VaccineImages } =  require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        dog: async () => {
            return Dog.find({});
        },
        reservation: async () => {
            return Reservation.find({});
        },
        admin: async () => {
            return Admin.find({});
        },
    },
    Mutation: {
        updateUser: {
            //
        },
        updateDog: {
            //
        },
        updateReservation: {
            //
        },
    },
};

module.exports = resolvers;