import axios from 'axios';

export function submitForm(inputs) {
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_START' });
    axios.post('http://localhost:8081/events', inputs)
      .then((response) => {
        console.log(response);
        dispatch({ type: 'SUBMIT_END' });
      })
      .catch(err => console.log('Error submitting: ', err));
  };
}
