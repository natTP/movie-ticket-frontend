import { gql } from '@apollo/client'

export const getShowtimeListByMovieQuery = gql`
  query getShowtimeListByMovieQuery($movieID: ID!, $dateString: String!) {
    getShowtimeListByMovie(movieID: $movieID, dateString: $dateString) {
      data {
        _id
        theater {
          _id
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
  query GetShowtimeByIDQuery($_id: ID!) {
    getShowtimeByID(_id: $_id) {
      movie {
        name
        releaseDate
        poster
        duration
        genre
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
      reservedSeats
      dateTime
      language
    }
  }
`

export const selectShowtimePageQuery = gql`
  query selectShowtimePageQuery($movieID: ID!, $dateString: String!) {
    getMovieByID(_id: $movieID) {
      name
      releaseDate
      poster
      duration
      genre
      synopsis
    }
    getShowtimeListByMovie(movieID: $movieID, dateString: $dateString) {
      data {
        _id
        theater {
          _id
          location
          name
        }
        dateTime
        language
      }
    }
  }
`
