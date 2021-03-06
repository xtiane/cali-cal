import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import EventForm from './EventForm/EventFormContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact={ true } path="/" component={App} />
        <Route exact={ true } path="/calendar/edit" component={ EventForm }/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root