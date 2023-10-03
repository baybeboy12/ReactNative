import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
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
          <TextInput defaultValue="Name" style={styles.Name}></TextInput>
        </LinearGradient>
        <LinearGradient
          colors={["#ffa500", "#ffa500"]}
          start={[0, 0]}
          end={[0, 0]}
          style={styles.VPassword}
        >
          <Icon name="lock" size={40} style={{ marginLeft: 10 }}></Icon>
          <TextInput defaultValue="Password" style={styles.Password}></TextInput>
          <Icon name="eye" size={40} style={{ marginLeft: 20 }}></Icon>
        </LinearGradient>
        <View style={styles.vbLOGIN}>
          <button style={styles.Button}>LOGIN</button>
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
    width: 200,
    height: 21,
    fontSize: 18,
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
    width: 200,
    height: 21,
    fontSize: 18,
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
  Button:{
    width: 330,
    height: 45,
    backgroundColor:"#0a0a0a",
    color: "white",
    fontSize: 20
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
