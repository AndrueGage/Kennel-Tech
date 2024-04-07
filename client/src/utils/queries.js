import { gql } from '@apollo/client'

export const QUERY_LOGIN = gql`
query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        email 
      } 
      token
    }
  }
`
export const QUERY_USER = gql`
query GetUserById($id: ID!) {
  getUserById(id: $id) {
    _id
    address
    email
    emergencyContact
    firstName
    dogs {
      _id
      age
      breed
      name
      image
    }
    lastName
    phone
    vetOffice
  }
}
`
