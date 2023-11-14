import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

export default function Screen2({ navigation }) {
  // var [data, setData] = useState([]);
  // var [jobs, setJobs] = useState([]);
  // useEffect(() => {
  //   setData(route.params.selectUser);
  //   fetch(`https://6540984045bedb25bfc22306.mockapi.io/shop/${data.id}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       data;
  //     });
  // }, []);
  // var route = useRoute();
  // var handleInsert = () => {
  //   if (data !== null) {
  //     navigation.navigate("Screen3", { userInsert: data });
  //   }
  // };
  const count = useSelector((state) => state.counter);
  console.log(count);
  return (
    <View style={styles.container}>
      <View style={styles.viewAvatar}>
        <Image
          // source={{ uri: data.avatar }}
          style={{ height: 50, width: 50 }}
        ></Image>
        <View style={styles.viewTextAvatar}>
          <Text
            style={{
              width: 101,
              height: 30,
              marginLeft: 10,
              fontFamily: "Epilogue",
              fontSize: 14,
              fontWeight: 700,
              marginTop: 20,
            }}
          >
            {/* {data.name}s */}
          </Text>
          <Text>Have agrate day a head</Text>
        </View>
      </View>
      <View style={styles.viewSearch}>
        <Image
          source={require("./IconSearch.PNG")}
          style={{ width: 20, height: 20, marginLeft: -100 }}
        ></Image>
        <TextInput placeholder="Search"></TextInput>
      </View>
      <View
        style={{
          width: "100%",
          height: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={count.jobs}
          renderItem={({ item }) => (
            <View style={styles.viewJob}>
              <Image
                source={require("./IconCheck.PNG")}
                style={{ width: 20, height: 20, marginLeft: -50 }}
              ></Image>
              <Text style={{ marginLeft: 20 }}>{item.job}</Text>
              <Image
                source={require("./IconEdit.PNG")}
                style={{ width: 20, height: 20, marginLeft: 20 }}
              ></Image>
            </View>
          )}
        />
      </View>
      <Pressable
        style={styles.btn}
        // onPress={handleInsert}
      >
        <Text>+</Text>
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
  btn: {
    marginTop: 40,
    width: 60, // Đặt kích thước cho nút hình tròn
    height: 60, // Đặt kích thước cho nút hình tròn
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    borderRadius: 30, // Đặt nửa kích thước cho hình tròn
    color: "white",
    fontSize: 30,
    fontWeight: 600,
  },
  viewAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 100,
  },
  viewSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 334,
    height: 44,
    marginTop: 40,
    borderRadius: 5,
    borderWidth: 2,
  },
  viewJob: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    width: 335,
    height: 48,
    backgroundColor: "grey",
    borderRadius: 25,
  },
});
