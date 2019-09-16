import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const facebook = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={() => {
      Linking.openURL("https://www.facebook.com/saglikpersen");
    }}
  >
    Facebook
  </Icon.Button>
);

const twitter = (
  <Icon.Button
    name="twitter"
    backgroundColor="#38A1F3"
    onPress={() => {
      Linking.openURL("https://www.twitter.com/saglikpersen");
    }}
  >
    Twitter
  </Icon.Button>
);

const instagram = (
  <Icon.Button
    name="instagram"
    backgroundColor="#231F20"
    onPress={() => {
      Linking.openURL("https://www.instagram.com/saglikpersen");
    }}
  >
    Instagram
  </Icon.Button>
);

const whatsapp = (
  <Icon.Button
    name="whatsapp"
    backgroundColor="#26D365"
    onPress={() => {
      Linking.openURL(
        "https://api.whatsapp.com/send?phone=+905454850021&text=Üniversite%20Personelleri%20Platformu"
      );
    }}
  >
    Whatsapp
  </Icon.Button>
);

const web = (
  <Icon.Button
    name="web"
    backgroundColor="#CD5C5C"
    onPress={() => {
      Linking.openURL("https://saglikpersen.org");
    }}
  >
    Web Sitemiz
  </Icon.Button>
);

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topic}>
          Aşağıdaki adreslerden bizlere ulaşabilirsiniz.
        </Text>
        <View style={styles.buttons}>{facebook}</View>
        <View style={styles.buttons}>{twitter}</View>
        <View style={styles.buttons}>{instagram}</View>
        <View style={styles.buttons}>{whatsapp}</View>
        <View style={styles.buttons}>{web}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center"
  },
  pic: {
    width: 100,
    height: 100
  },
  topic: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    fontSize: 15
  },
  buttons: {
    paddingLeft: 15,
    paddingRight: 15,
    margin: 5,
    width: "100%"
  }
});
