import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Body, Header, Title } from "native-base";
import color from "./src/styles/colors";
import Router from "./src/Router";

const App = () => {
  return (
    <React.Fragment>
      <StatusBar hidden />
      <Header style={styles.header}>
        <Body>
          <Title style={styles.title}>Sağlık Personel Sendikası</Title>
        </Body>
      </Header>
      <Router />
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: color.primary
  },
  title: {
    fontStyle: "normal",
    color: "#fff"
  }
});

export default App;
