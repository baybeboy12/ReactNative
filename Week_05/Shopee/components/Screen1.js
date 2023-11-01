import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import * as React from "react";
import { HeaderBackButton } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
export default function Screen1({ navigation, route }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var data = [
    { user: "an", pass: "123" },
    { user: "an1", pass: "123" },
    { user: "an2", pass: "123" },
    { user: "an3", pass: "123" },
    { user: "an4", pass: "123" },
  ];
  const handleLogin = () => {
    const account = data.find(
      (account) => account.user === username && account.pass === password
    );
    if (account) {
      alert("login successful");
      navigation.navigate("Screen2");
    } else {
      alert("fail");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Image
          source={require("./image/icon.png")}
          style={{
            height: "80px",
            width: "80px",
            alignSelf: "center",
            top: 30,
          }}
        ></Image>
        <Text
          style={{
            fontSize: "35px",
            fontWeight: "700",
            textAlign: "center",
            top: "35px",
          }}
        >
          Hello Again!
        </Text>
        <Text
          style={{
            fontSize: "15px",
            color: "gray",
            fontWeight: "500",
            textAlign: "center",
            top: 40,
          }}
        >
          Log into your account
        </Text>
      </View>
      <View style={styles.input_body}>
        <View style={styles.div_input}>
          <Image
            source={require("./image/vector.png")}
            style={{ height: 14, width: 17, left: 17, top: 15 }}
          ></Image>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            onChangeText={(text) => setUsername(text)}
          ></TextInput>
        </View>
        <View style={styles.div_input}>
          <Image
            source={require("./image/lock.png")}
            style={{ height: 17, width: 20, left: 17, top: 15 }}
          ></Image>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          <Image
            source={require("./image/eye.png")}
            style={{ height: 17, width: 20, left: 17, top: 15 }}
          ></Image>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "blue",
            left: 200,
            top: 10,
          }}
        >
          Forgot your password?
        </Text>
      </View>

      <Pressable
        onPress={handleLogin}
        style={{
          borderRadius: 15,
          width: 350,
          height: 45,
          backgroundColor: "blue",
          alignSelf: "center",
          top: 15,
          textAlign: "center",
          fontSize: "18px",
          fontWeight: 500,
          color: "white",
          justifyContent: "center",
        }}
      >
        Continue
      </Pressable>
      <View
        style={{
          width: 350,
          height: 10,
          alignSelf: "center",
          borderTopColor: "black",
          borderTopWidth: 1,
          marginTop: 50,
          flex: 1,
        }}
      ></View>
      <View style={styles.footer}>
        <Image
          source={require("./image/google.png")}
          style={styles.logo}
        ></Image>
        <Image source={require("./image/face.png")} style={styles.logo}></Image>
        <Image
          source={require("./image/apple.png")}
          style={styles.logo}
        ></Image>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  screen: {
    width: 390,
    height: 650,
    alignSelf: "center",
    backgroundColor: "white",
  },
  input_body: {
    width: "370px",
    height: "150px",
    alignSelf: "center",
    marginTop: "-430px",
    flexDirection: "column",
  },
  input: {
    width: 250,
    height: 45,
    fontSize: 18,
    fontWeight: 500,
    color: "gray",
    marginLeft: 30,
    top: -30,
  },
  div_input: {
    height: 45,
    width: 350,
    alignSelf: "center",
    borderWidth: "1px",
    borderRadius: "20px",
    borderColor: "gray",
    marginTop: 20,
    flexDirection: "row",
  },
  footer: {
    width: 360,
    height: 70,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    top: "-30px",
    left: -20,
  },
  logo: {
    width: 57,
    height: 50,
    left: 100,
    marginLeft: 10,
  },
});
