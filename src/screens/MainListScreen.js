import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
} from "react-native";
import { useEffect } from "react";
import { IconButton, List, Button, FAB } from "react-native-paper";
import theme from "../theme/theme";
import * as Material from "react-native-vector-icons/MaterialCommunityIcons";
import { useSchopListsStore } from "../mobx/context/schopListsContext";
import RNBootSplash from "react-native-bootsplash";
import Topbar, { TopBar } from "../components/TopBar";
const Icon = Material.default;

export const MainListScreen = ({ navigation }) => {
  const { listsData, setListData, listsLoading } = useSchopListsStore();
  const [moduleData, setModuleData] = useState([]);
  const [newListModal, setNewListModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getModuleData();
  }, []);

  const getModuleData = async () => {
    try {
      await setListData();
      setLoading(false);
      RNBootSplash.hide({ fade: true });
    } catch (_) {
      setLoading(false);
      RNBootSplash.hide({ fade: true });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.primaryColor} barStyle="default" />

      <TopBar {...navigation} />
      <Text>1231221</Text>
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
});
