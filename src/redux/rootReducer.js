import { combineReducers } from "redux";
import todoReducer from './todos/reducer/reducer'
import filterReducer from './filters/reducer/reducer'



const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
})

export default rootReducer;