import React, { useState } from 'react';
import { StyleSheet, Alert, ToastAndroid } from 'react-native';
import Navigator from './routes/Drawer'
import Login from './auth/login'

const App = props => {

  const [login, setLogin] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onLoginPress = async () => {
    await fetch('https://carnet.gonavi.com.ve/api/comunidad/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "email": email, "password": password })
    }).then((res) => res.json())
      .then((resData) => {
        ToastAndroid.showWithGravity(
          resData.message,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
      );
      }).catch((error) => {
        console.error(error)
      })
  }

  let content = <Login onLogin={onLoginPress} onChangeEmail={setEmail} onChangePassword={setPassword} email={email} password={password} />

  if (login === true) {
    content = <Navigator />
  }

  return (
    content
  )
}

export default App