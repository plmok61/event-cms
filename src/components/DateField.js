import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const DateField = ({ input, placeholder, defaultValue, meta: { touched, error } }) => (
  <div>
    <DatePicker
      {...input}
      dateForm="MM/DD/YYYY"
      selected={input.value ? moment(input.value) : null}
    />
    { touched && error && <span>{error}</span> }
  </div>
);

export default DateField;
