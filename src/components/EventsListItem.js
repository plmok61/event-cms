import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

const EventsListItem = ({ event }) => (
  <Col xs={12}>
    <div className="event-list-item">
      <div className="title-date">
        <h3>{ event.title }</h3>
      </div>
      <div className="event-about">
        { event.feature_flag ? <h3>Featured Event!</h3> : null }
        <p>ID: { event.id }</p>
        <Link to={`events/${event.id}`}>View</Link>
      </div>
    </div>
  </Col>
);

EventsListItem.propTypes = {
  event: React.PropTypes.object.isRequired,
};

export default EventsListItem;
