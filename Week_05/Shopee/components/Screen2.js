import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import * as React from "react";
import { HeaderBackButton } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
export default function Screen2(navigation) {
  const [data, setData] = useState([]);
  const [type, setType] = useState("SmartPhone");
  useEffect(() => {
    if (type === "SmartPhone") {
      const begin = smart.slice(0, 4);
      setData(begin);
    }
    if (type === "MacBook") {
      const begin = macbook.slice(0, 4);
      setData(begin);
    }
    if (type === "Ipad") {
      const begin = ipad.slice(0, 4);
      setData(begin);
    }
  }, [type]);
  const smart = [
    { id: 1, img: require("./image/1.png"), price: "$899" },
    { id: 2, img: require("./image/2.png"), price: "$899" },
    { id: 3, img: require("./image/3.png"), price: "$789" },
    { id: 4, img: require("./image/4.png"), price: "$999" },
    { id: 5, img: require("./image/1.png"), price: "$899" },
    { id: 6, img: require("./image/2.png"), price: "$899" },
    { id: 7, img: require("./image/3.png"), price: "$789" },
    { id: 8, img: require("./image/4.png"), price: "$999" },
    { id: 9, img: require("./image/3.png"), price: "$789" },
    { id: 10, img: require("./image/4.png"), price: "$999" },
  ];
  const ipad = [
    { id: 1, img: require("./image/ipad.png"), price: "$899" },
    { id: 2, img: require("./image/1.png"), price: "$899" },
    { id: 3, img: require("./image/2.png"), price: "$899" },
    { id: 4, img: require("./image/4.png"), price: "$999" },
    { id: 5, img: require("./image/1.png"), price: "$899" },
    { id: 6, img: require("./image/2.png"), price: "$899" },
    { id: 7, img: require("./image/3.png"), price: "$789" },
    { id: 8, img: require("./image/4.png"), price: "$999" },
    { id: 9, img: require("./image/3.png"), price: "$789" },
    { id: 10, img: require("./image/4.png"), price: "$999" },
  ];
  const macbook = [
    { id: 1, img: require("./image/macbook.png"), price: "$899" },
    { id: 2, img: require("./image/1.png"), price: "$899" },
    { id: 3, img: require("./image/2.png"), price: "$899" },
    { id: 4, img: require("./image/4.png"), price: "$999" },
    { id: 5, img: require("./image/1.png"), price: "$899" },
    { id: 6, img: require("./image/2.png"), price: "$899" },
    { id: 7, img: require("./image/3.png"), price: "$789" },
    { id: 8, img: require("./image/4.png"), price: "$999" },
    { id: 9, img: require("./image/3.png"), price: "$789" },
    { id: 10, img: require("./image/4.png"), price: "$999" },
  ];
  console.log(type);
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <View
          style={{
            width: 300,
            height: 40,
            backgroundColor: "gray",
            borderRadius: 10,
            left: 15,
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./image/search.png")}
            style={{ left: 10, width: 27, height: 27 }}
          ></Image>
        </View>
        <View
          style={{
            width: 50,
            height: 40,
            background: "gray",
            borderRadius: 10,
            left: 330,
            top: -40,
          }}
        ></View>
        <View
          style={{
            width: 350,
            height: 40,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            top: -20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 600, alignSelf: "center" }}>
            Categories
          </Text>
          <Text style={{ alignSelf: "center" }}>See all &gt;</Text>
        </View>
        <View
          style={{
            width: 350,
            height: 100,
            alignSelf: "center",
            flexDirection: "row",
            top: -20,
            alignItems: "center",
            left: 35,
          }}
        >
          <Pressable
            onPress={() => setType("SmartPhone")}
            style={type === "SmartPhone" ? styles.cate : styles.cate_none}
          >
            <Image
              source={require("./image/smart.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
            ></Image>
          </Pressable>
          <Pressable
            style={type === "MacBook" ? styles.cate : styles.cate_none}
            onPress={() => setType("MacBook")}
          >
            <Image
              source={require("./image/macbook.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
            ></Image>
          </Pressable>
          <Pressable
            style={type === "Ipad" ? styles.cate : styles.cate_none}
            onPress={() => setType("Ipad")}
          >
            <Image
              source={require("./image/ipad.png")}
              style={{ width: 60, height: 60, alignSelf: "center" }}
            ></Image>
          </Pressable>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <Image
                source={item.img}
                style={{ height: 50, width: 50 }}
              ></Image>
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>
                  SmartPhone
                </Text>
                <Image
                  source={require("./image/5star.png")}
                  style={{ width: 90, height: 17 }}
                ></Image>
              </View>
              <View style={{ marginLeft: 100 }}>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>
                  {item.price}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Pressable
          onPress={() => {
            if (type === "SmartPhone") {
              setData(smart);
            }
            if (type === "MacBook") {
              setData(macbook);
            }
            if (type === "Ipad") {
              setData(ipad);
            }
          }}
          style={{
            width: 350,
            height: 40,
            backgroundColor: "gray",
            alignSelf: "center",
            textAlign: "center",
            top: 30,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center" }}>See All</Text>
        </Pressable>
        <Image
          source={require("./image/banner.png")}
          style={{ width: 350, height: 50, alignSelf: "center", top: 40 }}
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
  },
  cate: {
    width: 80,
    height: 80,
    backgroundColor: "gray",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 10,
    borderColor: "pink",
    borderWidth: 2,
  },
  cate_none: {
    width: 80,
    height: 80,
    backgroundColor: "black",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 10,
  },
  list: {
    alignSelf: "center",
    width: 350,
    height: 80,
    backgroundColor: "gray",
    top: 15,
    // justifyContent:'center',
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
  },
});
