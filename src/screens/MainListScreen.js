import React, { useState } from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";
import { useEffect } from "react";
import { Text } from "react-native-paper";
import theme from "../theme/theme";
import * as Material from "react-native-vector-icons/MaterialCommunityIcons";
import { useSchopListsStore } from "../mobx/context/schopListsContext";
import RNBootSplash from "react-native-bootsplash";
import Topbar, { TopBar } from "../components/TopBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import moment from "moment";
import ZtpLogo from "../components/ZtpLogo";
import QrCode from "../assets/qrCode.png";
const Icon = Material.default;

export const MainListScreen = ({ navigation }) => {
  const { setListData } = useSchopListsStore();
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const Tab = createMaterialTopTabNavigator();

  const [expDate, setExpDate] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [transNumber, setTransNumber] = useState("");
  const [secondTransNumber, setSecondTransNumber] = useState("");
  const [shortTransNumber, setShortTransNumber] = useState("");

  useEffect(() => {
    setExpDate(moment().add(10, "minutes").format("DD.MM.YYYY HH:mm"));
    setDate(moment().subtract(10, "minutes").format("DD.MM.YYYY HH:mm"));
    //Setting ticket number
    setTicketNumber("KRK 2687" + Math.floor(Math.random() * 90000));
    //Setting trans number
    setTransNumber("2030002012115" + Math.floor(Math.random() * 99999));
    setShortTransNumber(Math.floor(Math.random() * 9999999));
    setSecondTransNumber(Math.floor(Math.random() * 9999999999));
    setLoading(false);
  }, []);

  const FirstPage = () => (
    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <View
        style={{
          backgroundColor: theme.secondaryColor,
          paddingHorizontal: 16,
          paddingVertical: 18,
        }}
      >
        <Text
          style={{
            color: theme.white,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Komunikacja Miejska w Krakowie
        </Text>
        <Text style={{ color: theme.white, fontSize: 16, marginTop: 70 }}>
          Bilet:
        </Text>
        <Text
          style={{
            color: theme.white,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          20min. NI I+II+III Aglomeracja
        </Text>
        <Text style={{ color: theme.white, fontSize: 16 }}>Ważny do:</Text>
        <Text
          style={{
            color: theme.white,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {expDate}
        </Text>
        <Text style={{ color: theme.white, fontSize: 16 }}>Numer biletu:</Text>
        <Text
          style={{
            color: theme.white,
            fontSize: 20,
          }}
        >
          {ticketNumber}
        </Text>
        <Text style={{ color: theme.white, fontSize: 16 }}>
          Numer transakcji
        </Text>
        <Text
          style={{
            color: theme.white,
            fontSize: 20,
          }}
        >
          {transNumber}
        </Text>
        <View
          style={{ alignItems: "center", paddingBottom: 40, paddingTop: 14 }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: theme.white,
              width: 113,
              alignItems: "center",
              justifyContent: "center",
              height: 37,
            }}
          >
            <Text
              style={{
                color: theme.white,
                fontSize: 20,
              }}
            >
              {shortTransNumber}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  const SecondPage = () => (
    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <View
        style={{
          backgroundColor: theme.secondaryColor,
          paddingHorizontal: 16,
          paddingVertical: 18,
        }}
      >
        <Text
          style={{
            color: theme.white,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Komunikacja Miejska w Krakowie
        </Text>
        <Text style={{ color: theme.white, fontSize: 16, marginTop: 70 }}>
          Cena:
        </Text>
        <Text
          style={{
            color: theme.white,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          2,00 PLN
        </Text>
        <Text style={{ color: theme.white, fontSize: 16 }}>Numer biezący:</Text>
        <Text
          style={{
            color: theme.white,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {secondTransNumber}
        </Text>
        <View
          style={{ alignItems: "center", paddingBottom: 40, paddingTop: 14 }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: theme.white,
              width: 200,
              alignItems: "center",
              justifyContent: "center",
              height: 37,
            }}
          >
            <Text
              style={{
                color: theme.white,
                fontSize: 20,
              }}
            >
              {date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  const ThirdPage = () => (
    <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <View
        style={{
          backgroundColor: theme.secondaryColor,
          paddingHorizontal: 16,
          paddingVertical: 18,
        }}
      >
        <Text
          style={{
            color: theme.white,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Komunikacja Miejska w Krakowie
        </Text>
        <View style={{ alignItems: "center", marginTop: 18, marginBottom: 40 }}>
          <Image style={styles.imageStyle} source={QrCode} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.primaryColor} barStyle="default" />

      <TopBar {...navigation} />
      <ZtpLogo />

      {!loading ? (
        <Tab.Navigator
          style={{ marginTop: -48 }}
          timingConfig={{ duration: 0 }}
        >
          <Tab.Screen name={"FirstPage"} component={FirstPage} />
          <Tab.Screen name={"SecondPage"} component={SecondPage} />
          <Tab.Screen name={"ThirdPage"} component={ThirdPage} />
        </Tab.Navigator>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    height: 72,
    margin: 0,
    padding: 0,
    justifyContent: "center",
  },
  contentContainer: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: theme.primaryDark,
  },
  itemTitle: {
    fontSize: 16,
    marginLeft: 16,
    // fontFamily: fontConfig.default.catamaranRegular.fontFamily,
    color: theme.white,
    opacity: 0.7,
  },
  scrollView: {
    width: "100%",
    flex: 1,
  },
  fab: {
    position: "absolute",
    backgroundColor: theme.secondaryColor,
    margin: 16,
    right: 0,
    bottom: 0,
    height: 56,
    width: 56,
  },
  imageStyle: {
    width: 320,
    height: 320,
  },
});
