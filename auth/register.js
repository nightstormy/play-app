import React from 'react'
import { styles } from "../global/global";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet } from 'react-native';
import TouchButton from '../components/TouchButton'
import Colors from '../constants/colors'

const Blue = "#428AF8";
const Light_Gray = "#D3D3D3";

class Register extends React.Component {
    state = {
        focus: false,
        target: ''
    }

    onFocus = event => {
        if (event.target) {
            this.setState({
                focus: true,
                target: event.target
            })
            this.onFocus(event.target)
        }
    }

    onBlur = event => {
        if (this.state.target) {
            this.onBlur(this.state.target)
            this.setState({
                focus: false,
                target: ''
            })
        }
    }

    render() {
        const { name, email, password, c_password, onGoBackLogin, ...otherProps } = this.props
        const { focus } = this.state

        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.registerLogoText}>Nuevo Registro</Text>
                            <TextInput
                                placeholder="Nombre"
                                underlineColorAndroid={
                                    focus ? Blue : Light_Gray
                                }
                                onFocus={(event) => this.onFocus(event)}
                                onBlur={(event) => this.onBlur(event)}
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                                {...otherProps}
                            />
                            <TextInput
                                placeholder="Correo"
                                underlineColorAndroid={
                                    focus ? Blue : Light_Gray
                                }
                                onFocus={(event) => this.onFocus(event)}
                                onBlur={(event) => this.onBlur(event)}
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                                {...otherProps}
                            />
                            <TextInput
                                placeholder="Contraseña"
                                underlineColorAndroid={
                                    focus ? Blue : Light_Gray
                                }
                                onFocus={(event) => this.onFocus(event)}
                                onBlur={(event) => this.onBlur(event)}
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                                {...otherProps}
                                secureTextEntry={true}
                            />
                            <TextInput
                                placeholder="Confirmar Contraseña"
                                underlineColorAndroid={
                                    focus ? Blue : Light_Gray
                                }
                                onFocus={(event) => this.onFocus(event)}
                                onBlur={(event) => this.onBlur(event)}
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                                {...otherProps}
                                secureTextEntry={true}
                            />
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