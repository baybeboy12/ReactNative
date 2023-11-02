import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
export default function Screen1({ navigation }) {
  var [data, setData] = useState([]);
  var [name, setName] = useState("");
  var [loginUser, setLoginUser] = useState();

  useEffect(() => {
    fetch(`https://6540984045bedb25bfc22306.mockapi.io/shop`)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(json);
      });
  }, []);

  var handleLogin = () => {
    var user = data.find((user) => user.name === name);
    if (user) {
      setLoginUser(user);
      navigation.navigate("Screen2", { selectUser: user });
    } else {
      alert("Ten dang nhap khong dung");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./noteandpen.PNG")}
        style={{ width: 271, height: 271, marginTop: 50 }}
      ></Image>
      <Text
        style={{
          width: 390,
          height: 72,
          marginTop: 20,
          textAlign: "center",
          color: "#8353E2",
          fontFamily: "Epilogue",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        {" "}
        MANAGE YOUR{<br></br>} TASK{" "}
      </Text>
      <View style={styles.viewEmail}>
        <Image
          source={require("./IconEmail.PNG")}
          style={{ width: 20, height: 20, marginLeft: -100 }}
        ></Image>
        <TextInput
          placeholder="Enter your name"
          style={{ marginLeft: 10 }}
          onChangeText={(text) => setName(text)}
        ></TextInput>
      </View>
      <Pressable style={styles.btn} onPress={handleLogin}>
        <Text>Get started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  viewEmail: {
    width: 334,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 2,
    marginTop: 40,
  },
  btn: {
    marginTop: 40,
    width: 190,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    color: "white",
    borderRadius: 15,
  },
});
