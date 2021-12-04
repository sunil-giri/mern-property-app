import { combineReducers } from 'redux';
import users from './user.reducer';
import {propertyReducer as property} from "./property.reducer"


const appReducers = combineReducers({
    users,
    property
});

export default appReducers;