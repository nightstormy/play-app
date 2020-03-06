import React, { useState } from 'react'
import { styles } from "../global/global";
import { SafeAreaView, Modal, Keyboard, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, Alert, ToastAndroid } from 'react-native';
import { AsyncStorage } from 'react-native'
import TouchButton from '../components/TouchButton'
import Colors from '../constants/colors'
import { TextInput, withTheme, Button } from 'react-native-paper'

const Login = props => {

  const { onLogin, email, password, onChangeEmail, onChangePassword, onRegister } = props

  const [prueba2, setPrueba2] = useState()

  const shouldSetResponse = () => true;
  const onRelease = () => (
    Keyboard.dismiss()
  );

  const prueba = async () => {
    fetch("http://192.168.206.12/backend_project/public/v1/prueba")
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
    .catch(error => console.log(error)) //to catch the errors if any  
  }

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <SafeAreaView>
        <View
          onResponderRelease={onRelease}
          onStartShouldSetResponder={shouldSetResponse}
          style={{ height: '100%' }}>
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
                <Text style={styles.logoText}>m2-project</Text>
                <TextInput
                  style={styles2.inputContainerStyle}
                  label="Correo"
                  placeholder="ejemplo@ejemplo.com"
                  placeholderColor="#c4c3cb"
                  value={email}
                  onChangeText={(value) => onChangeEmail(value)}
                  theme={{ colors: { primary: "#38acff" } }}
                />
                <TextInput
                  style={styles2.inputContainerStyle}
                  label="Contraseña"
                  placeholderColor="#c4c3cb"
                  value={password}
                  onChangeText={(value) => onChangePassword(value)}
                  theme={{ colors: { primary: "#38acff" } }}
                  secureTextEntry={true}
                />
                <View style={styles2.buttonContainer}>
                  <Button icon="login" mode="contained" style={styles2.button} onPress={onLogin}>
                    <Text>Login</Text>
                  </Button>
                </View>
                <View style={styles2.buttonContainer}>
                  <Button icon="account-plus" mode="contained" style={styles2.registerButton} onPress={onRegister}>
                    <Text>Registrarse</Text>
                  </Button>
                </View>
                <View style={styles2.buttonContainer}>
                  <Button icon="account-plus" mode="contained" style={styles2.registerButton} onPress={prueba}>
                    <Text>prueba</Text>
                  </Button>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </Modal>


  )
}

const styles2 = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  button: {
    backgroundColor: Colors.accent,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20
  },
  registerButton: {
    backgroundColor: Colors.skyblue,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20
  },
  inputContainerStyle: {
    margin: 8,
    backgroundColor: 'white'
  }
})

export default withTheme(Login)