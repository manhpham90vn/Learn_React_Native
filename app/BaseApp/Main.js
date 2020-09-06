import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Main = () => {
    return (
        <View style={styles.root}>
            <Text>
                Hello
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Main;
