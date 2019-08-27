import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.pic}
          source={{
            uri:
              "https://saglikpersen.org/wp-content/uploads/2019/07/sendikaLogo.png"
          }}
        />
        <Text style={styles.topic}>
          Sağlık Personel Sendikası (SAĞLIK-PER-SEN) 2019 yılında Erzurum’ da
          kurulmuştur. Kamu sağlık çalışanlarının hakkını korumak için kurulan
          sendikamız öncelikli olarak idari personellere (hemşire, tekniker,
          teknisyen, vs) yapılan haksızlıkları baz almış ve kurucuları da idari
          personellerden oluşmaktadır. Sendikamız hakkında detaylı bilgilere web
          sayfamızdan ulaşabilirsiniz.
        </Text>
        <Icon.Button
          onPress={() => {
            Linking.openURL("https://saglikpersen.org");
          }}
          name="web"
          backgroundColor="#ddd"
          color="#000"
        >
          <Text style={{ fontFamily: "Arial", fontSize: 15, color: "#000" }}>
            Web Sitemiz
          </Text>
        </Icon.Button>
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
    height: 100
  },
  topic: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15
  }
});
