import React from 'react'
import { styles } from "../global/global";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet } from 'react-native';
import TouchButton from '../components/TouchButton'
import Colors from '../constants/colors'

const Login = props => {

  const { onLogin, email, password, onChangeEmail, onChangePassword } = props

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>m2-project</Text>
            <TextInput value={email} onChangeText={(value) => onChangeEmail(value)} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput value={password} onChangeText={(value) => onChangePassword(value)} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
            <View style={styles2.buttonContainer}>
              <TouchButton style={styles2.button} onPress={onLogin}>
                <Text style={styles2.textButton}>Login</Text>
              </TouchButton>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles2 = StyleSheet.create({
  buttonContainer: {
    marginTop: 10
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  button: {
    backgroundColor: Colors.skyblue,
    width: '95%',
    alignSelf: 'center'
  }
})

export default Login