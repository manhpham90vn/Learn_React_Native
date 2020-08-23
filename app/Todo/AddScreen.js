import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Platform, TextInput, Alert} from 'react-native';

const RenderHeader = (props) => {

    const onBack = () => {
        props.onBack()
    }

    const onSave = () => {
        props.onSave()
    }

    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={ onBack }>
                <Text style={styles.headerText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.title}</Text>
            <TouchableOpacity onPress={ onSave }>
                <Text style={styles.headerText}>{props.rightBtn}</Text>
            </TouchableOpacity>
        </View>
    )
}

const AddScreen = ({navigation, route}) => {

    const [value, setValue] = useState('')

    const onSave = () => {
        if (value.length === 0) {
            Alert.alert('Error', 'Task name can not empty')
            return
        }
        navigation.navigate('HomeScreen', { txt: value })
    }

    return (
        <View style={styles.container}>
            <RenderHeader title='Add Screen' rightBtn='Save' onBack={() => {
                navigation.goBack()
            }} onSave={() => {
                onSave()
            }} />
            <TextInput autoFocus={true} style={styles.textInput} onChangeText={(txtValue)=> {
                setValue(txtValue)
            }} value={value} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAF6'
    },
    header: {
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        shadowColor: '#303F9F',
        shadowOffset: {
            with: 0, height: 5
        },
        shadowOpacity: 0.5, elevation: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    headerText: {
        fontSize: 20,
        marginTop: Platform.select({
            ios: 40,
            android: 0
        }),
        ...Platform.select({
            ios: {
                color: 'black',
            },
            android: {
                color: 'black',
            }
        })
    },
    textInput: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        paddingLeft: 5,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    }
})

export default AddScreen
