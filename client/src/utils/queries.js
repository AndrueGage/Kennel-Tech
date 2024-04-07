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
