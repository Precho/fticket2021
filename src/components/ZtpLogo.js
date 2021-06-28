import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import ztpLogo from "../assets/ztpLogo.png";

function ZtpLogo() {
  const [value, setValue] = useState(new Animated.ValueXY({ x: -90, y: 0 }));

  useEffect(() => {
    Animated.loop(
      Animated.timing(value, {
        toValue: { x: 400, y: 0 },
        duration: 3000,
        delay: 1000,
        useNativeDriver: false,
      })
    ).start();
  }, [1000]);

  return (
    <View style={styles.container}>
      <View styles={styles.content}>
        <Animated.View style={value.getLayout()}>
          <Image style={styles.imageZtp} source={ztpLogo}></Image>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    margin: 25,
    marginTop: 140,
    zIndex: 1,
  },
  content: {
    flex: 1,
  },
  imageZtp: {
    width: 70,
    height: 30,
  },
});

export default ZtpLogo;
