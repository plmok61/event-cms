import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DateField from './DateField'

class CreateEventForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field type="text" name="title" component="input" />
          <Field type="text" name="description" component="input" />
          <Field type="date" name="start_date" component={DateField} />
          <Field type="date" name="end_date" component={DateField} />
          <Field type="text" name="category" component="input" />
          <Field type="checkbox" name="feature_flag" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

CreateEventForm = reduxForm({
  form: 'createEvent',
})(CreateEventForm);

export default CreateEventForm;