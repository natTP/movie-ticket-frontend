import { gql } from '@apollo/client'

export const GetShowtimeByIDQuery = gql`
  query ($_id: ID!) {
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
