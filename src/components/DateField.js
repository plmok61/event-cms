import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// export default class DateField extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startDate: moment(),
//     };
//   }

//   handleChange(date) {
//     this.setState({
//       startDate: date,
//     });
//   }

//   render() {
//     return (
//       <DatePicker
//         selected={this.state.startDate}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }

const DateField = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </div>
);

export default DateField;
