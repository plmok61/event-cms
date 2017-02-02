import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { getEvent, editEvent, submitEdit, cancelEdit, deleteEvent } from '../actions/eventsActions';
import EditEventForm from './EditEventForm';

class Event extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.params;
    console.log('id is a ', typeof id)
    this.props.getEvent(id);
  }

  handleSubmit(values) {
    this.props.submitEdit(values, this.props.params.id);
  }

  render() {
    const event = this.props.events.currentEvent;
    const editing = this.props.events.editing;
    const initialValues = {
      initialValues: {
        title: event.title,
        description: event.description,
        category: event.category,
        start_date: event.start_date,
        end_date: event.end_date,
        feature_flag: event.feature_flag,
      },
    };

    if (event && !editing) {
      // Make the start and end dates look nice
      const startDate = new Date(event.start_date).toDateString();
      const endDate = new Date(event.end_date).toDateString();
      return (
        <Grid>
          <Row>
            <Col xsHidden={true} smHidden={true} md={3} lg={3}>left</Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h2>
                {event.title}
              </h2>
              <h4>Starts {startDate}</h4>
              <h4>Ends {endDate}</h4>
              <p>{event.description}</p>
              <Button onClick={this.props.editEvent}>Edit</Button>
              <Button onClick={() => this.props.deleteEvent(this.props.params.id)}>Delete</Button>
            </Col>
            <Col xsHidden={true} smHidden={true} md={3} lg={3}>right</Col>
          </Row>
        </Grid>
      );
    } else if (event && editing) {
      return (
        <EditEventForm
          event={event}
          onSubmit={this.handleSubmit}
          cancelEdit={this.props.cancelEdit}
          {...initialValues}
        />
      );
    } else {
      return (
        <div>
          loading
        </div>
      );
    }
  }
}

Event.propTypes = {
  getEvent: React.PropTypes.func.isRequired,
  editEvent: React.PropTypes.func.isRequired,
  submitEdit: React.PropTypes.func.isRequired,
  cancelEdit: React.PropTypes.func.isRequired,
  deleteEvent: React.PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  events: store.events,
});

const mapDispatchToProps = dispatch => ({
  getEvent(id) {
    dispatch(getEvent(id));
  },
  editEvent() {
    dispatch(editEvent());
  },
  submitEdit(values, id) {
    dispatch(submitEdit(values, id));
  },
  cancelEdit() {
    dispatch(cancelEdit());
  },
  deleteEvent(id) {
    dispatch(deleteEvent(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
