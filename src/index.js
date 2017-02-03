import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App';
import Home from './components/Home';
import EventsList from './components/EventsList';
import Event from './components/Event';
import CreateEvent from './components/CreateEvent';
import store from './store';
import './assets/styles/index.css';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/events" component={EventsList} />
        <Route path="/events/:id" component={Event} />
        <Route path="/create" component={CreateEvent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
