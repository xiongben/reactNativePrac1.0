import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    TextInput,
    Button,
    Alert,
    TouchableNativeFeedback,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';


export default class ImageTest extends Component {

    state = {
        isShow: true,
        text: '',
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isShow: !this.state.isShow,

            })
        }, 2000);
    }

    inputtest(text) {
        this.setState({ text: text });
    }

    render() {
        let pic = {
            uri: 'https://www.loopslive.com/static/img/banner-2@2x.675c5b0.jpg'
        };
        let textview = this.state.isShow ? <Text>hello!{this.props.name}</Text> : null;
        return (
            <View style={styles.box}>
                <Image source={pic} style={{ width: 200, height: 100 }} />
                <Text>{this.state.text}</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="this is input"
                    onChangeText={(text) => this.inputtest(text)}
                    value={this.state.text}
                />
                <TouchableHighlight
                    onPress={() => {
                        // Alert.alert("你点击了按钮！");
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'yellow',
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
});