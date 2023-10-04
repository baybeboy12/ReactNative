import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
export default function Bai2_b() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./usb.jpg")}
          style={{ width: 70, height: 70, marginTop: 30 }}
        ></Image>
        <View style={styles.textheader}>
          <Text>USB Bluetooth Music Receiver </Text>
          <Text> HJX-001- Biến loa thường thành loa</Text>
          <Text>bluetooth</Text>
        </View>
      </View>
      <View style={styles.danhgia}>
        <Text style={styles.textdanhgia}>Cực kỳ hài lòng</Text>
        <View style={styles.vstar}>
          {" "}
          <Icon name="star" size={40} color="gold" />
          <Icon name="star" size={40} color="gold" style={{ marginLeft: 20 }} />
          <Icon name="star" size={40} color="gold" style={{ marginLeft: 20 }} />
          <Icon name="star" size={40} color="gold" style={{ marginLeft: 20 }} />
          <Icon name="star" size={40} color="gold" style={{ marginLeft: 20 }} />
        </View>
        <View style={styles.themhinhanh}>
          <View style={styles.Iconthemanh}>
            {" "}
            <Icon name="camera" size={40}></Icon>
          </View>
          <Text style={styles.textthemanh}>Thêm hình ảnh</Text>
        </View>
      </View>
      <View style={styles.noidung}>
        <Text style={styles.noidung1}>
          Hãy chi sẻ những điều mà bạn thích về sản phẩm
        </Text>
        <Text style={styles.noidung2}>
          https://meet.google.com/nsj-ojwi-xpp
        </Text>
      </View>
      <button style={styles.Button}>Gửi</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 640,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  textheader: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 18.75,
  },
  danhgia: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textdanhgia: {
    fontSize: 18,
    lineHeight: 21.09,
    textAlign: "center",
  },
  vstar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  themhinhanh: {
    marginTop: 40,
    width: 345,
    height: 70,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  Iconthemanh: {
    marginLeft: "20%",
  },
  textthemanh: {
    marginLeft: 20,
    fontSize: 18,
    lineHeight: 21.09,
    textAlign: "center",
  },
  noidung: {
    height: "30%",
    width: "90%",
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  noidung1: {
    marginTop: 5,
    fontSize: 18,
    width: "80%",
    color: "grey",
    lineHeight: 21.09,
  },
  noidung2: {
    marginTop: 120,
    marginLeft: 80,
    fontSize: 12,
    lineHeight: 14.06,
    textAlign: "center",
  },
  Button: {
    width: "90%",
    height: 50,
    marginTop: 30,
    backgroundColor: "blue",
    color: "white",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
