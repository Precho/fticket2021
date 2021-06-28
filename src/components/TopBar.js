import { Appbar, Headline, IconButton } from "react-native-paper";
import { StyleSheet, View, Keyboard } from "react-native";
import theme from "../theme/theme";

// import Logo from '../assets/images/contrain_logo_monogram.svg';
import React from "react";
// import { appDefaultTheme, fontConfig } from '../theme/paperTheme';
// import { colors } from '../theme/colors';
import { useRoute } from "@react-navigation/native";
const MAX_TITLE_LENGTH = 24;

export const TopBar = ({ projectName, toggleDrawer, iconVisible }) => {
  const routeName = useRoute().name;
  return (
    <Appbar
      style={
        routeName !== "EmploymentHistory"
          ? styles.topBarContainer
          : styles.topBarContainerNoElevation
      }
    >
      <View style={styles.leftContainer}>
        <IconButton
          icon="arrow-left"
          color={theme.white}
          size={24}
          //   onPress={() => {
          //     toggleDrawer(), Keyboard.dismiss();
          //   }}
        />
        <Headline style={styles.topBarText}>Wróć</Headline>
      </View>
    </Appbar>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: appDefaultTheme[colors.secondary],
    paddingLeft: 0,
    paddingRight: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  topBarContainerNoElevation: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: appDefaultTheme[colors.secondary],
    paddingLeft: 0,
    paddingRight: 0,
    elevation: 0,
  },
  logo: {
    marginRight: 16,
    height: "24",
    width: "24",
  },
  topBarText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 18,
    // fontFamily: fontConfig.Montserrat.bold.fontFamily,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
});
