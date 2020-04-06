import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import HomeScreen from '../screens/HomeScreen';
import FaqScreen from '../screens/FaqScreen';
import WorldDataScreen from '../screens/WorldDataScreen'

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Beranda',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIconsIcon name="home" size={20} style={[{ color: tintColor }]} />
        ),
      },
    },
    WorldData: {
      screen: WorldDataScreen,
      navigationOptions: {
        tabBarLabel: 'Data Dunia',
        tabBarIcon: ({ tintColor }) => (
          <FeatherIcon name="book" size={20} style={[{ color: tintColor }]} />
        ),
      },
    },
    Faq: {
      screen: FaqScreen,
      navigationOptions: {
        tabBarLabel: 'FAQ',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon name="question-circle-o" size={20} style={[{ color: tintColor }]} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "rgba(55,180,224,1)",
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
        height: 55,
        borderTopWidth: 0,
        paddingBottom: 5,
      }
    },
    tabBarIcon: {
      focused: true,
      activeTintColor: "rgba(55,180,224,1)",
    },
    initialRouteName: 'Home',
    animationEnabled: true,
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(MainNavigator)

export default AppContainer
