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
        // createNewReservation: async (_, { reservationType, reservationDate_Time, status, dogs }) => {
        //     try {
        //         const formData = {
        //             reservationType,
        //             reservationDate_Time,
        //             status,
        //             dogs
        //         };
        
        //         // Create a new reservation object
        //         const reservation = new Reservation(formData);
        
        //         // Save the reservation to the database
        //         await reservation.save();
        
        //         // Iterate over each dog ID and update their reservations
        //         for (const dogId of dogs) {
        //             // Find the dog by its ID
        //             const dog = await Dog.findById(dogId);
        
        //             if (!dog) {
        //                 throw new Error(`Dog with ID ${dogId} not found.`);
        //             }
        
        //             // Add the reservation to the dog's reservations array
        //             dog.reservations.push(reservation);
        
        //             // Save the updated dog object to the database
        //             await dog.save();
        //         }
        
        //         // Return the created reservation
        //         return reservation;
        //     } catch (error) {
        //         // Handle errors gracefully
        //         throw new Error(`Error creating reservation: ${error.message}`);
        //     }
        // },
        createNewDog: async (_, { name, breed, age, sex, weight, vet, vaccine, owner }) => {
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
                    owner,
                    image: 'https://placedog.net/500/280'
                };
                console.log('Passed fields')
                console.table(updateFields)

                // Find the dog by ID and update its fields
                const dog = await new Dog(updateFields);

                // Check if the dog exists
                if (!dog) {
                    throw new Error('Dog not create IDK why');
                }
                await dog.save();

                const user = await User.findById(owner)
                    .populate('dogs')

                user.dogs.push(dog)

                await user.save();

                return dog; // Return the updated dog
            } catch (e) {
                console.error('Error create dog', e);
                throw new Error('Error create dog');
            }
        },
        updateUserById: async (_, { id, email, firstName, lastName, phone, vetOffice, emergencyContact, address }) => {
            try {
                const formData = {
                    email,
                    firstName,
                    lastName,
                    phone,
                    vetOffice,
                    emergencyContact,
                    address
                };

                const user = await User.findByIdAndUpdate(id, formData, { new: true });

                if (!user) {
                    throw new Error('User not found');
                }

                return user;
            } catch (error) {
                console.error('Error updating user by id:', error);
                throw new Error('Error updating user by id');
            }
        }
    }
};

export default resolvers;