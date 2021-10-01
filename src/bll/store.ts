import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from "redux-thunk"

import { usersReducer, UserReducerType } from './user-reducer'




export type ActionType = UserReducerType

const reducer = combineReducers({
    users:usersReducer
})

export type AppStateType = ReturnType <typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))