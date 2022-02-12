import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {combineReducers} from 'redux'
import apiReducer from "./reducers/apiReducer";

export const rootReducer = combineReducers({
    api: apiReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch