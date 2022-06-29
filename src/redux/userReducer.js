import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  email: null,
  token: null,
}

const login = createAction('login')
const logout = createAction('logout')

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.token = action.payload.token
    })
    .addCase(logout, (state, action) => {
      state.id = null
      state.email = null
      state.token = null
    })
    .addDefaultCase((state, action) => {})
})

export default userReducer
