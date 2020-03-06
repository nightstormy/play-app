import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = props => {

    const { navigation, title } = props

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../assets/dark_bg.png')} style={styles.header}>
            <TouchableOpacity style={styles.icon} onPress={openMenu} activeOpacity={0.6}>
                <MaterialIcons name='menu' size={28} style={{ color: 'white' }}/>
            </TouchableOpacity>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/logo_gris.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
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
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: 'row'
    }
    
})

export default Header;