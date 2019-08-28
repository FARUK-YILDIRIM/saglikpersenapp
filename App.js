import React from "react";
import { StyleSheet, StatusBar, PushNotificationIOS } from "react-native";
import { Body, Header, Title } from "native-base";
import color from "./src/styles/colors";
import Router from "./src/Router";

import PushNotification from "react-native-push-notification";
import firebase from "react-native-firebase";

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

const messaging = firebase.messaging();

messaging
  .hasPermission()
  .then(enabled => {
    if (enabled) {
      messaging
        .getToken()
        .then(token => {
          console.log(token);
        })
        .catch(error => {
          /* handle error */
        });
    } else {
      messaging
        .requestPermission()
        .then(() => {
          /* got permission */
        })
        .catch(error => {
          /* handle error */
        });
    }
  })
  .catch(error => {
    /* handle error */
  });

firebase.notifications().onNotification(notification => {
  const { title, body } = notification;
  PushNotification.localNotification({
    title: title,
    message: body // (required)
  });
});

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function(token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: "558553971191",

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   */
  requestPermissions: true
});

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
