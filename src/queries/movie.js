import { gql } from '@apollo/client'

export const GetMovieListQuery = gql`
  query GetMovieListQuery {
    getMovieList {
      data {
        _id
        name
        releaseDate
        poster
        genre
        duration
      }
    }
  }
`

export const GetMovieByIDQuery = gql`
  query GetMovieByIDQuery($_id: ID!) {
    getMovieByID(_id: $_id) {
      name
      releaseDate
      poster
      duration
      genre
      synopsis
    }
  }
`
