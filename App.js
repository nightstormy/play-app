import React, { useState } from "react";
import { StyleSheet, Alert, ToastAndroid } from "react-native";
import Navigator from "./routes/Drawer";
import Login from "./auth/login";
import Register from "./auth/register";

const App = props => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [c_password, setC_password] = useState();

  const onRegisterPress = async () => {
    await fetch("http://prueba.local/api/v1/register", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        'name': name,        
        'email': email,        
        'password': password,        
        'c_password': c_password        
     })
    })
      .then(response => response.text())
      .then(responseText => {
        alert(responseText);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onGoBackLogin = () => {
    setRegister(false);
  };

  const onGoRegisterPage = () => {
    setRegister(true);
  };

  const onLoginPress = async () => {
    await fetch("https://carnet.gonavi.com.ve/api/comunidad/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(res => res.json())
      .then(resData => {
        ToastAndroid.showWithGravity(
          resData.message,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  let content = (
    <Login
      onRegister={onGoRegisterPage}
      onLogin={onLoginPress}
      onChangeEmail={setEmail}
      onChangePassword={setPassword}
      email={email}
      password={password}
    />
  );

  if (register === true) {
    content = (
      <Register
        name={name}
        email={email}
        password={password}
        c_password={c_password}
        onGoBackLogin={onGoBackLogin}
        onRegister={onRegisterPress}
      />
    );
    if (login === true) {
      content = <Navigator />;
    }
  }

  return content;
};

export default App;
