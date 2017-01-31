import axios from 'axios';

export function getEvents() {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_EVENTS' });

    axios.get('http://localhost:8081/events')
      .then(response => (
        console.log('got events: ', response)
      ))
      .catch(err => console.log('Error getting events: ', err));
  };
}
