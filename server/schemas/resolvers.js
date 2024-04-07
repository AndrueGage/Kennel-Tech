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
        getAllReservations: async () => {
            return Reservation.find({});
        },
        getAllAdmins: async () => {
            return Admin.find({});
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
    },
    Mutation: {
        deleteDogById: async (_, {id}) => {
            try {
                const dog = await Dog.findByIdAndRemove(id);
                return dog;
            } catch (error) {
                console.error("Error deleting dog:", error);
                throw new Error("Error deleting dog");
            }
        },
       
    }
};

export default resolvers;