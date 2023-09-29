import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
export default function Bai2_a() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./eye.png")}
        style={{ width: 120, height: 120, marginTop: 30 }}
      ></Image>
      <View style={styles.vusername}>
        <Icon name="user" size={40} style={{ marginLeft: 10 }}></Icon>
        <Text style={styles.username}>Please input user name</Text>
      </View>
      <View style={styles.vpassword}>
        <View style={styles.vbpassword}>
          <Icon name="lock" size={40}></Icon>
        </View>
        <Text style={styles.Password}> Please input password</Text>
      </View>
      <View style={styles.vbLOGIN}>
        <Pressable style={styles.bLOGIN}>
          <Text style={styles.LOGIN}>LOGIN</Text>
        </Pressable>
      </View>
      <View style={styles.text1}>
        <Text style={styles.Register}>Register</Text>
        <Text style={styles.ForgotPassword}>Forgot Password</Text>
      </View>
      <View style={styles.vortherlogin}>
        <View style={styles.line1}></View>
        <Text style={styles.ortherlogin}>Orther Login Methods</Text>
        <View style={styles.line2}></View>
      </View>
      <View style={styles.picture}>
        <View style={styles.guestplus}>
          <Image
            source={require("./guestplus.png")}
            style={{ width: 60, height: 60, marginLeft: "auto" }}
          ></Image>
        </View>
        <View style={styles.wifi}>
          {" "}
          <Image
            source={require("./wifi.png")}
            style={{ width: 60, height: 60, marginLeft: "auto" }}
          ></Image>
        </View>
        <View style={styles.facebook}>
          {" "}
          <Image
            source={require("./facebook.png")}
            style={{ width: 60, height: 60, marginLeft: "auto" }}
          ></Image>
        </View>
      </View>
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
    backgroundColor: "white",
  },
  vusername: {
    width: 300,
    height: 54,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
    borderBottomWidth: 2,
    borderBlockEndColor: "#bababa",
  },
  username: {
    width: 200,
    height: 21,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 21.09,
    fontWeight: 400,
    fontStyle: "Roboto",
    marginLeft: 5,
  },
  vpassword: {
    width: 300,
    height: 54,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
    borderBottomWidth: 2,
    borderBlockEndColor: "#bababa",
  },
  vbpassword: {
    borderWidth: 2,
    borderColor: "red",
    marginLeft: 8,
  },
  Password: {
    width: 200,
    height: 21,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 21.09,
    fontWeight: 400,
    fontStyle: "Roboto",
    marginLeft: 5,
  },
  vbLOGIN: {
    width: 330,
    height: 45,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 50,
  },
  LOGIN: {
    width: 100,
    height: 30,
    fontWeight: 700,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  text1: {
    width: 330,
    height: 45,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  Register: {
    fontSize: 18,
  },
  ForgotPassword: {
    fontSize: 18,
    marginLeft: 125,
  },
  vortherlogin: {
    width: 330,
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  line1: {
    width: 50,
    height: 15,
    borderBottomWidth: 2,
    borderBlockEndColor: "blue",
    marginLeft: 20,
  },
  ortherlogin: {
    width: 290,
    fontSize: 18,
    marginLeft: 2,
  },
  line2: {
    width: 50,
    height: 15,
    borderBottomWidth: 2,
    borderBlockEndColor: "blue",
    marginRight: 31,
  },
  picture: {
    width: 330,
    height: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
  guestplus: {
    marginLeft: -30,
  },
  wifi: {
    marginLeft: 30,
  },
  facebook: {
    marginLeft: 30,
  },
});
