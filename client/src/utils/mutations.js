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

export const MUTATION_UPDATE_DOG_BY_ID = gql`
mutation updateDogById($id: ID!, $name: String!, $breed: String!, $age: String!, $sex: String!, $weight: String!, $vet: String!, $vaccine: String!, $image: String) {
  updateDogById(id: $id, name: $name, breed: $breed, age: $age, sex: $sex, weight: $weight, vet: $vet, vaccine: $vaccine, image: $image) {
    _id
  }
}`

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
