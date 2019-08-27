import React, { Component } from "react";
import { Text, View, StyleSheet, Share } from "react-native";
import { Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import Icon from "react-native-vector-icons/AntDesign";

import color from "../styles/colors";

LocaleConfig.locales["tr"] = {
  monthNames: [
    "Ocak",
    "Şubat",
    "Mars",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ],
  monthNamesShort: [
    "Ocak",
    "Şubat",
    "Mars",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ],
  dayNames: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ],
  dayNamesShort: ["Paz.", "Pzt.", "Sal.", "Çar.", "Per.", "Cum.", "Cts."],
  today: "Bugün"
};
LocaleConfig.defaultLocale = "tr";

const date = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const today =
  year + "-" + ("0" + month).slice(-2) + "-" + ("0" + date).slice(-2);

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        "2019-08-01": [
          {
            title: "Twitter TT Etkinliği",
            time: "14:00",
            desc:
              "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı ne olaki.",
            share: "#haşşştek"
          },
          {
            title: "Sendika Toplantısı",
            time: "14:30",
            desc:
              "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı ne olaki.",
            share: "#sendika yada ne paylaşmak istiyorsan onu yaz.."
          }
        ],
        "2019-07-31": [
          {
            title: "Basın Bülteni",
            time: "09:10",
            desc:
              "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı ne olaki.",
            share: "#sendika yada ne paylaşmak istiyorsan onu yaz.."
          }
        ]
      }
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={today}
        renderItem={this.renderItem.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        renderEmptyData={() => {
          return (
            <View style={styles.emptyDate}>
              <Text>Bugün planlanmış bir etkinlik yok.</Text>
              <Text>Etkinlik olan günler takvimde işaretlenmiştir.</Text>
            </View>
          );
        }}
        theme={{
          calendarBackground: "#ffffff",
          //textSectionTitleColor: "#b6c1cd", //pzt sal
          selectedDayBackgroundColor: color.primary,
          todayTextColor: color.primary,
          dayTextColor: color.primary,
          agendaKnobColor: color.primary,
          dotColor: color.primary,
          selectedDotColor: color.primary,
          monthTextColor: color.primary,
          indicatorColor: color.primary,
          agendaTodayColor: color.primary
        }}
      />
    );
  }

  loadItems(day) {
    const newItems = {};
    Object.keys(this.state.items).forEach(key => {
      newItems[key] = this.state.items[key];
    });
    this.setState({
      items: newItems
    });

    //console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.desc}>{item.desc}</Text>

        <View style={styles.share}>
          <Icon.Button
            onPress={this.onShare.bind(this, item.share)}
            name="sharealt"
            backgroundColor="#ddd"
            color="#000"
          >
            <Text style={{ fontFamily: "Arial", fontSize: 15, color: "#000" }}>
              Etkinliği Paylaş
            </Text>
          </Icon.Button>
        </View>
      </View>
    );
  }

  onShare = async data => {
    try {
      const result = await Share.share({
        message: "React Native | " + data
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  /*timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }*/
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  title: {
    fontSize: 18
  },
  time: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    color: "#263238"
  },
  desc: {
    fontSize: 15
  },
  share: {
    marginTop: 10
  }
});
