import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Platform, FlatList} from 'react-native';

const RenderHeader = (props) => {
    return(
        <View style={styles.header}>
            <Text style={{...styles.headerText, opacity: 0}}>Text</Text>
            <Text style={styles.headerText}>{props.title}</Text>
            <TouchableOpacity onPress={ () => {
                props.onPress()
            } }>
                <Text style={styles.headerText}>{props.rightBtn}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Item = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const HomeScreen = ({navigation, route}) => {

    const [data, setData] = useState([
        {
            id: 1,
            title: 'First Item',
        },
        {
            id: 2,
            title: 'Second Item',
        },
        {
            id: 3,
            title: 'Third Item',
        },
    ])

    useEffect(() => {
        if (route.params?.txt) {
            let newData = [...data, {
                id: Math.floor(Math.random() * 100) + 1,
                title: route.params?.txt
            }]
            setData(newData)
        }
    }, [route.params?.txt])

    const renderItem = ({ item }) => (
        <Item title={item.title} onPress={() => {
            const arrays = data.filter(value => value.id !== item.id)
            setData(arrays)
        }} />
    );

    return (
        <View style={styles.container}>
            <RenderHeader title='Home' rightBtn='Add' onPress={() => {
                navigation.navigate('AddScreen')
            }} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    }
})

export default HomeScreen
