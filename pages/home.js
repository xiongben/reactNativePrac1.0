import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import actions from "./../actions/index";


class Home extends Component {
  static navigationOptions = {
    title: 'Home33',
  };

  componentDidMount(){
    console.log("66666666666");
  }

  addcount(){
     console.log("add====")
  }

  render() {
    var testnum = this.props.testnum;
  var text = this.props.text;
  var {increment,incrementMax,decrement,incrementAsync,testobA} = this.props;
  console.log(testnum,text);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <Header /> */}
            <View style={{ width: 100, backgroundColor: 'blue' }}>
              <Text>this is home page,ok=={testnum}</Text>
              <Button
                title="Go to list"
                onPress={() => this.props.navigation.navigate('List', { id: 100, name: "xiao ming" })}
              />
              <Button
                title="add count"
                onPress={() => increment() }
              />
            </View>
            <View style={styles.test}>
              <Text>tttt</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One this is test</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                  </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  test: {
    flex: 1,
    height: 50,
    backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

function mapStateToProps(state) {
  // console.log(state);
  const { testnum, text } = state;
  return {
    testnum, text
  };
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;