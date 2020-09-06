import React, {Component, PureComponent} from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

console.log(1)

const welcomeText = <Text>Welcome</Text>

class Welcome extends Component {
    render() {
        return (
            <Text>Welcome { this.props.name }</Text>
        );
    }
}

class Person extends Component {

    constructor(props) {
        super(props);

        // gán state bằng props
        this.state = props
    }

    onTap() {
        // set new state
        // hàm setState là hàm chạy async lên phải gọi cuối cùng để cập nhật view
        this.setState({ liked: this.state.liked + 1 })
    }

    render() {

        // check render
        console.log('render')

        // sử dụng arrow func để gọi
        // cách 1 dùng nhiều styles ( dùng dấu ... )
        return (
            <TouchableOpacity onPress={ () => {
                console.log('props', this.props)
                console.log('state', this.state)

                this.onTap()
            } }>
                <View>
                    <Text style={{...styles.textColor, ...styles.textBGColor, color: this.props.textColor, ...this.props.custom }}>Name: { this.state.name }, liked: { this.state.liked }</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

// PureComponent sẽ kiểm tra state cũ và với nếu có thay đổi thì mới render
class Person1 extends PureComponent {

    constructor(props) {
        super(props);

        // gán state bằng props
        this.state = props
    }

    onTap() {
        // set new state
        // set một giá trị mới cho state liked nhưng lần sau giá trị này không thay đổi và là pure component lên sẽ không render lại
        this.setState({ liked: 30 })
    }

    // hàm này để xác định có render lại không nếu state cũ và mới giống nhau
    shouldComponentUpdate() {
        return false
    }

    render() {

        // check render
        console.log('render')

        // không sử dụng arrow func thì phải thêm bind(this)
        // cách 2 dùng nhiều style dùng []
        return (
            <TouchableOpacity onPress={ this.onTap.bind(this) }>

                <View>
                    <Text style={[styles.textColor, styles.textBGColor]}>Name: { this.state.name }, liked: { this.state.liked }</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const Main = () => {
    // custom style với ...
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Hello</Text>
            { welcomeText }
            <Welcome name='Manh' />
            <Welcome name='Minh Nhat' />
            <Person1 name='Manh' liked={30} />
            <Person name='Ngan Bui' liked={100} textColor='back' custom={{ backgroundColor: 'green' }} />
            <Person name='Ngan Bui' liked={100} textColor='green' />
            <Person name='Ngan Bui' liked={100} textColor='blue' />
        </View>
        )
}

const styles = StyleSheet.create({
    textColor: {
        color: '#ffffff',
    },
    textBGColor: {
        backgroundColor: 'red',
    }
})

export default Main;
