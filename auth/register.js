import React from 'react'
import { styles } from "../global/global";
import { Keyboard, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TextInput, withTheme, HelperText } from 'react-native-paper'
import TouchButton from '../components/TouchButton'
import Colors from '../constants/colors'

class Register extends React.Component {
    constructor(props) {
        const MAX_LENGTH = 20;

        super(props)
        this.state = {
            focus: false,
            target: '',
            register: {
                name: '',
                email: '',
                password: '',
                c_password: ''
            }
        }
    }

    _isUsernameValid = (name) => /^[a-zA-Z]*$/.test(name);
    _isEmailValid = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    

    render() {
        const { name, email, password, c_password, onGoBackLogin, ...otherProps } = this.props
        const { focus, register } = this.state

        console.log(!this._isEmailValid(this.state.register.email))

        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding" keyboardVerticalOffset={80}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.registerLogoText}>Nuevo Registro</Text>
                            <TextInput
                                style={styles2.inputContainerStyle}
                                label="Nombre"
                                placeholder="ej. Luis Salazar"
                                value={register.name}
                                error={!this._isUsernameValid(this.state.register.name)}
                                onChangeText={name => this.setState({ register: { name } })}
                            />
                            <HelperText
                                style={styles2.helper}
                                type="error"
                                visible={!this._isUsernameValid(this.state.register.name)}
                            >
                                Error: Only letters are allowed
                            </HelperText>
                            <TextInput
                                style={styles2.inputContainerStyle}
                                label="Correo"
                                placeholder="ejemplo@ejemplo.com"
                                error={this._isEmailValid(this.state.register.email)}
                                value={register.email}
                                onChangeText={email => this.setState({ register: { email } })}
                            />
                            <HelperText
                                style={styles2.helper}
                                type="error"
                                visible={this._isEmailValid(this.state.register.email)}
                            >
                                Error: Invalid Email
                            </HelperText>
                            <TextInput
                                style={styles2.inputContainerStyle}
                                label="Contraseña"
                                value={register.password}
                                onChangeText={password => this.setState({ register: { password } })}
                            />
                            <TextInput
                                style={styles2.inputContainerStyle}
                                label="Confirmar Contraseña"
                                value={register.c_password}
                                onChangeText={c_password => this.setState({ register: { c_password } })}
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
    },
    inputContainerStyle: {
        margin: 8,
        backgroundColor: 'white'
    },
    helper: {
        flexShrink: 1
    }
})

export default withTheme(Register)