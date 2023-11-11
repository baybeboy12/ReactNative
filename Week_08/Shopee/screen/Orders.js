import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
export default function Welcome({ navigation }) {
  var route = useRoute();
  var [data, setData] = useState(route.params.shop);
  useEffect(() => {
    if (route.params?.shop) {
      setData(route.params.shop);
    }
  }, [route.params?.shop]);

  // useEffect(() => {
  //   calculateTotal();
  // }, [data.orders]);
  const calculateTotal = () => {
    let total = 0;
    data.orders.forEach((item) => {
      total += item.price;
    });
    return total;
  };
  const payNow = () => {
    const newData = {
      name: data.name,
      address: data.address,
      timeDelivery: data.timeDelivery,
      status: data.status,
      drinks: data.drinks,
      orders: [], // Đặt mảng orders là rỗng sau khi thanh toán
      image: data.image,
      id: data.id,
    };

    // Gửi yêu cầu PUT để cập nhật dữ liệu trên API
    fetch(`https://65434a7d01b5e279de20240f.mockapi.io/shopcafe/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((newData) => {
        setData(newData); // Cập nhật state với dữ liệu mới
      });
    alert("Thanh toans thanhf coong!!!");
    navigation.navigate("Shops Near Me", { shop: newData });
  };

  console.log(data);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "90%",
          height: 100,
          borderRadius: 8,
          backgroundColor: "#00BDD6",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <View style={{ marginTop: 30, marginLeft: 20 }}>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 16,
              fontWeight: 400,
              color: "white",
            }}
          >
            CAFE DELIVERY
          </Text>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 16,
              fontWeight: 400,
              color: "white",
              marginTop: 10,
            }}
          >
            Order #18
          </Text>
        </View>
        <View style={{ marginLeft: 140, justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 20,
              fontWeight: 400,
              color: "white",
              marginTop: 10,
            }}
          >
            $5
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          height: 100,
          borderRadius: 8,
          backgroundColor: "#8353E2",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
        }}
      >
        <View style={{ marginTop: 30, marginLeft: 20 }}>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 16,
              fontWeight: 400,
              color: "white",
            }}
          >
            CAFE
          </Text>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 16,
              fontWeight: 400,
              color: "white",
              marginTop: 10,
            }}
          >
            Order #18
          </Text>
        </View>
        <View style={{ marginLeft: 140, justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 20,
              fontWeight: 400,
              color: "white",
              marginTop: 10,
            }}
          >
            ${calculateTotal()}
          </Text>
        </View>
      </View>
      <View style={{ width: "90%", height: "40%", marginTop: 20 }}>
        <FlatList
          data={data.orders}
          renderItem={({ item }) => (
            <View
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "white",
                borderRadius: 4,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 60, height: "100%", alignSelf: "center" }}
              ></Image>
              <View style={{ height: "100%", width: "40%", marginLeft: 15 }}>
                <Text style={{ width: "100%" }}>{item.name}</Text>
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
                  <Text>${item.price}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Pressable>
                  <Image
                    source={require("./image/IconTru.PNG")}
                    style={{ height: 25, width: 25 }}
                  ></Image>
                </Pressable>

                <Pressable onPress={() => addDrinkToOrders(item)}>
                  <Image
                    source={require("./image/IconCong.PNG")}
                    style={{ height: 25, width: 25, marginLeft: 40 }}
                  ></Image>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>

      <Pressable
        style={{
          width: "90%",
          height: 44,
          borderRadius: 8,
          backgroundColor: "#EFB034",
          justifyContent: "center",
          marginTop: 30,
        }}
        onPress={() => payNow()}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "inter",
            fontSize: 16,
            fontWeight: 400,
            color: "white",
          }}
        >
          PAY NOW
        </Text>
      </Pressable>
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
