import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Bai1_c() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.background}
      >
        <Text style={styles.title}>CODE</Text>
        <Text style={styles.title1}>VERIFICATION</Text>
        <Text style={styles.text}>
          Enter one-time password sent on ++849092605798
        </Text>
        <View style={styles.viewrectangle}>
          <View style={styles.rectangle} />
          <View style={styles.rectangle} />
          <View style={styles.rectangle} />
          <View style={styles.rectangle} />
          <View style={styles.rectangle} />
          <View style={styles.rectangle} />
        </View>
        <View style={styles.viewbutton}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>VERIFY CODE</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Căn giữa theo chiều ngang
    width: "360px",
    height: "640px",
  },
  background: {
    justifyContent: "center",
    alignItems: "center", // Căn giữa theo chiều ngang và chiều dọc
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 60,
    lineHeight: 70.31,
    marginTop: 1,
    textAlign: "center",
  },
  title1: {
    fontSize: 20,
    lineHeight: 23.44,
    marginTop: 30,
    textAlign: "center",
  },
  text: {
    marginTop: 40,
    marginLeft: 60,
    fontSize: 15,
    lineHeight: 17.58,
    textAlign: "center",
  },
  rectangle: {
    width: 50,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  viewrectangle: {
    flexDirection: "row", // Hiển thị các rectangle theo hàng ngang
    justifyContent: "flex-start", // Căn sang trái
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  viewbutton: {
    width: 330,
    height: 45,
    marginTop: 20,
    justifyContent: "center", // Căn giữa theo chiều ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    backgroundColor: "yellow",
  },
  btn: {
    width: 330,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 21.09,
    justifyContent: "center", // Căn giữa theo chiều ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    marginTop: 10,
  },
});
