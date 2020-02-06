import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import NumberContainer from '../../components/NumberContainer'
import Card from '../../components/Card'
import TouchButton from '../../components/TouchButton'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor((max + min) / 2);

    if (rndNum === exclude) {
        return this.generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userChoice)
    );
    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver, onRestart } = props

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ) {
            Alert.alert('No Mientas!', 'Sabes que no es cierto!...', [{ text: 'Lo siento :(!', style: 'Cancelar' }])
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)

        setCurrentGuess(nextNumber)
        setRounds(curRounds => curRounds + 1)

    }

    return (
        <View style={styles.screen}>
            <Text>Numero del Oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}> ¿El numero elegido es mayor o menor? </Text>
            </View>
            <Card style={styles.buttonContainer}>
                <View style={styles.button}>
                    <TouchButton
                        style={{ backgroundColor: 'purple' }}
                        onPress={nextGuessHandler.bind(this, 'lower')}
                    >
                        <Text style={styles.textButton}>Menor -</Text>
                    </TouchButton>
                </View>
                <View style={styles.button}>
                    <TouchButton
                        style={{ backgroundColor: '#36bed6' }}
                        onPress={nextGuessHandler.bind(this, 'greater')}
                    >
                        <Text style={styles.textButton}>Mayor +</Text>
                    </TouchButton>
                </View>
            </Card>
            <Card style={{ marginTop: 10 }}>
                <View>
                    <TouchButton
                        style={{ backgroundColor: '#2285d6' }}
                        onPress={onRestart}
                    >
                        <Text style={styles.textButton}>Reiniciar Juego</Text>
                    </TouchButton>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    button: {
        width: '40%'
    },
    textButton: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;