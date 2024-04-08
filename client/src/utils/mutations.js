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
