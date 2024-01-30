import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
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
