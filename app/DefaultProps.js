import React, {Component} from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

class Person extends Component {
    render() {
        return (
            <View>
                <Text>Name: {this.props.name}, age: {this.props.age}</Text>
            </View>
        )
    }
}

// default props
Person.defaultProps = {
    name: 'Manh',
    age: 30
}

// type for props
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default class DefaultProps extends Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', paddingLeft: 20}}>
                <Text>Hello</Text>
                <Person name='Manh' age={100}/>
            </View>
        )
    }

}
