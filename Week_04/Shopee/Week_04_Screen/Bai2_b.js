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
            <Text>USB Bluetooth Music Receiver  HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
        </View>
    )};

    const styles = StyleSheet.create({
        container:{
            width: 360,
            height:640, 
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        header:{
            width:"100%",
            height:150,
            flexDirection: "row",
            justifyContent: "flex-start",
        }
    });