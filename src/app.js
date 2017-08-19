import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBg8a2iHcyzkv4-h17sVfItBr6ijNFtTs0',
      authDomain: 'auth-a48b6.firebaseapp.com',
      databaseURL: 'https://auth-a48b6.firebaseio.com',
      projectId: 'auth-a48b6',
      storageBucket: 'auth-a48b6.appspot.com',
      messagingSenderId: '332217142757'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
