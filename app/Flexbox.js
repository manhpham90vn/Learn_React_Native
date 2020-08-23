import React from 'react'
import {View, Text} from 'react-native'

const Flexbox = () => {
    return(
        <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
            <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
            <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
        </View>
    )
}

export default Flexbox;
