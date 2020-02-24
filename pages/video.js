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

  import Video from 'react-native-video';

  class VideoTest extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Video
            ref={p=>{this.videoPlayer = p;}}
            style={styles.fullScreen}
            controls={true}
            source={{uri:'https://cdn.moji.com/websrc/video/winter20191211.mp4'}}
            repeat={true}
            resizeMode={'cover'}
          />
        </View>
      );
    }
  }

  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
  });

  export default VideoTest;