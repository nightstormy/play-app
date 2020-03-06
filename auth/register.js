import React from 'react'
import { styles } from "../global/global";
import { Keyboard, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TextInput, withTheme, Button } from 'react-native-paper'
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

    render() {
        const { name, email, password, c_password, onGoBackLogin, onRegister, ...otherProps } = this.props
        const {
            theme: {
                colors: { background },
            },
        } = this.props;

        const { focus, register } = this.state

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
                                onChangeText={name => this.setState({ register: { name } })}
                                selectionColor="cyan"
                                theme={{ colors: { primary: "#38acff" } }}
                            />
                            <TextInput
                                style={styles2.inputContainerStyle}
                                label="Correo"
                                placeholder="ejemplo@ejemplo.com"
                                value={register.email}
                                onChangeText={email => this.setState({ register: { email } })}
                                theme={{ colors: { primary: "#38acff" } }}
                            />
                            <TextInput
                                style={styles2.inputContainerStyle}
                                label="Contraseña"
                                value={register.password}
                                onChangeText={password => this.setState({ register: { password } })}
                                theme={{ colors: { primary: "#38acff" } }}
                            />
                            <TextInput
                                style={styles2.inputContainerStyle}
                                label="Confirmar Contraseña"
                                value={register.c_password}
                                onChangeText={c_password => this.setState({ register: { c_password } })}
                                theme={{ colors: { primary: "#38acff" } }}
                            />
                            <View style={styles2.buttonContainer}>
                                <Button icon="account-arrow-right" mode="contained" style={styles2.registerButton} onPress={onRegister}>
                                    <Text>Registrar</Text>
                                </Button>
                            </View>
                            <View style={styles2.buttonContainer}>
                                <Button icon="login" mode="contained" style={styles2.button} onPress={onGoBackLogin}>
                                    <Text>Ya tengo cuenta</Text>
                                </Button>
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
    },
    helper: {
        flexShrink: 1
    }
})

export default withTheme(Register)