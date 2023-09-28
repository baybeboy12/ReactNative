import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Bai1_a() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.background}
      >
        <View style={styles.circle}></View>
        <Text style={styles.title}>GROW YOUR BUSINESS</Text>
        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>
        <View style={styles.button_div}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>LOGIN</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>SIGN UP</Text>
          </Pressable>
        </View>
        <Text style={styles.textfooter}>HOW WE WORK?</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "Hug (360px)",
    height: "Hug (640px)",
  },
  background: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  circle: {
    alignSelf: "center",
    width: "142px",
    height: "142px",
    marginTop: "69px",
    marginLeft: "20px",
    borderWidth: "15px",
    borderRadius: "75px",
  },
  title: {
    alignSelf: "center",
    width: "180px",
    height: "90px",
    textAlign: "center",
    marginTop: "50px",
    fontSize: "25px",
    fontWeight: "700",
    lineHeight: "29px",
  },
  text: {
    alignSelf: "center",
    marginTop: "30px",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "17.5px",
    width: "300px",
    height: "40px",
  },
  button_left: {
    color: "#E3C000",
    width: "150px",
  },
  button_div: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  btnText: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "23.44px",
    textAlign: "center",
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    width: "110px",
    height: "45px",
    backgroundColor: "#E3C000",
    marginTop: "60px",
  },
  textfooter: {
    // fontFamily: "Roboto",
    width: "302px",
    height: "53px",
    marginTop: "30px",
    marginLeft: "50px",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "21.09px",
    fontWeight: "700",
  },
});
