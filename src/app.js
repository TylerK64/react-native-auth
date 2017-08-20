import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBg8a2iHcyzkv4-h17sVfItBr6ijNFtTs0',
      authDomain: 'auth-a48b6.firebaseapp.com',
      databaseURL: 'https://auth-a48b6.firebaseio.com',
      projectId: 'auth-a48b6',
      storageBucket: 'auth-a48b6.appspot.com',
      messagingSenderId: '332217142757'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>
      case false:
        return <LoginForm />;
      default:
        return (
          <View>
            <Spinner size='large' />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={styles.spinnerStyle}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
