import {combineReducers, createStore} from 'redux'
import todoReducer from './reducers/todo-reducer'

const rootReducers = combineReducers({todos:todoReducer})


const store=createStore(rootReducers)

export default store