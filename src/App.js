import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import io from 'socket.io-client';

import Routes from './Routes';
import AppController from './controllers/AppController';

const browserHistory = createBrowserHistory();

class App extends React.Component {

  /*
  
  componentDidMount() {
    const socket = io("https://hotputt.net", {path: '/hotputt/socket.io'});
    socket.on('connect', function() {
      console.log('websocket connecttion ok');
      socket.emit('hot:init_manager', { 
        token: AppController.getToken() 
      });
    });
    socket.on('hot:notification', function (payload) {
      console.log('hot:notification',payload);
    });
  }

  */
 
  render() {
    return (
      <Router history={browserHistory}>
        <Routes />
      </Router>
    );
  }
}

export default App;