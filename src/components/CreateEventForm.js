import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DateField from './DateField'

class CreateEventForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Event Title</label>
          </div>
          <div>
            <Field type="text" name="title" component="input" />
          </div>
          <div>
            <label htmlFor="description">Describe your event</label>
          </div>
          <div>
            <Field type="text" name="description" component="input" />
          </div>
          <div>
            <label htmlFor="start_date">Start Date</label>
          </div>
          <div>
            <Field type="date" name="start_date" component={DateField} />
          </div>
          <div>
            <label htmlFor="end_date">End Date</label>
          </div>
          <div>
            <Field type="date" name="end_date" component={DateField} />
          </div>
          <div>
            <label htmlFor="category">Category</label>
          </div>
          <div>
            <Field type="text" name="category" component="input" />
          </div>
          <div>
            <label htmlFor="feature_flag">Featured?</label>
          </div>
          <div>
            <Field type="checkbox" name="feature_flag" component="input" />
          </div>
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
