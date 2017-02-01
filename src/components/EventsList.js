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
                events.map((event, key) => (
                  <EventsListItem event={event} key={key} />
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
