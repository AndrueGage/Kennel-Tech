const typeDefs = `

type Query {
    greetings: String
    getUserById(id: ID!): User
    getDogById(id: ID!): Dog
    getAllUsers: [User]
    getAllDogs: [Dog]
    getAllReservations: [Reservation]
    getAllAdmins: [Admin]
}

type Mutation {
    deleteDogById(id: ID!): Dog
}

type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    phone: String!
    dogs: [Dog]
    vetOffice: String!
    emergencyContact: String!
    address: String!
    reservations: [Reservation]
}

type Dog {
    _id: ID!
    name: String!
    breed: String!
    age: String!
    sex: String!
    weight: String!
    vet: String!
    vaccine: String!
    image: String!
    owner: User
    reservations: [Reservation]
}

type Reservation {
    _id: ID!
    reservationType: String!
    reservationDate_Time: String!
    status: String!
    dog: [Dog]
}

type Admin {
    _id: ID!
    email: String!
    users: [User]
    dogs: [Dog]
    reservations: [Reservation]
}
`;

export default typeDefs;