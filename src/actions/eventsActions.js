import axios from 'axios';
import { browserHistory } from 'react-router';

export function getEvents() {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_EVENTS' });

    axios.get('http://localhost:8081/events')
      .then(response => (
        dispatch({ type: 'FETCHED_EVENTS', payload: response.data })
      ))
      .catch(err => console.log('Error getting events: ', err));
  };
}

export function getEvent(id) {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_EVENT' });
    axios.get(`http://localhost:8081/events/${id}`)
      .then(response => (
        dispatch({ type: 'FETCHED_EVENT', payload: response.data[0] })
      ))
      .catch(err => console.log(`Error getting event ${id}: `, err));
  };
}

export function submitForm(inputs) {
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_START' });
    axios.post('http://localhost:8081/events', inputs)
      .then((response) => {
        const newEvent = response.data[0];
        dispatch({ type: 'SUBMIT_END', payload: newEvent });
        browserHistory.push(`/events/${newEvent.id}`);
      })
      .catch(err => console.log('Error submitting: ', err));
  };
}

export function editEvent() {
  return {
    type: 'EDIT_EVENT',
  };
}

export function submitEdit(values, id) {
  return (dispatch) => {
    dispatch({ type: 'EDIT_START' });
    axios.put(`http://localhost:8081/events/${id}`, values)
      .then((response) => {
        const updatedEvent = JSON.parse(response.config.data);
        dispatch({ type: 'EDIT_COMPLETE', payload: updatedEvent });
      })
      .catch(err => console.log(`Error editing event ${id}: `, err));
  };
}

export function cancelEdit() {
  return {
    type: 'CANCEL_EDIT',
  };
}

export function deleteEvent(id) {
  return (dispatch) => {
    axios.delete(`http://localhost:8081/events/${id}`)
      .then(response => (
        browserHistory.push('/events')
      ))
      .catch(err => console.log(`Error deleting event ${id}: `, err));
  };
}
