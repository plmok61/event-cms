import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import eventsReducer from './eventsReducer';

export default combineReducers({
  events: eventsReducer,
  routing: routerReducer,
});
