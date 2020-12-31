import {createStore} from "redux";
import {reducer} from '../ReduxReducer/ReduxReducer'


export const store = createStore(reducer)