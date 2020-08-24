import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native';

import CounterContainer from './containers/CounterContainer';
import AddViewContainer from './containers/AddViewContainer';
import TaskFlatListContainer from './containers/TaskFlatListContainer';
import store from './store';
import { Provider } from 'react-redux';

class DemoApp extends Component {

    render() {
        return(
            <Provider store={ store }>
                <View style={ styles.container }>
                    <AddViewContainer />
                    <CounterContainer />
                    <TaskFlatListContainer />
                </View>
            </Provider>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1F5FE'
    }
});

export default DemoApp
