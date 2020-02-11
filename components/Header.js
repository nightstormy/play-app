import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = props => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>m2-project</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 25,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        letterSpacing: 1
    }
})

export default Header;