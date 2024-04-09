import { User, Admin, Dog, Reservation } from '../models/index.js';
import { signToken } from '../utils/utils.js';

const resolvers = {
    Query: {
        greetings: () => "GraphQL is Awesome",
        // This returns one user and all of their dogs and reservations
        getUserById: async (_, { id }) => {
            try {
                const user = await User.findById(id)
                    .populate('dogs')
                return user;
            } catch (error) {
                console.error("Error fetching user by ID:", error);
                throw new Error("Failed to fetch user by ID");
            }
        },
        getUsersDogReservations: async (_, { id }) => {
            try {
                const user = await User.findById(id)
                    .populate({
                        path: 'dogs',
                        populate: {
                            path: 'reservations'
                        }
                    })
                return user;
            } catch (error) {
                console.error("Error fetching user by ID:", error);
                throw new Error("Failed to fetch user by ID");
            }
        },
        getAllUsers: async () => {
            return User.find({}).populate('dogs');
        },
        getDogById: async (_, { id }) => {
            try {
                const dog = await Dog.findById(id)
                    .populate('owner')
                    .populate('reservations');
                return dog;
            } catch (error) {
                console.error("Error fetching dog by ID:", error);
                throw new Error("Failed to fetch dog by ID");
            }
        },
        getAllDogs: async () => {
            return Dog.find({}).populate('owner');
        },
        // Admin
        getAllReservations: async () => {
            return Reservation.find({});
        },
        getAllAdmins: async () => {
            return Admin.find({});
        }

    },
    Mutation: {
        deleteDogById: async (_, { id }) => {
            try {
                const dog = await Dog.findByIdAndRemove(id);
                return dog;
            } catch (error) {
                console.error("Error deleting dog:", error);
                throw new Error("Error deleting dog");
            }
        },
        updateDogById: async (_, { id, name, breed, age, sex, weight, vet, vaccine, image }) => {
            try {
                // Construct the update object with the fields to be updated
                const updateFields = {
                    name,
                    breed,
                    age,
                    sex,
                    weight,
                    vet,
                    vaccine,
                    image
                };

                // Find the dog by ID and update its fields
                const dog = await Dog.findByIdAndUpdate(id, updateFields, { new: true });

                // Check if the dog exists
                if (!dog) {
                    throw new Error('Dog not found');
                }

                return dog; // Return the updated dog
            } catch (e) {
                console.error('Error updating dog by id', e);
                throw new Error('Error updating dog by id');
            }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },
        signup: async (parent, { email, password, firstName, lastName }) => {
            const user = new User({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            });

            if (!user) {
                throw AuthenticationError;
            }

            if (user) {
                await user.save();
            }

            const token = signToken(user);
            return { token, user };
        },

    }
};

export default resolvers;