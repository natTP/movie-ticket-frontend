import { gql } from '@apollo/client'

export const RegisterMutation = gql`
  mutation ($input: UserInput) {
    register(input: $input) {
      token
    }
  }
`

export const LoginMutation = gql`
  mutation ($input: UserInput) {
    login(input: $input) {
      token
    }
  }
`
