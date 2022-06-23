import { gql } from '@apollo/client'

export const CurrentUserQuery = gql`
  query {
    me {
      _id
      email
    }
  }
`
