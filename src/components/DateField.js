import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const DateField = ({ input, meta: { touched, error } }) => (
  <div>
    <DatePicker
      {...input}
      dateForm="MM/DD/YYYY"
      selected={input.value ? moment(input.value) : null}
    />
    { touched && error && <span>{error}</span> }
  </div>
);

DateField.propTypes = {
  input: React.PropTypes.shape({
    name: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    OnChange: React.PropTypes.func,
    OnDragStart: React.PropTypes.func,
    OnDrop: React.PropTypes.func,
    OnFocus: React.PropTypes.func,
    value: React.PropTypes.string,
  }).isRequired,
};

export default DateField;
