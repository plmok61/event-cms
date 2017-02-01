import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

const EventsListItem = ({ event }) => {
  const featured = event.feature_flag ? 'Featured Event!' : 'Not cool enough...';
  return (
    <Col xs={12}>
      <div className="event-list-item">
        <h3>ID: { event.id }</h3>
        <h3>Title: { event.title }</h3>
        <h3>Featured: { featured }</h3>
        <Link to={`events/${event.id}`}>View</Link>
      </div>
    </Col>
  );
};

EventsListItem.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventsListItem;
