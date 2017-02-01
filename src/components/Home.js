import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => (
  <div>
    <Jumbotron>
      <h1>Welcome!</h1>
      <p>Do you like events? Did you answer "YES!"? Then we have a CRUD app for you!</p>
      <LinkContainer to="/events">
        <Button bsStyle="info">View All Events</Button>
      </LinkContainer>
      <p>or</p>
      <LinkContainer to="/create">
        <Button bsStyle="info">Create Your Own</Button>
      </LinkContainer>
    </Jumbotron>
  </div>
);

export default Home;
