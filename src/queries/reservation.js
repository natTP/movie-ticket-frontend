import { gql } from '@apollo/client'

export const GetReservationByIDQuery = gql`
  query GetReservationLByID($id: ID!) {
    getReservationByID(_id: $id) {
      _id
      showtime {
        movie {
          name
          releaseDate
          poster
          genre
          duration
        }
        dateTime
        theater {
          name
          location
        }
        language
      }
      seats
      price
    }
  }
`

export const GetReservationListByUserQuery = gql`
  query GetReservationListByUser($userId: ID!) {
    getReservationListByUser(userID: $userId) {
      data {
        _id
        showtime {
          movie {
            name
            releaseDate
            poster
            genre
            duration
          }
          dateTime
          theater {
            name
            location
          }
          language
        }
        seats
        price
      }
    }
  }
`
