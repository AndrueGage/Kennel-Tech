const typeDefs = `
    type User {
        _id: ID!
        email: String!
        firstName: String!
        lastName: String!
        password: String!
        phone: String!
        dog: [dogs]
        vetOffice: String!
        emergencyContact: String!
        address: String!
        reservations: [reservation]
    }

    type Dog {
        _id: ID!
        email: String!
        dog_images: 
        vaccine_images:
        name: String!
        breed: String!
        age: String!
        weight: String!
        vet: String!
        vaccine: String!
    }

    type Reservation {
        _id: ID!
        reservationType: String!
        reservationDate_Time: String!
        status: String!
        dog: [dog]
    }
    
    type Admin {
        _id: ID!
        email: String!
        password: String!
        users: [user]
        dogs: [dog]
        reservations: [reservation]
    }
`;

module.exports = typeDefs;