import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import color from "./styles/colors";
// screens
import Home from "./screens/Home";
import Events from "./screens/Events";
import Contact from "./screens/Contact";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Ana Sayfa",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={22} color={tintColor} />
        )
      }
    },
    Events: {
      screen: Events,
      navigationOptions: {
        title: "Etkinlik Takvimi",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="calendar-check-o" size={22} color={tintColor} />
        )
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        title: "Bize Ulaşın",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="envelope-o" size={22} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    lazyLoad: true,
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#ddd",
      style: {
        backgroundColor: color.primary
      }
    }
  }
);

export default createAppContainer(TabNavigator);
