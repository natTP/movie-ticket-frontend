import { gql } from '@apollo/client'

export const GetMovieListQuery = gql`
  query {
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
  query ($_id: ID!) {
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
