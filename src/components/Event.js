import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import { getEvent, editEvent, submitEdit, cancelEdit, deleteEvent } from '../actions/eventsActions';
import EditEventForm from './EditEventForm';
import Loading from './Loading';

class Event extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.params;
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
        <div className="event-container">
          <div className="title-date">
            <h1>
              {event.title}
            </h1>
            <p>Starts: {startDate}</p>
            <p>Ends: {endDate}</p>
          </div>
          <div className="event-about">
            <p><span className="bold-text">About this event: </span></p>
            <p>{event.description}</p>
            <h4>Category: {event.category}</h4>
            <ButtonGroup>
              <Button bsStyle="warning" onClick={this.props.editEvent}>Edit</Button>
              <Button bsStyle="danger" onClick={() => this.props.deleteEvent(this.props.params.id)}>Delete</Button>
            </ButtonGroup>
          </div>
        </div>
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
        <Loading tryAgain={() => this.props.getEvent(this.props.params.id)} />
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
  params: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
  }).isRequired,
  events: React.PropTypes.shape({
    events: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string,
      description: React.PropTypes.string,
      category: React.PropTypes.string,
      start_date: React.PropTypes.string,
      end_date: React.PropTypes.string,
      feature_flag: React.PropTypes.string,
    })),
    fetching: React.PropTypes.bool,
    editing: React.PropTypes.bool,
    currentEvent: React.PropTypes.shape({
      title: React.PropTypes.string,
      description: React.PropTypes.string,
      category: React.PropTypes.string,
      start_date: React.PropTypes.string,
      end_date: React.PropTypes.string,
      feature_flag: React.PropTypes.string,
    }),
  }).isRequired,
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
