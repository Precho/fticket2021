import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainListScreen } from "./screens/MainListScreen";
import Orientation from "react-native-orientation-locker";

const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MainListScreen"
          component={MainListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
