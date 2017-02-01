import axios from 'axios';

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

export function editEvent() {
  return {
    type: 'EDIT_EVENT',
  };
}

export function submitEdit(values, id) {
  return (dispatch) => {
    dispatch({ type: 'EDIT_START' });
    axios.put(`http://localhost:8081/events/${id}`, values)
      .then(response => (
        console.log(response)
      ))
      .catch(err => console.log(`Error editing event ${id}: `, err));
  };
}

export function cancelEdit() {
  return {
    type: 'CANCEL_EDIT',
  };
}
