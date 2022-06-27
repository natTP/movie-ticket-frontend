import { gql } from '@apollo/client'

export const GetTheaterByIDQuery = gql`
  query GetTheaterByIDQuery($_id: ID!) {
    getTheaterByID(_id: $_id) {
      location
      name
      seats {
        type
        price
        rows
      }
    }
  }
`
