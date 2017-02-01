import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../actions/createEventActions';
import CreateEventForm from './CreateEventForm';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('form props: ', this.props);
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

const mapStateToProps = (store) => {
  return {
    form: store.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm(values) {
      dispatch(submitForm(values));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
