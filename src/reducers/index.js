import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import eventsReducer from './eventsReducer';

export default combineReducers({
  events: eventsReducer,
  routing: routerReducer,
  form: formReducer,
});
