import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-web";

export default function Bai1_b() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.background}
      >
        <Icon name="lock" size={130} style={styles.icon}></Icon>
        <Text style={styles.title}>FORGET PASSWORD</Text>
        <Text style={styles.text}>
          Provide your account’s email for which you want {"\n"} to reset your
          password
        </Text>
        <View style={styles.mail_box}>
          <View style={styles.mail_div}>
            <Icon name="envelope-o" size={25}></Icon>
          </View>
          <Text style={styles.lbl_mail}>Email</Text>
        </View>
        <View style={styles.viewbutton}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>NEXT</Text>
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
    width: "360px",
    height: "640px",
  },
  background: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  icon: {
    width: "105px",
    height: "117px",
    alignSelf: "center",
    marginTop: "-100px",
  },
  title: {
    width: "133px",
    height: "58px",
    fontSize: "25px",
    lineHeight: "29.3px",
    marginTop: "10px",
    textAlign: "center",
    alignSelf: "center",
  },
  mail_box: {
    width: "330px",
    height: "45px",
    alignSelf: "center",
    backgroundColor: "#c4c4c4",
    marginTop: "30px",
  },
  mail_div: {
    width: "48px",
    height: "42px",
    alignItems: "center",
    justifyContent: "center",
  },
  lbl_mail: {
    fontWeight: "400",
    fontSize: "15px",
    marginLeft: "50px",
    top: "-30px",
  },

  text: {
    width: "302px",
    height: "53px",
    marginTop: "80px",
    marginLeft: "60px",
    size: "15px",
    lineHeight: "17.58px",
    textAlign: "center",
  },
  viewbutton: {
    width: "330px",
    height: "45px",
    marginTop: "20px",
    marginLeft: "30px",
    alignItems: "center",
    backgroundColor: "yellow",
  },

  btnText: {
    width: "700px",
    height: "53px",
    size: "18px",
    lineHeight: "21.09px",
    textAlign: "center",
    marginTop: "10px",
    alignItems: "center",
  },
});
