import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    View,
    Text,
    StatusBar,
    TextInput,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

class DetailList extends Component {

    static navigationOptions = {
        title: 'newList Page',
    }

    constructor(props) {
        super(props);
        this.state = {
          listArr: [],
        };
      }

    componentDidMount() {
        fetch('https://www.loopslive.com/api/broadcast/tab/1/live/list').then((response) => response.json())
            .then((responseJson) => {
                console.log("=============")
                console.log(typeof (responseJson))
                let res = responseJson["sessions"];
                this.setState({
                    listArr: res
                });
            });
    }

    render() {
        const { navigation } = this.props;
        const rendItem = data => {
            return (
              <View style={styles.itemview}>
                <Text style={styles.text1}>{data.user.name}</Text>
             </View>
            )
        };
        console.log(navigation);
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <FlatList
                        data={this.state.listArr}
                        renderItem={({ item }) => rendItem(item)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </SafeAreaView>
            </>
        );
    }

};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    itemview: {
        flex: 1,
        height: 50,
        // height: 20,
        borderStyle: 'dashed',borderColor:'red',borderWidth:1,
        // borderBottomColor: Colors.red,
    },
    text1: {
        textAlign: 'left',
    }
});

export default DetailList;