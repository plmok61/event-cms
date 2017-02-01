import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../actions/eventsActions';

class Event extends Component {
  componentDidMount() {
    const { id } = this.props.params;
    this.props.getEvent(id);
  }

  render() {
    const event = this.props.events.currentEvent
    if (event) {
      return (
        <div>
          {event.title}
        </div>
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

const mapStateToProps = (store) => {
  return {
    events: store.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvent(id) {
      dispatch(getEvent(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
