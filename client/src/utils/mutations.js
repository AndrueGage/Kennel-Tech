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

export const MUTATION_ADDDOG = gql`
mutation Mutation($name: String!, $breed: String!, $sex: String!, $age: String!, $weight: String!, $vet: String!, $vaccines: String!) {
  addDog(name: $name, breed: $breed, sex: $sex, age: $age, weight: $weight, vet: $vet, vaccines: $vaccines) {
    token
    dog {
      _id
      name
      breed
      sex
      age
      weight
      vet
      vaccines
    }
  }
}
`