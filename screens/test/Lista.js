import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card'
import { MaterialIcons } from '@expo/vector-icons';


const Lista = props => {

    const { navigation } = props;

    const [modalOpen, setModalOpen] = useState(false);

    const [Lista, setLista] = useState([
        { title: 'Century', rating: 5, body: 'lorem ipsun katsum indoloro', key: '1' },
        { title: 'Gnavi', rating: 3, body: 'lorem ipsun lelum indoloro', key: '2' },
        { title: 'Divisas', rating: 1, body: 'lorem ipsun podam indoloro', key: '3' },
        { title: 'GTI', rating: 4, body: 'lorem ipsun podam indoloro', key: '4' },
        { title: 'Aeropuerto', rating: 2, body: 'lorem ipsun podam indoloro', key: '5' }
    ])

    return (
        <View style={styles.screen}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                    />
                    <Text>Hello from the modal</Text>
                </View>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />
            <Card>
                <View>
                    <FlatList data={Lista} renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ListaDetalle', item)}>
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

    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'

    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
        alignSelf: 'flex-end'
    },
    modalContent: {
        flex: 1,
        
    }
})

export default Lista