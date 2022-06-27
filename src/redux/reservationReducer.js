import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  showtime: null,
  seats: [],
}

const selectShowtime = createAction('select showtime')
const selectSeats = createAction('select seats')
const clearReservation = createAction('clear reservation')

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectShowtime, (state, action) => {
      state.showtime = action.payload.showtime
      state.seats = []
    })
    .addCase(selectSeats, (state, action) => {
      state.seats.push(action.payload.seat)
    })
    .addCase(clearReservation, (state, action) => {
      state.showtime = null
      state.seats = []
    })
    .addDefaultCase((state, action) => {})
})

export default userReducer
