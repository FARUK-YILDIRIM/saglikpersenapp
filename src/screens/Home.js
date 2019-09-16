import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.pic}
          source={require("../assets/playstore-icon.png")}
        />
        <Text>Uygulamanın amacı;</Text>
        <Text style={styles.topic}>
          Üniversite personellerinin sorunlarını, sosyal medya çalışmaları ve
          çeşitli etkinliklerle kamu oyuna duyurmaktır. Böylelikle başta tayin
          ve becayiş hakkı olmak üzere üniversite personellerinin tüm haklarının
          kazanımının sağlanması amaçlanmaktadır. Uygulamayı arkadaşlarımıza
          önererek ve aralıklı takip ederek yapılan ve yapılacak olan
          etkinlikler hakkında bilgi alabilirsiniz. Bizlere destek olmak için
          bize ulaşın bölümünden öneri ve şikayetlerinizi bize
          bildirebilirsiniz.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pic: {
    width: 100,
    height: 100,
    marginBottom: 5
  },
  topic: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15
  }
});
