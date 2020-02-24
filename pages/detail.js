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
    Image,
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
        this.getDataList();
    }

    getDataList() {
        fetch('https://www.loopslive.com/api/broadcast/tab/1/live/list').then((response) => response.json())
            .then((responseJson) => {
                let res = responseJson["sessions"];
                console.log("注意,,请求了一次列表接口")
                this.setState({
                    listArr: this.state.listArr.concat(res)
                });
            });
    }

    _onEndReached() {
        console.log("========arrive end=======");
        this.getDataList();
    }

    _onRefresh() {
        console.log("========refresh========")
        
    }

    render() {
        const { navigation } = this.props;
        const rendItem = data => {
            let pic = {
                uri: data.user.profile_url
            };
            return (
              <View style={styles.itemview}>
                <Image source={pic} style={styles.avatar} />
                <View style={styles.textArea}>
                   <Text style={styles.text1}>this is name</Text>
                   <Text style={styles.text2}>this is djhsajasj afasgf jsadgfjs sjfga sjgf fewr ewfwe wefweg</Text>
                </View>
             </View>
            )
        };

        const rendEmpty = ()=> {
            return (
                <View><Text>There is no data!</Text></View>
            )
        }

        const rendFooter = () => {
            return (
                <View><Text>======Footer======</Text></View>
            )
        }
        
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <FlatList
                        data={this.state.listArr}
                        renderItem={({ item }) => rendItem(item)}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent= {()=> rendEmpty()}
                        onEndReachedThreshold = {1}
                        onEndReached={()=>this._onEndReached()}
                        ListFooterComponent={()=>rendFooter()}
                        onRefresh={()=>this._onRefresh()}
                        refreshing={false}
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
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'yellow',
        height: 100,
        // height: 20,
        borderStyle: 'dashed',borderColor:'red',borderWidth:1,
        // borderBottomColor: Colors.red,
    },
    avatar: {
       width: 80,
       height: 80,
       borderRadius: 40,
       margin: 15,
    },
    textArea: {
       flex: 1,
       backgroundColor: 'pink',
    },
    title1: {
        backgroundColor: 'blue',
        height: 50,
    },
    text1: {
        textAlign: 'left',
        lineHeight: 40,
        fontSize: 20,
        
    },
    text2: {
       lineHeight: 22,
       fontSize: 14,
    },
});

export default DetailList;