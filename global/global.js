import { StyleSheet } from 'react-native'

export const Images = {
  rating: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png')
  }
}

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  registerLogoText: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 40,
    fontSize: 14,
    //borderBottomColor: '#D3D3D3',
    //borderBottomWidth: 1,
    paddingLeft: 6,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  loginFormTextInputFocused: {
    height: 40,
    fontSize: 14,
    paddingLeft: 6,
    //borderBottomColor: '#b8b8b8',
    //borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  }
})