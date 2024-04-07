import { Admin, Dog, User, Reservation } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { faker } from '@faker-js/faker';

async function seed() {
    console.log('Cleaning Collections...');
    await cleanDB('admins');
    await cleanDB('dogs');
    await cleanDB('users');
    await cleanDB('reservations');
    console.log('✅ Collections Reset');

    // Generate Users
    console.log('Generating Users...');
    const users = [];
    for (let i = 0; i < 5; i++) {
        const user = new User({
            email: faker.internet.email(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            password: faker.internet.password(),
            phone: faker.phone.number(),
            vetOffice: faker.company.name(),
            emergencyContact: faker.phone.number(),
            address: faker.location.streetAddress(),
        });
        await user.save();
        users.push(user);
    }
    console.log('✅ Generated Users');

    // Generate Dogs and User relations
    console.log('Generating Dogs...');
    const dogs = [];
    for (let i = 0; i < 10; i++) {
        // Find a random user
        const user = users[Math.floor(Math.random() * users.length)];

        // Check if user exists
        if (!user) {
            console.error('Error: Unable to find a user for the dog.');
            continue; // Skip adding this dog if user is not found
        }

        // Create a new dog with a random name
        const dog = new Dog({
            name: faker.person.firstName(),
            breed: faker.animal.dog(),
            sex: faker.helpers.arrayElement(['Male', 'Female']),
            age: faker.number.int(15).toString(), // assuming age is in years
            weight: faker.number.int(40, 200).toString(), // assuming weight is in pounds
            vet: faker.company.name(),
            image: 'https://placedog.net/500/280',
            vaccine: faker.datatype.boolean() ? 'Yes' : 'No',
            owner: user._id, // Assign the user's ID as the owner
        });

        // Save the dog to the database
        try {
            await dog.save();
            dogs.push(dog);
            // Ensure the dog ID is added to the user's dogs array
            user.dogs.push(dog._id);
            await user.save(); // Save the user document with the updated dogs array
        } catch (error) {
            console.error('Error saving dog:', error);
        }
    }

    console.log('✅ Generated Dogs and User relations');

    // Generate Reservations
    console.log('Generating Reservations...');
    for (let i = 0; i < 10; i++) {
        const randomDogIndex = Math.floor(Math.random() * dogs.length);
        const dog = dogs[randomDogIndex];
        const reservation = new Reservation({
            reservationType: faker.helpers.arrayElement(['Boarding', 'Daycare', 'Grooming']),
            reservationDate_Time: faker.date.future().toISOString(),
            status: faker.helpers.arrayElement(['Pending', 'Confirmed', 'Cancelled']),
            dog: dog._id, // Associate the reservation with a single dog
        });
        await reservation.save();

        // Add the reservation ID to the dog's reservations array
        dog.reservations.push(reservation._id);
        await dog.save();
    }
    console.log('✅ Generated Reservations');

    // Generating an Admin Account
    console.log('Generating an Admin Account...');

    const admin = new Admin({
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        password: faker.internet.password(),
    })
    await admin.save();

    console.log('✅ Generated an Admin');

    console.log('🏁 Finished');
    process.exit(0);
}

seed();