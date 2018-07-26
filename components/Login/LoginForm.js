import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default class LoginForm extends React.Component {
  render(){
    return(
        <View style={ styles.container }>
          <StatusBar barStyle="dark-content"/>
          <TextInput
            placeholder="email"
            placeholderTextColor="rgba(0,0,0,0.6)"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={()=> this.passwordInput.focus()}
            style={ styles.input } />
          <TextInput
            placeholder="password"
            placeholderTextColor="rgba(0,0,0,0.6)"
            returnKeyType="send"
            secureTextEntry
            style={ styles.input }
            ref={(input)=> this.passwordInput = input}
           />

          <TouchableOpacity style={ styles.buttonContainer }>
            <Text style={ styles.button }>LOGIN</Text>
          </TouchableOpacity>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 20,
    color: 'white',
    fontSize: 24,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: 'whitesmoke',
    paddingVertical: 10
  },
  button: {
    color: 'gold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});
