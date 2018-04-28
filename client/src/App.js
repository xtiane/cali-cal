import React, { Component } from 'react';
import Task from './components/Task/TaskContainer';
import './App.css';
import Header from './components/Header';
import Week from './components/Week/WeekContainer';
// import OauthLogout from './components/OauthLogout';
// import { Router, Link } from 'react-router-dom';
import { Router, Link } from 'react-router-dom';
import AddEventButton from './components/AddEventButton/AddEventButtonContainer';
import UpdateButton from './components/UpdateButton/UpdateButtonContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          
          {/* <OauthLogout /> */}
        </div>
        <div className='container'>
          <div className='row'>
            <Week />
          </div>
          <div className='row'>
            <Task />
            <div className='add-event-btn'>
              <Link to="/calendar/edit">
                <AddEventButton />
                
              </Link>
              <UpdateButton />
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;