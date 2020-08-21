import React, {useState} from 'react';
import { View, Text, StyleSheet, Platform, Slider, TextInput } from 'react-native';

const Cell = (props) => {

    const [valueCell, setValueCell] = useState(props.value)

    return(
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text>{props.title}</Text>
            <Slider onValueChange={ (value) => {
                setValueCell(value)
                props.onChanged(value)
            }} value={ valueCell } step={1} minimumValue={0} maximumValue={255} style={{width: 200, marginLeft: 5, marginRight: 5}} />
            <TextInput value={ `${valueCell}` } style={styles.textInput} />
        </View>
    )
}

const ColorPicker = () => {

    const [r, setR] = useState(0)
    const [g, setG] = useState(0)
    const [b, setB] = useState(0)

    const renderHeader = () => {
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>Color Picker</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>

            { renderHeader }

            <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ width: 300, height: 300, backgroundColor: 'white', flexDirection: 'column' }}>
                    <View style={{ flex: 1, backgroundColor: 'yellow' }}>

                        <Cell title='R' value={r} onChanged={ (value) => {
                            setR(value)
                        }} />
                        <Cell title='G' value={b} onChanged={ (value) => {
                            setG(value)
                        }} />
                        <Cell title='B' value={b} onChanged={ (value) => {
                            setB(value)
                        }} />

                    </View>
                    <View style={{ flex: 1, backgroundColor: `rgb(${r}, ${g}, ${b})` }}>

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
