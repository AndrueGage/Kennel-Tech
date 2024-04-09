import { gql } from '@apollo/client'

export const MUTATION_LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        email 
      } 
      token
    }
  }
`

export const MUTATION_SIGNUP = gql`
mutation Mutation($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  signup(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
    token
    user {
      _id
      email
      firstName
      lastName
    }
  }
}
`

export const UPDATE_DOG_INFO = gql`
mutation UpdateDogInfo($dogId: ID!, $name: String, $breed: String, $age: String, $sex: String, $weight: String, $vet: String) {
  updateDogInfo(dogId: $dogId, name: $name, breed: $breed, age: $age, sex: $sex, weight: $weight, vet: $vet) {
    age
    breed
    name
    sex
    vet
    weight
  }
}
`

export const UPDATE_USER_INFO = gql`
mutation UpdateUserInfo($userId: ID!, $address: String!, $email: String!, $vetOffice: String!, $emergencyContact: String!) {
  updateUserInfo(userId: $userId, address: $address, email: $email, vetOffice: $vetOffice, emergencyContact: $emergencyContact) {
    address
    email
    emergencyContact
    vetOffice
  }
}
`