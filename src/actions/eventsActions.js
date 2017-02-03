import axios from 'axios';
import { browserHistory } from 'react-router';

export function getEvents() {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'FETCHING_EVENTS' });
    axios.get('http://localhost:8081/events')
      .then(response => (
        dispatch({ type: 'FETCHED_EVENTS', payload: response.data })
      ))
      .catch((err) => {
        console.log('Error getting events: ', err);
        dispatch({ type: 'EVENT_ERROR' });
      });
  };
}

export function getEvent(id) {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'FETCHING_EVENT' });
    axios.get(`http://localhost:8081/events/${id}`)
      .then(response => (
        dispatch({ type: 'FETCHED_EVENT', payload: response.data[0] })
      ))
      .catch((err) => {
        console.log(`Error getting event ${id}: `, err);
        dispatch({ type: 'EVENT_ERROR' });
      });
  };
}

export function submitForm(inputs) {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'SUBMIT_START' });
    // Create a new event object with a "created_at" value
    const event = { ...inputs, created_at: new Date() };
    axios.post('http://localhost:8081/events', event)
      .then((response) => {
        const newEvent = response.data[0];
        dispatch({ type: 'SUBMIT_END', payload: newEvent });
        // Redirect the user to the newly created event
        browserHistory.push(`/events/${newEvent.id}`);
      })
      .catch((err) => {
        console.log('Error submitting: ', err);
        dispatch({ type: 'EVENT_ERROR' });
      });
  };
}

export function editEvent() {
  return {
    type: 'EDIT_EVENT',
  };
}

export function submitEdit(values, id) {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'EDIT_START' });
    // Create a new event object with an "updated_at" value
    const event = { ...values, updated_at: new Date() };
    axios.put(`http://localhost:8081/events/${id}`, event)
      .then((response) => {
        const updatedEvent = JSON.parse(response.config.data);
        dispatch({ type: 'EDIT_COMPLETE', payload: updatedEvent });
      })
      .catch((err) => {
        console.log(`Error editing event ${id}: `, err);
        dispatch({ type: 'EVENT_ERROR' });
      });
  };
}

export function cancelEdit() {
  return {
    type: 'CANCEL_EDIT',
  };
}

export function deleteEvent(id) {
  return (dispatch) => {
    // Set Fetching to "true" so we know some sort of async action in occuring
    dispatch({ type: 'DELETE_START' });
    axios.delete(`http://localhost:8081/events/${id}`)
      .then((response) => {
        console.log('delete event', response);
        // Redirect the user to the events listview
        browserHistory.push('/events');
        dispatch({ type: 'DELETE_COMPLETE' });
      })
    .catch((err) => {
      console.log(`Error deleting event ${id}: `, err);
      dispatch({ type: 'EVENT_ERROR' });
    });
  };
}
