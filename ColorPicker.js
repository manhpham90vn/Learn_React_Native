import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const ColorPicker = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Color Picker</Text>
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
})

export default ColorPicker;
