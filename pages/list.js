import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import Swiper from 'react-native-swiper'
import { WebView } from 'react-native-webview';
import {scaleSize} from './utils/screen';



import DetailList from './detail'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.bannerArea}>
          <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>

        <View style={styles.content}></View>

      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
  Detail: {screen: DetailList},
});



var styles = StyleSheet.create({
  page:{
    flex: 1,
    alignItems: 'center',
  },
  bannerArea:{
    width: scaleSize(375),
    height: scaleSize(200),
    backgroundColor: '#666',
  },
  content:{
    width: scaleSize(187),
    height: scaleSize(187),
    backgroundColor: '#000',
  },
  wrapper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});



// export default List;
export default createAppContainer(TabNavigator);