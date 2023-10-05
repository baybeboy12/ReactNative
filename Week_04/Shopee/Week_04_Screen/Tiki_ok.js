import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";

export default function Tiki_ok() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.thongtinsach}>
          <Image
            source={require("./book.png")}
            style={{ width: 104, height: 127 }}
          ></Image>
          <View style={styles.thongtinsachright}>
            <Text style={styles.tensach}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.nhacungcap}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.giasach1}>141.800 đ</Text>
            <Text style={styles.giasach2}>141.800 đ</Text>
            <View style={styles.viewthemsach}>
              <button style={styles.btntru}>
                <Icon name="minus" size={12} color={"grey"}></Icon>
              </button>
              <Text style={styles.soluong}>1</Text>
              <button style={styles.btncong}>
                <Icon name="plus" size={12}></Icon>
              </button>
              <Text style={styles.muasau}>Mua sau</Text>
            </View>
          </View>
        </View>

        <View style={styles.viewtextheader}>
          <Text style={styles.text1}>Mã giảm giá đã lưu</Text>
          <Text style={styles.text2}>Xem tại đây</Text>
        </View>
        <View style={styles.magiamgia}>
          <View style={styles.fieldmagiamgia}>
            <View style={styles.fielsyellow}></View>
            <Text style={styles.textmagiamgia}>Mã giảm giá</Text>
          </View>
          <button style={styles.btnapdung}>Áp dụng</button>
        </View>
      </View>
      <View style={styles.noiidung1}>
        <Text style={styles.phieuquatang}>
          {" "}
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={styles.nhaptaiday}>Nhập tại đây?</Text>
      </View>
      <View style={styles.noidung2}>
        <Text style={styles.tamtinh}>Tạm tính</Text>
        <Text style={styles.giatamtinh}>141.800 đ</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewthanhtien}>
          <Text style={styles.thanhtien}>Thành tiền</Text>
          <Text style={styles.giathanhtien}>141.800 đ</Text>
        </View>
        <button style={styles.btnthanhtien}>TIẾN HÀNH ĐẶT HÀNG</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    width: 360,
    height: 640,
  },
  header: {
    width: "100%",
    height: 283,
    backgroundColor: "white",
  },
  thongtinsach: {
    width: "100%",
    height: 130,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 10,
  },
  thongtinsachright: {
    width: "100%",
    height: 130,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 40,
  },
  tensach: {
    fontSize: 13,
    lineHeight: 14.08,
    fontWeight: 700,
  },
  nhacungcap: {
    fontSize: 13,
    lineHeight: 14.08,
    marginTop: 13,
    fontWeight: 700,
  },
  giasach1: {
    fontSize: 20,
    lineHeight: 14.08,
    marginTop: 13,
    color: "red",
    fontWeight: 700,
  },
  giasach2: {
    fontSize: 15,
    lineHeight: 14.08,
    marginTop: 13,
    color: "grey",
    textDecorationLine: "line-through",
    fontWeight: 700,
  },
  viewthemsach: {
    width: "100%",
    height: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  soluong: {
    marginLeft: 10,
    fontSize: 18,
    lineHeight: 17.58,
    textAlign: "center",
    fontWeight: 700,
  },
  btncong: {
    marginLeft: 10,
  },
  muasau: {
    marginLeft: 60,
    color: "blue",
    fontSize: 18,
    lineHeight: 14.06,
    textAlign: "center",
    fontWeight: 700,
  },
  viewtextheader: {
    width: "100%",
    height: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  text1: {
    fontSize: 12,
    textAlign: "center",
    lineHeight: 14.06,
    fontWeight: 700,
  },
  text2: {
    marginLeft: 35,
    fontSize: 12,
    textAlign: "center",
    lineHeight: 14.06,
    fontWeight: 700,
  },
  magiamgia: {
    width: "100%",
    height: 55,
    marginTop: 30,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  fieldmagiamgia: {
    width: 208,
    height: 45,
    borderWidth: 1,
    borderColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  fielsyellow: {
    width: 32,
    height: 16,
    backgroundColor: "yellow",
    marginLeft: -40,
  },
  textmagiamgia: {
    fontSize: 18,
    marginLeft: 10,
    lineHeight: 21.09,
    fontWeight: 700,
    textAlign: "center",
  },
  btnapdung: {
    width: 99,
    height: 45,
    marginLeft: 30,
    backgroundColor: "#0A5EB7",
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 5,
  },
  noiidung1: {
    width: "100%",
    height: 51,
    backgroundColor: "white",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  phieuquatang: {
    fontSize: 12,
    lineHeight: 14.09,
    textAlign: "center",
    fontWeight: 700,
  },
  nhaptaiday: {
    fontSize: 12,
    lineHeight: 14.09,
    textAlign: "center",
    fontWeight: 700,
    marginLeft: 10,
    color: "#134FEC",
  },
  noidung2: {
    width: "100%",
    height: 51,
    backgroundColor: "white",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  tamtinh: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 21.08,
    textAlign: "center",
    marginLeft: -300,
  },
  giatamtinh: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 21.08,
    textAlign: "center",
    marginRight: -250,
    color: "red",
    marginTop: -20,
  },
  footer: {
    width: "100%",
    height: 120,
    backgroundColor: "white",
    marginTop: 105,
  },
  viewthanhtien: {
    width: "100%",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  thanhtien: {
    fontSize: 18,
    lineHeight: 21.08,
    fontWeight: 700,
    color: "#808080",
    textAlign: "center",
    marginLeft: -280,
    marginTop: 10,
  },
  giathanhtien: {
    fontSize: 18,
    lineHeight: 21.08,
    fontWeight: 700,
    color: "red",
    textAlign: "center",
    marginLeft: 250,
    marginTop: -20,
  },
  btnthanhtien: {
    marginTop: 30,
    width: "90%",
    height: 45,
    marginLeft: 18,
    backgroundColor: "#E53935",
    fontSize: 20,
    fontWeight: 700,
    color: "white",
    textAlign: "center",
  },
});
