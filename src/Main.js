import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './drawer/drawer-content';
import HomeScreen from './screens/HomeScreen';
import DeckScreen from './screens/DeckScreen.js';
import AddCardScreen from './screens/AddCardScreen.js';
import AddDeckScreen from './screens/AddDeckScreen.js';
import ResultScreen from './screens/ResultScreen.js';
import SplashScreen from 'react-native-splash-screen';

export default () => {
  const Drawer = createDrawerNavigator();
  // setTimeout(() => {
  // }, 100);

  SplashScreen.hide();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      // detachInactiveScreens={false}
      initialRouteName="Decks">
      <Drawer.Screen name="Decks" component={HomeScreen} />
      <Drawer.Screen name="Cards" component={DeckScreen} />
      <Drawer.Screen name="Add Card" component={AddCardScreen} />
      <Drawer.Screen name="Add Deck" component={AddDeckScreen} />
      <Drawer.Screen name="Result" component={ResultScreen} />
    </Drawer.Navigator>
  );
};
