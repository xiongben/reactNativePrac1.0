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
  const [recommendArr, setRecommendArr] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      let infoObj = await getInfo();
      setBannerData(infoObj.slides);
      setMenuArr(infoObj.category);
      setRecommendArr(infoObj.recommend);
    }
    fetchData();
  },[])

  return (
      <View style={styles.page}>
        {/*<FlatList getItemCount={} data={} getItem={}/>*/}
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
        <ShopRecommendList recommendArr={recommendArr}/>
        <TypeShopList/>
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
              <TouchableHighlight onPress={()=>_onPressButton(item)} key={index+"menu"}>
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

const ShopRecommendList = (props)=>{
  let dataArr = props.recommendArr;

  const renderItem = ({ item }) => (
      <TouchableHighlight onPress={()=>_toDetailPage(item)} >
        <View style={styles.recommendItem}>
           <Image style={styles.recommendPic} source={{uri:item.image}}/>
           <Text style={styles.recommendText1}>${item.price}</Text>
          <Text style={styles.recommendText2}>${item.mallPrice}</Text>
        </View>
      </TouchableHighlight>
  );

  function _toDetailPage(item){
    console.log(item);
  }

  return(
      <>
        <Text style={styles.recommendTitle}>商品推荐</Text>
        <View style={styles.recommendList}>
          <FlatList

              renderItem={renderItem}
              data={dataArr}
              horizontal={true}
              keyExtractor={item=>item.goodsId}>
          </FlatList>
        </View>
      </>
  )
}

const TypeShopList =()=>{
  return(
      <>
        <Text>888888</Text>
      </>
  )
}




let SettingsScreen = () => {
    const arr1 = [1,2,3,4,5,6]
    const header = ()=>(
        <View style={styles.setheader}>
          <Text>header</Text>
        </View>
    )
  const item = ({item})=>(
      <View style={styles.setItem}>
        <Text>{item}</Text>
      </View>
  )
    return (
        <View style={styles.setpage}>
           <FlatList renderItem={item} data={arr1} ListHeaderComponent={header} keyExtractor={item=>item.item}/>
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
    // backgroundColor: 'yellow',
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
  recommendList:{
    width: '100%',
    backgroundColor:'#fff',
    // height: 50,
  },
  recommendItem:{
    width: 100,
    height: 150,
  },
  recommendPic:{
    width: 80,
    height: 100,
    backgroundColor:'blue',
  },
  recommendTitle:{
    width: '95%',
    height: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    fontSize: 16,
    // backgroundColor:'yellow',
    // textAlign: 'left',
  },
  recommendText1:{
    width: 80,
    height: 20,
    textAlign: 'center',
  },
  recommendText2:{
    width: 80,
    height: 20,
    textAlign: 'center',
    textDecorationLine: 'line-through',
    color: "#000",
  },
  setpage:{
    width: '100%',
    height: '80%',
    backgroundColor:'yellow',
  },
  setheader:{
    width: '100%',
    height: 200,
    backgroundColor: 'blue',
  },
  setItem:{
    width: '100%',
    height: 150,
    backgroundColor: 'green',
    borderStyle: 'dashed',borderColor:'red',borderWidth:2,
  }
});



// export default List;
export default createAppContainer(TabNavigator);
