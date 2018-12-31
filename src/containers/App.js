import React, { Component } from 'react';
import { Provider } from 'react-redux';
import FriendListApp from './FriendListApp';
import store from './../store/ConfigureStore';

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    );
  }
}
