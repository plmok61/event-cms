import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateEventForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field type="text" name="title" component="input" />
          <Field type="text" name="description" component="input" />
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