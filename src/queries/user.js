import { gql } from '@apollo/client'

export const CurrentUserQuery = gql`
  query CurrentUserQuery {
    me {
      _id
      email
    }
  }
`
