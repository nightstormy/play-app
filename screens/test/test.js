import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import TouchButton from '../../components/TouchButton'
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card'

const Test = props => {

    const { navigation } = props;

    const pressHandler = () => {
        navigation.navigate('Home')
    }

    const pressHandler2 = () => {
        navigation.navigate('NumberGame')
    }

    const [test, setTest] = useState([
        { title: 'Century', rating: 1, body: 'lorem ipsun katsum indoloro', key: '1' },
        { title: 'Gnavi', rating: 2, body: 'lorem ipsun lelum indoloro', key: '2' },
        { title: 'Divisas', rating: 3, body: 'lorem ipsun podam indoloro', key: '3' }
    ])

    return (
        <View style={styles.screen}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={styles.button}>
                    <TouchButton
                        style={{ backgroundColor: '#2285d6', padding: 30 }}
                        onPress={pressHandler}
                    >
                        <Text style={styles.textButton}>Home</Text>
                    </TouchButton>
                </View>
                <View style={styles.button}>
                    <TouchButton
                        style={{ backgroundColor: '#2285d6', padding: 30 }}
                        onPress={pressHandler2}
                    >
                        <Text style={styles.textButton}>Number Game</Text>
                    </TouchButton>
                </View>
            </View>
            <Card>
                <View>
                    <FlatList data={test} renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Test2', item)}>
                            <Text style={{ fontSize: 18, padding: 10, fontWeight: '600' }}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    />
                </View>
            </Card>

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

export default Test