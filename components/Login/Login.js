import React from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render(){
    return(
        <KeyboardAvoidingView behavior="padding" enabled style={ styles.container }>
          <View style={ styles.logoContainer }>
            <Image
              style={ styles.logo }
              source={require('../../images/dragon.png')} />
            <Text style={ styles.title }>An app made for the world.</Text>
          </View>
          <View style={ styles.formContainer }>
            <LoginForm />
          </View>
        </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    color: 'black',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16
  }

});
