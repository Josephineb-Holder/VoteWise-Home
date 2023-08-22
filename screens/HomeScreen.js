import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Images } from "../imageFile/GlobalImage";

function HomeScreen() {
  return (
    <>
      <View>
        <Text>This is the Home screen</Text>
        <Image styles={styles.image} source={Images.homeImages.flag_chair} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "cover",
  },
});

export default HomeScreen;
