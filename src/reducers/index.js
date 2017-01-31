import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  events: eventsReducer,
  routing: routerReducer,
})