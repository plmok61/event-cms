import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/styles/App.css';

const App = ({ children }) => (
  <div className="App">
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Event CMS</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/create">
            <NavItem eventKey={1}>Create</NavItem>
          </LinkContainer>
          <LinkContainer to="/events">
            <NavItem eventKey={2}>All Events</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Grid>
      <Row>
        <Col>
          <div>{ children }</div>
        </Col>
      </Row>
    </Grid>
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
