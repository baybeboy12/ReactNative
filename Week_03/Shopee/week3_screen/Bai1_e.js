import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Bai1_e() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>
      <View style={styles.vname}>
        <Text style={styles.Name}>Name</Text>
      </View>
      <View style={styles.vphone}>
        <Text style={styles.phone}>Phone</Text>
      </View>
      <View style={styles.VEmail}>
        <Text style={styles.Email}>Email</Text>
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
      <View style={styles.VBirthday}>
        <Text style={styles.Birthday}>Birthday</Text>
      </View>
      <View style={styles.vsex}>
        <View style={styles.circlemale}></View>
        <Text style={styles.Male}>Male</Text>
        <View style={styles.circlefamale}></View>
        <Text style={styles.Female}>Female</Text>
      </View>
      <View style={styles.vbREGISTER}>
        <Pressable style={styles.bREGISTER}>
          <Text style={styles.REGISTER}>REGISTER</Text>
        </Pressable>
      </View>
      <Text style={styles.text}>When you agree to terms and conditions</Text>
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
    backgroundColor: "#31AA52",
  },
  title: {
    width: 116,
    height: 29,
    lineHeight: 700,
    fontSize: 25,
    lineHeight: 29.3,
    textAlign: "center",
    marginTop: -50,
  },
  vname: {
    backgroundColor: "#c9e0d0",
    width: 330,
    height: 35,
    justifyContent: "center",
    marginTop: 20,
  },
  Name: {
    width: 48,
    height: 21,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 21.08,
    textAlign: "center",
    marginLeft: 10,
  },
  vphone: {
    backgroundColor: "#c9e0d0",
    width: 330,
    height: 35,
    justifyContent: "center",
    marginTop: 20,
  },
  phone: {
    width: 55,
    height: 21,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 21.08,
    textAlign: "center",
    marginLeft: 10,
  },
  VEmail: {
    backgroundColor: "#c9e0d0",
    width: 330,
    height: 35,
    justifyContent: "center",
    marginTop: 20,
  },
  Email: {
    width: 55,
    height: 21,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 21.08,

    textAlign: "center",
    marginLeft: 10,
  },
  vpassword: {
    backgroundColor: "#c9e0d0",
    width: 330,
    height: 35,
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tpassword: {
    width: 80,
    height: 21,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 21.08,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 5,
  },
  vipassword: {
    marginLeft: 200,
  },
  VBirthday: {
    backgroundColor: "#c9e0d0",
    width: 330,
    height: 35,
    justifyContent: "center",
    marginTop: 20,
  },
  Birthday: {
    width: 80,
    height: 21,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 21.08,
    textAlign: "center",
    marginLeft: 10,
  },
  vsex: {
    width: 330,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
    backgroundColor: "#31AA52",
    alignItems: "center",
  },
  circlemale: {
    width: "23px",
    height: "23px",
    borderRadius: "75px",
    borderWidth: "2px",
    alignItems: "center",
    marginLeft: 20,
  },
  Male: {
    width: 40,
    height: 21,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 21.09,
    textAlign: "center",
    marginLeft: 15,
    justifyContent: "center",
    marginTop: 5,
  },
  circlefamale: {
    width: 23,
    height: 23,
    width: "23px",
    height: "23px",
    borderRadius: "75px",
    borderWidth: "2px",
    marginLeft: 40,
  },
  Female: {
    width: 80,
    height: 21,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 21.09,
    textAlign: "center",
    marginLeft: 1,
    justifyContent: "center",
    marginTop: 5,
  },
  vbREGISTER: {
    width: 330,
    height: 45,
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  REGISTER: {
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
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16.41,
    marginTop: 10,
  },
});
