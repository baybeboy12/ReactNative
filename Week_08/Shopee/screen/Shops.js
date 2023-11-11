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
export default function Shops({ navigation }) {
  var route = useRoute();
  var [data, setData] = useState(route.params?.shop);
  useEffect(() => {
    if (route.params?.shop) {
      setData(route.params.shop);
    }
  }, [route.params?.shop]);
  useEffect(() => {
    fetch(`https://65434a7d01b5e279de20240f.mockapi.io/shopcafe`)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(json);
      });
  }, [route.params]);
  console.log(data);
  return (
    <View style={styles.container}>
      <View
        style={{ width: "90%", height: "100%", backgroundColor: "lightgrey" }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("Drinks", { shop: item })}
            >
              <View
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: "white",
                  borderRadius: 6,
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: 10,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "95%", height: 114 }}
                ></Image>
                <View
                  style={{
                    width: "95%",
                    height: 30,
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      width: 160,
                      height: 30,
                      backgroundColor: "lightgrey",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("./image/IconCheck.PNG")}
                      style={{ width: 19, height: 14 }}
                    ></Image>
                    <Text
                      style={{
                        width: 160,
                        height: 22,
                        color: "green",
                        marginLeft: 8,
                      }}
                    >
                      {item.status}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 130,
                      height: 30,
                      backgroundColor: "lightgrey",
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                  >
                    <Image
                      source={require("./image/IconClock.PNG")}
                      style={{ width: 19, height: 14 }}
                    ></Image>
                    <Text
                      style={{
                        width: 130,
                        height: 22,
                        color: "red",
                        marginLeft: 8,
                      }}
                    >
                      {item.timeDelivery}
                    </Text>
                  </View>
                  <Image
                    source={require("./image/IconLocation.PNG")}
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 15,
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  ></Image>
                </View>
                <View
                  style={{
                    width: "95%",
                    marginTop: 5,
                    justifyContent: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "inter",
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    width: "95%",
                    marginTop: 5,
                    justifyContent: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "inter",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "grey",
                    }}
                  >
                    {item.address}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    flexDirection: "column",
  },
});
