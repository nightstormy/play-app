import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = props => {

    const { navigation, title } = props

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.icon} onPress={openMenu} activeOpacity={0.8}>
                <MaterialIcons name='menu' size={28} style={{ color: 'white' }}/>
            </TouchableOpacity>
            <View>
                <Text style={styles.headerText}>{ title }</Text>
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
        fontWeight: 'bold'
    },
    icon: {
        position: 'absolute',
        left: 16,
        bottom: 22,
        color: 'white'
    }
})

export default Header;