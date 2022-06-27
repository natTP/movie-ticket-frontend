import { combineReducers } from '@reduxjs/toolkit'
import user from './userReducer'
import reservation from './reservationReducer'

export default combineReducers({ user, reservation })
