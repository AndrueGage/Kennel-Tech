const { User, Dog, Reservation } =  require('../models');

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