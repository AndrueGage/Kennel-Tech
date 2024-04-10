import { gql } from '@apollo/client'

export const MUTATION_UPDATE_USER = gql`
mutation updateUserById($id: ID!, $email: String!, $firstName: String!, $lastName: String!, $phone: String, $vetOffice: String,
  $emergencyContact: String, $address: String) {
  updateUserById(id: $id, email: $email, firstName: $firstName, lastName: $lastName, phone: $phone, vetOffice: $vetOffice, emergencyContact: $emergencyContact, address: $address) {
    _id
  }
}`

export const MUTATION_CREATE_DOG = gql`
mutation createNewDog($name: String!, $owner: ID!, $breed: String, $age: String, $sex: String, $weight: String, $vet: String, $vaccine: String) {
  createNewDog(name: $name, owner: $owner, breed: $breed, age: $age, sex: $sex, weight: $weight, vet: $vet, vaccine: $vaccine) {
    _id
  }
}
`
// export const MUTATION_CREATE_RESERVATION = gql`
// mutation createNewReservation($reservationType: String, $reservationDate_Time: String, $status: String){
//   createNewReservation(reservationType: $reservationType, reservationDate_Time: $reservationDate_Time, status: $status) {

//   }
// }`

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
