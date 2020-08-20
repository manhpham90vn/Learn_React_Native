import React from 'react';
import { View, Text, StyleSheet, Platform, Slider, TextInput } from 'react-native';

const ColorPicker = () => {
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Color Picker</Text>
            </View>

            <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ width: 300, height: 300, backgroundColor: 'white', flexDirection: 'column' }}>
                    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text>R</Text>
                            <Slider style={{width: 200, marginLeft: 5, marginRight: 5}} />
                            <TextInput value="0" style={styles.textInput} />
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text>G</Text>
                            <Slider style={{width: 200, marginLeft: 5, marginRight: 5}} />
                            <TextInput value="0" style={styles.textInput} />
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text>B</Text>
                            <Slider style={{width: 200, marginLeft: 5, marginRight: 5}} />
                            <TextInput value="0" style={styles.textInput} />
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'red' }}>

                    </View>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAF6'
    },
    header: {
        height: 65,
        backgroundColor: '#D1C4E9',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#303F9F',
        shadowOffset: {
            with: 0, height: 5
        },
        shadowOpacity: 0.5, elevation: 5
    },
    headerText: {
        fontSize: 20,
        marginTop: Platform.select({
            ios: 30,
            android: 0
        }),
        ...Platform.select({
            ios: {
                color: '#E65100',
            },
            android: {
                color: '#388E3C',
            }
        })
    },
    textInput: {
        width: 50,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingBottom: Platform.select({
            ios: 0,
            android: 5
        }),
        textAlign: 'center'
    }
})

export default ColorPicker;
