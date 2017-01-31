import React from 'react';
import { getEvents } from '../actions/eventsActions';
import { connect } from 'react-redux';

const EventsList = () => {
  return (
    <div>
      hello world
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    events: store.events.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents() {
      dispatch(getEvents());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
