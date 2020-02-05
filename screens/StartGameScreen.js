import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import TouchButton from '../components/TouchButton'
import NumberContainer from '../components/NumberContainer'

class StartGameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '',
            selectedNumber: '',
            confirmed: false
        }

        this.numberInputHandler = this.numberInputHandler.bind(this)
        this.resetInputHandler = this.resetInputHandler.bind(this)
        this.confirmInputHandler = this.confirmInputHandler.bind(this)
    }

    numberInputHandler = inputText => {
        this.setState({
            number: inputText.replace(/[^0-9]/g, '')
        })
    }

    resetInputHandler() {
        this.setState({
            number: '',
            confirmed: false
        })
    }

    confirmInputHandler() {
        const chosenNumber = parseInt(this.state.number)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Numero Invalido!',
                'El numero tiene que estar en el rango del 1 al 99.',
                [{ text: 'Okay', style: 'destructive', onPress: this.resetInputHandler }]
            )
            return;
        }
        this.setState(state => ({
            confirmed: true,
            selectedNumber: chosenNumber,
            number: ''
        }))
        Keyboard.dismiss();
    }



    componentDidMount() {
    }

    render() {

        const { number, selectedNumber, confirmed } = this.state;

        let confirmedOutput;

        if (confirmed) {
            confirmedOutput =
                <Card style={styles.summaryContainer}>
                    <Text>Has Seleccionado</Text>
                    <NumberContainer>
                        {selectedNumber}
                    </NumberContainer>
                    <TouchButton style={{ backgroundColor: Colors.bluewy }} onPress={() => this.props.onStartGame(selectedNumber)}>
                        <Text style={styles.textButton}>Empezar Juego</Text>
                    </TouchButton>
                </Card>
        }

        return (
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <View style={styles.screen}>
                    <Text style={styles.title}>Empezar un nuevo juego</Text>
                    <Card style={styles.inputContainer}>
                        <Text>Seleccione un numero</Text>
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType="number-pad"
                            maxLength={2}
                            onChangeText={this.numberInputHandler}
                            value={number}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <TouchButton style={{ backgroundColor: Colors.accent }} onPress={this.resetInputHandler}>
                                    <Text style={styles.textButton}>Limpiar</Text>
                                </TouchButton>
                            </View>
                            <View style={styles.button}>
                                <TouchButton style={{ backgroundColor: Colors.primary }} onPress={this.confirmInputHandler}>
                                    <Text style={styles.textButton}>Confirmar</Text>
                                </TouchButton>
                            </View>
                        </View>
                    </Card>
                    {confirmedOutput}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 20
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '45%'
    },
    textButton: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;