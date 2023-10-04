import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as React from "react";
import { CheckBox } from "react-native-elements";
import { useState } from "react";

export default function Bai2_c() {
  const [isCheckedChuThuong, setIsCheckedChuThuong] = useState(false);
  const [isCheckedChuHoa, setIsCheckedChuHoa] = useState(false);
  const [isCheckedIncludeNumber, setIsCheckedIncludeNumber] = useState(false);
  const [isCheckedkitudacbiet, setIsCheckedkitudacbiet] = useState(false);

  const toggleCheckboxChuThuong = () => {
    setIsCheckedChuThuong(!isCheckedChuThuong);
  };

  const toggleCheckboxChuHoa = () => {
    setIsCheckedChuHoa(!isCheckedChuHoa);
  };
  const toggleCheckboxIncludeNumber = () => {
    setIsCheckedIncludeNumber(!isCheckedIncludeNumber);
  };
  const toggleCheckboxkitudacbiet = () => {
    setIsCheckedkitudacbiet(!isCheckedkitudacbiet);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewtong}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <TextInput style={styles.password}></TextInput>
        <View style={styles.chieudaipassword}>
          <View style={styles.viewCDPass}>
            <Text style={styles.textCDPass}>Password length</Text>
          </View>

          <TextInput style={styles.textInPutCDPass}></TextInput>
        </View>
        <View style={styles.chuthuong}>
          <Text style={styles.textchuthuong}>Include lower case letters</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={isCheckedChuThuong}
              onPress={toggleCheckboxChuThuong}
              checkedColor="black" // Màu khi checkbox được chọn
              uncheckedColor="white" // Màu khi checkbox chưa được chọn
            />
          </View>
        </View>
        <View style={styles.chuhoa}>
          <Text style={styles.textchuhoa}>Include upcase letters</Text>
          <View style={styles.checkboxchuhoaContainer}>
            <CheckBox
              checked={isCheckedChuHoa}
              onPress={toggleCheckboxChuHoa}
              checkedColor="black" // Màu khi checkbox được chọn
              uncheckedColor="white" // Màu khi checkbox chưa được chọn
            />
          </View>
        </View>
        <View style={styles.Includenumber}>
          <Text style={styles.textIncludenumber}>Include number</Text>
          <View style={styles.checkboxIncludenumberContainer}>
            <CheckBox
              checked={isCheckedIncludeNumber}
              onPress={toggleCheckboxIncludeNumber}
              checkedColor="black" // Màu khi checkbox được chọn
              uncheckedColor="white" // Màu khi checkbox chưa được chọn
            />
          </View>
        </View>
        <View style={styles.kitudacbiet}>
          <Text style={styles.textkitudacbiet}>Include special symbol</Text>
          <View style={styles.checkboxkitudacbietContainer}>
            <CheckBox
              checked={isCheckedkitudacbiet}
              onPress={toggleCheckboxkitudacbiet}
              checkedColor="black" // Màu khi checkbox được chọn
              uncheckedColor="white" // Màu khi checkbox chưa được chọn
            />
          </View>
        </View>
        <button style={styles.Button}>GENERATE PASSWORD </button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
  },
  viewtong: {
    width: 322,
    height: 605,
    backgroundColor: "#23235B",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  title: {
    width: 181,
    height: 64,
    color: "white",
    fontSize: 25,
    textAlign: "center",
    justifyContent: "center",
    lineHeight: 29.3,
    marginTop: 40,
  },
  password: {
    width: 280,
    height: 55,
    marginTop: 30,
    backgroundColor: "#151537",
    color: "white",
    paddingLeft: 10, // Thêm padding cho nội dung trong TextInput
  },
  chieudaipassword: {
    width: 280,
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  textCDPass: {
    width: 150,
    color: "white",
    fontSize: 20,
    lineHeight: 23.44,
    marginTop: 5,
  },
  textInPutCDPass: {
    width: 88,
    height: 33,
    backgroundColor: "white",
    marginLeft: 50,
    paddingLeft: 10, // Thêm padding cho nội dung trong TextInput
  },
  chuthuong: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  textchuthuong: {
    color: "white",
    fontSize: 20,
    lineHeight: 23.44,
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: 40,
    height: 25,
    marginLeft: 20,
  },
  chuhoa: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  textchuhoa: {
    color: "white",
    fontSize: 20,
    lineHeight: 23.44,
    marginTop: 5,
  },
  checkboxchuhoaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: 40,
    height: 25,
    marginLeft: 48,
  },
  Includenumber: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  textIncludenumber: {
    color: "white",
    fontSize: 20,
    lineHeight: 23.44,
    marginTop: 5,
  },
  checkboxIncludenumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: 40,
    height: 25,
    marginLeft: 100,
  },
  kitudacbiet: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  textkitudacbiet: {
    color: "white",
    fontSize: 20,
    lineHeight: 23.44,
    marginTop: 5,
  },
  checkboxkitudacbietContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: 40,
    height: 25,
    marginLeft: 42,
  },
  Button: {
    width: 269,
    height: 40,
    marginTop: 10,
    backgroundColor: "#3B3B98",
    color: "white",
    fontSize: 18,

    textAlign: "center",
  },
});
