import React, { useState } from 'react'
import { styles } from "../global/global";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet } from 'react-native';
import TouchButton from '../components/TouchButton'
import Colors from '../constants/colors'

const Register = props => {

    const { name, email, password, c_password, onGoBackLogin } = props

    const [focus, setFocus] = useState(false)

    const onFocus = () => {
        setFocus(true)
    }

    const onBlur = value => {
        setFocus(false)
    }

    return (

        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.registerLogoText}>Nuevo Registro</Text>
                        <TextInput onFocus={() => onFocus()} onBlur={() => onBlur()} placeholder="Nombre" placeholderColor="#c4c3cb" style={focus ? styles.loginFormTextInputFocused : styles.loginFormTextInput} />
                        <TextInput onFocus={() => onFocus()} onBlur={() => onBlur()} placeholder="Correo" placeholderColor="#c4c3cb" style={focus ? styles.loginFormTextInputFocused : styles.loginFormTextInput} />
                        <TextInput onFocus={() => onFocus()} onBlur={() => onBlur()} placeholder="Contraseña" placeholderColor="#c4c3cb" style={focus ? styles.loginFormTextInputFocused : styles.loginFormTextInput} />
                        <TextInput onFocus={() => onFocus()} onBlur={() => onBlur()} placeholder="Confirmar Contraseña" placeholderColor="#c4c3cb" style={focus ? styles.loginFormTextInputFocused : styles.loginFormTextInput} secureTextEntry={true} />
                        <View style={styles2.buttonContainer}>
                            <TouchButton style={styles2.registerButton}>
                                <Text style={styles2.textButton}>Registrar</Text>
                            </TouchButton>
                        </View>
                        <View style={styles2.buttonContainer}>
                            <TouchButton style={styles2.button} onPress={onGoBackLogin}>
                                <Text style={styles2.textButton}>Ya tengo cuenta</Text>
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
        alignSelf: 'center'
    },
    registerButton: {
        backgroundColor: Colors.skyblue,
        width: '95%',
        alignSelf: 'center'
    }
})

export default Register