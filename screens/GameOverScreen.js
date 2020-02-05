import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import TouchButton from '../components/TouchButton'
import Colors from '../constants/colors'

const GameOverScreen = props => {

    const { roundsNumber, userNumber, onRestart } = props

    return (
        <View style={styles.screen}>
            <Text style={styles.overTitle}>Juego Terminado!</Text>
            <Text style={styles.resumenTitle}>Resumen</Text>
            <Text>Numero de Rondas: {roundsNumber}</Text>
            <Text>El numero adivinado fue: {userNumber}</Text>
            <View style={styles.buttonContainer}>
                <TouchButton style={{ backgroundColor: Colors.skyblue }} onPress={onRestart}>
                    <Text style={styles.textButton}>Volver a Empezar</Text>
                </TouchButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '40%'
    },
    buttonContainer: {
        marginTop: 10
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    overTitle: {
        fontSize: 24,
        color: '#a30000',
        fontWeight: 'bold',
        marginBottom: 20
    },
    resumenTitle: {
        fontWeight: 'bold',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 10,
        width: 100,
        fontSize: 16,
        textAlign: 'center'
    }
});

export default GameOverScreen;