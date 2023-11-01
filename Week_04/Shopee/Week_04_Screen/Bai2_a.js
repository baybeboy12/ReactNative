import { StatusBar, Alert } from "react-native";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Bai2_a() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginStatus, setLoginStatus] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState("");

  var data = [
    { username: "quangdung", password: "123" },
    { username: "quangdung1", password: "123" },
    { username: "quangdung2", password: "123" },
  ];

  const handleLogin = () => {
    const user = data.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoginStatus("Đăng nhập thành công");
      setAlertMessage("Đăng nhập thành công!");
      Alert.alert("Thông báo", "Đăng nhập thành công!");
    } else {
      setLoginStatus("Đăng nhập thất bại");
      setAlertMessage(
        "Đăng nhập thất bại. Vui lòng kiểm tra tên đăng nhập và mật khẩu."
      );
      Alert.alert(
        "Thông báo",
        "Đăng nhập thất bại. Vui lòng kiểm tra tên đăng nhập và mật khẩu."
      );
    }
  };

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
          <TextInput
            defaultValue="Name"
            style={styles.Name}
            onChangeText={(text) => setUsername(text)}
          ></TextInput>
        </LinearGradient>
        <LinearGradient
          colors={["#ffa500", "#ffa500"]}
          start={[0, 0]}
          end={[0, 0]}
          style={styles.VPassword}
        >
          <Icon name="lock" size={40} style={{ marginLeft: 10 }}></Icon>
          <TextInput
            defaultValue="Password"
            style={styles.Password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true} // Ẩn mật khẩu
          ></TextInput>
          <Icon name="eye" size={40} style={{ marginLeft: 20 }}></Icon>
        </LinearGradient>
        <View style={styles.vbLOGIN}>
          <Button title="LOGIN" onPress={handleLogin} style={styles.Button} />
        </View>
        <Text style={styles.text}>{loginStatus}</Text>
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
  Button: {
    width: "100%",
    height: "100%",
    color: "black",
    fontSize: 20,
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
