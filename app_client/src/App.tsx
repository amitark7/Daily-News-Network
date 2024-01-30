import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './component/Header';
import News from './component/News';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash';
import Home from './screens/Home';
import NewsProvider from './contextNews/newsContext';

export type StackProp = {
  HomeTab: undefined;
  Splash: undefined;
};
const Stack = createNativeStackNavigator<StackProp>();
const Tab = createMaterialTopTabNavigator();
// export const HomeTabs = () => {
//   return (
//     <>
//       <Header />
//       <Tab.Navigator
//         screenOptions={{
//           tabBarAndroidRipple: {borderless: false},
          
//         }}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Sports" component={Sports} />
//         <Tab.Screen name="Science" component={Science} />
//         {/* <Tab.Screen name="Technology" component={Technology} /> */}
//         <Tab.Screen name="Health" component={Health} />
//         {/* <Tab.Screen name="Entertainment" component={Entertainment} />
//         <Tab.Screen name="Business" component={Business} /> */}
//       </Tab.Navigator>
//     </>
//   );
// };
const App = () => {
  return (
    <NewsProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="HomeTab" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </NewsProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
