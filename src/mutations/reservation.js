import { gql } from '@apollo/client'

export const CreateReservationMutation = gql`
  mutation CreateReservation($input: ReservationInput!) {
    createReservation(input: $input) {
      reservationID
    }
  }
`
