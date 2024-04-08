const typeDefs = `

type Query {
    greetings: String
    getUserById(id: ID!): User
    getUsersDogReservations(id: ID!): User
    getDogById(id: ID!): Dog
    getAllUsers: [User]
    getAllDogs: [Dog]
    getAllReservations: [Reservation]
    getAllAdmins: [Admin]
}

type Mutation {
    deleteDogById(id: ID!): Dog
    login(email: String!, password: String!): AuthPayLoad
    signup(email: String!, password: String!, firstName: String!, lastName: String!): AuthPayLoad
}

type AuthPayLoad {
    user: User
    token: String!
  }

type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    phone: String
    dogs: [Dog]
    vetOffice: String
    emergencyContact: String
    address: String
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