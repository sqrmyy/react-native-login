import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'dummydummydummy',
      authDomain: 'dummy-dummy.firebaseapp.com',
      databaseURL: 'https://dummy-dummy.firebaseio.com',
      projectId: 'dummy-dummy',
      storageBucket: 'dummy-dummy.appspot.com',
      messagingSenderId: '339440415242',
    });
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>ログインフォーム</Text>
          </View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = {
  header: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
};

export default App;
