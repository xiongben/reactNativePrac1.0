import React,{useState,useEffect,useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
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

import ColorButtons from './components/buttom';
import {Color,ColorContext} from './components/color';


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

const Mypage = () => {
  const [name,setName] = useState("卡卡西");

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.infoItem}>
            <Text>{name}</Text>
          </View>
          <ThemeContext.Provider value={themes.dark}>
             <ThemeButtom/>
          </ThemeContext.Provider>
          <Color>
            <ShowColor/>
            <ColorButtons/>
          </Color>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const ShowColor =(props)=>{
  let colordata = useContext(ColorContext);
  return (
      <Text>color: {colordata.color}</Text>
  )
}

const ThemeButtom = ()=>{
  const theme = useContext(ThemeContext)
  return(
     <View >
       <Text style={{backgroundColor:theme.background,color:theme.foreground}}>this is ,,,</Text>
     </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  infoItem:{
    width: '100%',
    height: 50,
    backgroundColor: 'yellow',
    borderStyle: 'dashed',borderColor:'red',borderWidth:1,
  },


});

export default Mypage;
