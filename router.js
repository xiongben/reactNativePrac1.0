import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/home';
import List from './pages/list';
import Mypage from './pages/mypage';
 
// const  RouteApp = StackNavigator({
//     Home: { screen: Home },
//   });
// const Stack = createStackNavigator();

// function RouteApp() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const RouteApp = createStackNavigator({
    Home: {
      screen: Home,
    },
    List: {
      screen: List,
    },
    Mypage: {
      screen: Mypage,
    },
  });
  
export default createAppContainer(RouteApp);
  
