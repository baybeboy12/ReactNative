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
          height: 60,
          backgroundColor: "white",
          borderRadius: 4,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./image/shop1.PNG")}
          style={{ width: 60, height: "100%", alignSelf: "center" }}
        ></Image>
        <View style={{ height: "100%", width: "20%", marginLeft: 15 }}>
          <Text>Milk</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: 22,
            }}
          >
            <Image
              source={require("./image/IconMoney.PNG")}
              style={{ width: 15, height: 15, alignSelf: "center" }}
            ></Image>
            <Text>$20</Text>
          </View>
        </View>
        <View>
          <Pressable>
            <Image
              source={require("./image/IconTru.PNG")}
              style={{ height: 25, width: 25 }}
            ></Image>
          </Pressable>

          <Pressable>
            <Image
              source={require("./image/IconCong.PNG")}
              style={{ height: 25, width: 25 }}
            ></Image>
          </Pressable>
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
