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
        findDogById: async (_, { dogId }) => {
            try {
                const dog = await Dog.findById(dogId);
                return dog;
            } catch (error) {
                throw new Error("Failed to find dog by ID");
            }
        },
        updateDogInfo: async (_, { dogId, name, breed, age, sex, weight, vet, vaccine }) => {
            try {
                const dog = await Dog.findByIdAndUpdate(dogId, { name, breed, age, sex, weight, vet, vaccine }, { new: true });
                return dog;
            } catch (error) {
                throw new Error("Failed to update dog information!");
            }
        },
        findUserById: async (_, { userId }) => {
            try {
                const user = await User.findById(userId)
                return user;
            } catch (error) {
                throw new Error("Failed to fetch user by ID");
            }
        },
        updateUserInfo: async (_, { userId, address, email, vetOffice, emergencyContact }) => {
            try {
                const user =  await User.findByIdAndUpdate(userId, { address, email, vetOffice, emergencyContact}, { new: true });
                return user;
            } catch (error) {
                throw new Error("Failed to update user information!")
            }
        },
    }
};

export default resolvers;