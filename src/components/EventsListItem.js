import React from 'react';
import { Link } from 'react-router';

const EventsListItem = ({ event }) => {
  return (
    <div>
      { event.title }
      <Link to={`events/${event.id}`}>View</Link>
    </div>
  );
};

export default EventsListItem;
