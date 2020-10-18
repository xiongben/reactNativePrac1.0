import React, {Component,useState,useEffect} from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList,
} from 'react-native';

import Swiper from 'react-native-swiper'
import { WebView } from 'react-native-webview';
import {scaleSize} from './utils/screen';





import DetailList from './detail'
import Mypage from './mypage';
import request from './api/service_method';
import servicePath from './api/service_url';


let HomeScreen = ()=>{
  const [bannerData, setBannerData] = useState([]);
  const [menuArr, setMenuArr] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      let infoObj = await getInfo();
      setBannerData(infoObj.slides);
      setMenuArr(infoObj.category);

    }
    fetchData();
  },[])

  return (
      <View style={styles.page}>
        <View style={styles.bannerArea}>
            <Swiper style={styles.wrapper}  autoplay={true} >
              {bannerData.map((item,key) => {
                return (
                    <View style={styles.slide1} key={key} index={0}>
                      <Image
                          style={styles.bannerPic}
                          source={{
                            uri: item.image,
                          }}
                      />
                    </View>
                )
              })}
            </Swiper>
        </View>
        <HeadMenu arrdata={menuArr}></HeadMenu>
        <ShopRecommendList/>
      </View>
  )
}


const HeadMenu = (props)=>{
  console.log(props.arrdata);
  let arr1 = props.arrdata;

  function _onPressButton(item) {
     console.log(item);
  }
  return (
      <View style={styles.headMenu}>
        {arr1.map((item,index)=>{
          return (
              <TouchableHighlight onPress={()=>_onPressButton(item)} key={index}>
              <View style={styles.headMenuItem}>
                <Image style={styles.menuIcon} source={{uri:item.image}}/>
                <Text style={styles.text1}>{item.mallCategoryName}</Text>
              </View>
              </TouchableHighlight>
          )
        })}
      </View>
  )
}

const ShopRecommendList = ()=>{
  let dataArr = [1,2,3,4,5,6,7,8];

  const renderItem = ({ item }) => (
      <Text>{item}</Text>
  );

  return(
      <>
        <FlatList
            renderItem={renderItem}
            data={dataArr}
            horizontal={true}
            keyExtractor={item=>item}>
        </FlatList>
      </>
  )
}




let SettingsScreen = () => {
    return (
        <View>
          <Text>this is setting page</Text>
        </View>
    );
}


async function getInfo(){
  let resArr = [];
  var formDataParams = {'lon':'115.02932','lat':'35.76189'};
   let res = await request(servicePath.homePageContent,formDataParams,"post");
   resArr = res.data
   return resArr;
}



const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
  Detail: {screen: DetailList},
  Mypage: {screen: Mypage},
});



var styles = StyleSheet.create({
  page:{
    flex: 1,
    alignItems: 'center',
  },
  bannerArea:{
    width: '100%',
    aspectRatio: 2,
    backgroundColor: '#666',
  },
  bannerPic:{
    width: '100%',
    aspectRatio: 2,
    backgroundColor: "#222",
  },
  content:{
    width: '100%',
    aspectRatio: 2,
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
  headMenu:{
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text1:{
    width: 80,
    height: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  headMenuItem:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon:{
    width:60,
    height:60,
  },
});



// export default List;
export default createAppContainer(TabNavigator);
