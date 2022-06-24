import { gql } from '@apollo/client'

export const getShowtimeListByMovieQuery = gql`
  query ($movieID: ID!) {
    getShowtimeListByMovie(movieID: $movieID) {
      data {
        theater {
          location
          name
        }
        dateTime
        language
      }
    }
  }
`

export const GetShowtimeByIDQuery = gql`
  query ($_id: ID!) {
    getShowtimeByID(_id: $_id) {
      movie {
        name
        poster
        duration
      }
      theater {
        location
        name
        seats {
          type
          price
          rows
        }
      }
      dateTime
      language
    }
  }
`
