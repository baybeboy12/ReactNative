import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          height: 200,
          backgroundColor: "white",
          borderRadius: 6,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          source={require("./image/shop1.PNG")}
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
              width: 140,
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
              style={{ width: 121, height: 22, color: "green", marginLeft: 8 }}
            >
              Accepting Orders
            </Text>
          </View>
          <View
            style={{
              width: 115,
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
              style={{ width: 121, height: 22, color: "red", marginLeft: 8 }}
            >
              5-10 minutes
            </Text>
          </View>
          <Image
            source={require("./image/IconLocation.PNG")}
            style={{
              width: 20,
              height: 20,
              marginLeft: 20,
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
          <Text style={{ fontFamily: "inter", fontSize: 16, fontWeight: 700 }}>
            Kitanda Espresso & Acai-U District
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
            1121 NE 45 St
          </Text>
        </View>
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
