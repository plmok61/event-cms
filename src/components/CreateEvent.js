import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../actions/eventsActions';
import CreateEventForm from './CreateEventForm';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.submitForm(values);
  }

  render() {
    return (
      <div>
        <CreateEventForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

CreateEvent.propTypes = {
  submitForm: React.PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  form: store.form,
});

const mapDispatchToProps = dispatch => ({
  submitForm(values) {
    dispatch(submitForm(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
