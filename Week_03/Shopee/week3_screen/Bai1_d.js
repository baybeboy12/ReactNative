import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Bai1_a() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.vemail}>
        <Text style={styles.temail}>Email</Text>
      </View>
      <View style={styles.vpassword}>
        <View style={styles.vtpassword}>
          <Text style={styles.tpassword}>Password</Text>
        </View>
        <View style={styles.vipassword}>
          {" "}
          <Icon name="eye" size={30} style={{ marginRight: 10 }}></Icon>
        </View>
      </View>
      <View style={styles.vblogin}>
        <Pressable style={styles.blogin}>
          <Text style={styles.tlogin}>LOGIN</Text>
        </Pressable>
      </View>
      <Text style={styles.text1}>When you agree to terms and conditions</Text>
      <Text style={styles.text2}>For got your password?</Text>
      <Text style={styles.text3}>Or login with</Text>
      <View style={styles.vicons}>
        <Icon name="facebook-square" size={60}></Icon>
        <Icon name="twitter" size={60} style={{ marginLeft: 20 }}></Icon>
        <Icon name="google" size={60} style={{ marginLeft: 20 }}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d8efde",
    width: 360,
    height: 640,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: 73,
    height: 29,
    fontSize: 25,
    lineHeight: 29.3,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: -0,
  },
  vemail: {
    width: 330,
    height: 50,
    backgroundColor: "#c9e0d0",
    justifyContent: "center",
    marginTop: 60,
  },
  temail: {
    width: 45,
    height: 21,
    fontSize: 18,
    lineHeight: 21.09,
    textAlign: "center",
    marginLeft: 10,
  },
  vpassword: {
    width: 330,
    height: 50,
    backgroundColor: "#c9e0d0",
    justifyContent: "center",
    marginTop: 30,
  },
  vtpassword: {
    width: 80,
    height: 30,
    marginLeft: 10,
    marginTop: 5,
  },
  tpassword: {
    width: 80,
    height: 30,
    fontSize: 18,
    lineHeight: 21.09,
    alignItems: "center",
    textAlign: "center",
    marginLeft: -2,
    marginTop: 5,
  },
  vipassword: {
    width: 38,
    height: 36,
    alignItems: "center",
    marginLeft: 280,
    marginTop: -30,
  },
  vblogin: {
    width: 330,
    height: 45,
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  tlogin: {
    width: 65,
    height: 30,
    fontWeight: 700,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  text1: {
    width: 260,
    height: 20,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: "center",
    marginTop: 15,
  },
  text2: {
    width: 260,
    height: 20,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: "center",
    marginTop: 10,
  },
  text3: {
    width: 260,
    height: 20,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: "center",
    marginTop: 10,
  },
  vicons: {
    flexDirection: "row", // Hiển thị các rectangle theo hàng ngang
    justifyContent: "flex-start", // Căn sang trái
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
});
