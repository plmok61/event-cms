import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../actions/eventsActions';
import EventsListItem from './EventsListItem';
import Loading from './Loading';

class EventsList extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <div>
        {
          events.length
          ?
          events.map(event => (
            <EventsListItem event={event} key={event.id} />
          ))
          :
          <Loading tryAgain={this.props.getEvents} />
        }
      </div>
    );
  }
}

EventsList.propTypes = {
  getEvents: React.PropTypes.func.isRequired,
  events: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    category: React.PropTypes.string,
    start_date: React.PropTypes.string,
    end_date: React.PropTypes.string,
    feature_flag: React.PropTypes.bool,
  })).isRequired,
};

const mapStateToProps = store => ({
  events: store.events.events,
});

const mapDispatchToProps = dispatch => ({
  getEvents() {
    dispatch(getEvents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
