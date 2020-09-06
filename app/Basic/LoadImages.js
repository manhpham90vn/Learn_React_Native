import React from 'react'
import { Text, View, Image } from 'react-native';

const LoadImages = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image resizeMode='cover' style={{width: 300, height: 300, borderWidth: 1, borderRadius: 150}} source={ require('../../img/avatar.jpeg') } />
            <Image resizeMode='cover' style={{width: 300, height: 300, borderWidth: 1, borderRadius: 150}} source={{uri: 'https://avatars0.githubusercontent.com/u/40340023?s=460&u=69c65610ce3b47ac8d4eef6be8e79ee0dbd6211b&v=4'}} />
        </View>
    )
}

export default LoadImages
