import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  showtime: null,
  seats: [],
  price: 0,
}

const selectShowtime = createAction('select showtime')
const addSeat = createAction('add seat')
const removeSeat = createAction('remove seat')
const clearReservation = createAction('clear reservation')

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectShowtime, (state, action) => {
      state.showtime = action.payload.showtime
      state.seats = []
      state.price = 0
    })
    .addCase(addSeat, (state, action) => {
      state.seats.push(action.payload.seat)
      state.seats.sort()
      state.price += action.payload.price
    })
    .addCase(removeSeat, (state, action) => {
      state.seats = state.seats
        .filter((seat) => seat !== action.payload.seat)
        .sort()
      state.price -= action.payload.price
    })
    .addCase(clearReservation, (state, action) => {
      state.showtime = null
      state.seats = []
      state.price = 0
    })
    .addDefaultCase((state, action) => {})
})

export default userReducer
