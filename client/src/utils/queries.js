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
export const QUERY_DOG_USER_RESERVATIONS = gql`
query GetUsersDogReservations($id: ID!) {
  getUsersDogReservations(id: $id) {
    dogs {
      name
      reservations {
        _id
        reservationDate_Time
        reservationType
        status
      }
    }
  }
}
`

export const QUERY_DOG_INFO = gql`
query GetUsersDogInfo($id: ID!) {
  getUsersDogInfo(id: $id) {
    dogs {
      image
      name
      breed
      sex
      age
      weight
      vet
    }
  }
}
`