import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import TouchButton from '../../components/TouchButton'

const Home = props => {

    const pressHandler = () => {
        props.navigation.navigate('Test')
    }
    const pressHandler2 = () => {
        props.navigation.navigate('NumberGame')
    }

    return (
        <View style={styles.screen}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={styles.button}>
                    <TouchButton
                        style={{ backgroundColor: '#2285d6', padding: 30 }}
                        onPress={pressHandler2}
                    >
                        <Text style={styles.textButton}>Number Game</Text>
                    </TouchButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30
    },
    textButton: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    },
    button: {
        width: '48%',
        height: 100

    }
})

export default Home