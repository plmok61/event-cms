import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import { getEvents } from '../actions/eventsActions';

class App extends Component {
  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);