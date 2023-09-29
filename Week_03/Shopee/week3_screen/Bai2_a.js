import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Bai2_a() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        start={[0, 0]}
        end={[0, 0]}
        style={styles.background}
      >
        <Text style={styles.title}>LOGIN</Text>
        <LinearGradient
          colors={["#ffa500", "#ffa500"]}
          start={[0, 0]}
          end={[0, 0]}
          style={styles.VName}
        >
          <Icon name="user" size={40} style={{ marginLeft: 10 }}></Icon>
          <Text style={styles.Name}>Name</Text>
        </LinearGradient>
        <LinearGradient
          colors={["#ffa500", "#ffa500"]}
          start={[0, 0]}
          end={[0, 0]}
          style={styles.VPassword}
        >
          <Icon name="lock" size={40} style={{ marginLeft: 10 }}></Icon>
          <Text style={styles.Password}>Password</Text>
          <Icon name="eye" size={40} style={{ marginLeft: 130 }}></Icon>
        </LinearGradient>
        <View style={styles.vbLOGIN}>
          <Pressable style={styles.bLOGIN}>
            <Text style={styles.LOGIN}>LOGIN</Text>
          </Pressable>
        </View>
        <Text style={styles.text}>CREATE ACCOUNT</Text>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  title: {
    width: 100,
    height: 35,
    fontSize: 30,
    lineHeight: 35.16,
    fontWeight: 700,
    textAlign: "center",
    fontStyle: "Roboto",
    marginTop: -150,
    marginLeft: -200,
  },
  VName: {
    width: 330,
    height: 54,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },
  Name: {
    width: 48,
    height: 21,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 21.09,
    fontWeight: 400,
    fontStyle: "Roboto",
    marginLeft: 20,
  },
  VPassword: {
    width: 330,
    height: 54,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },
  Password: {
    width: 80,
    height: 21,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 21.09,
    fontWeight: 400,
    fontStyle: "Roboto",
    marginLeft: 20,
  },
  vbLOGIN: {
    width: 330,
    height: 45,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
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
  text: {
    width: 260,
    height: 20,
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 23.44,
    marginTop: 30,
    textAlign: "center",
  },
});
