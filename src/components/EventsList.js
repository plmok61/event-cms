import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getEvents } from '../actions/eventsActions';
import EventsListItem from './EventsListItem';

class EventsList extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Row>
          <Col>
            <div>
              {
                events.length
                ?
                events.map(event => (
                  <EventsListItem event={event} key={event.id} />
                ))
                :
                null
              }
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

EventsList.propTypes = {
  getEvents: React.PropTypes.func.isRequired,
  events: React.PropTypes.array,
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
