import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
}

const register = createAction('register')
const login = createAction('login')

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(register, (state, action) => {
      // state.name = action.payload
    })
    .addDefaultCase((state, action) => {})
})

export default userReducer
