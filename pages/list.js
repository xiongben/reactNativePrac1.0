import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



class List extends Component{

  static navigationOptions = {
      title: 'newList Page',
  }
  componentDidMount(){
     console.log("正在加载list组件");
  }

  render(){
    const { navigation } = this.props;
    console.log(navigation);
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              {/* <Header /> */}
              <View style={{width: 100, height: 50, backgroundColor: 'blue'}}>
                <Text>this is list page</Text>
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
  
  
});

export default List;