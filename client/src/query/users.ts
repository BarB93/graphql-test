import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      age
      username
    }
  }
`

export const GET_ONE_USER= gql`
  query getUser($id: ID,){
    getUser(id: $id) {
      id
      age
      username
    }
  }
`
