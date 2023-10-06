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
  const [passwordLength, setPasswordLength] = useState(8); // Độ dài mặc định của mật khẩu

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

  const generatePassword = () => {
    const charset = [];

    if (isCheckedChuThuong) {
      charset.push("abcdefghijklmnopqrstuvwxyz");
    }
    if (isCheckedChuHoa) {
      charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (isCheckedIncludeNumber) {
      charset.push("0123456789");
    }
    if (isCheckedkitudacbiet) {
      charset.push("!@#$%^&*()_+-=[]{}|;:,.<>?");
    }

    if (charset.length === 0) {
      alert("Vui lòng chọn ít nhất một tùy chọn cho mật khẩu.");
      return;
    }

    const password = [];
    for (let i = 0; i < passwordLength; i++) {
      const randomCharsetIndex = Math.floor(Math.random() * charset.length);
      const selectedCharset = charset[randomCharsetIndex];
      const randomCharIndex = Math.floor(
        Math.random() * selectedCharset.length
      );
      const randomChar = selectedCharset[randomCharIndex];
      password.push(randomChar);
    }

    return password.join("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewtong}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <TextInput
          style={styles.password}
          value={generatePassword()}
          editable={false}
        />
        <View style={styles.chieudaipassword}>
          <View style={styles.viewCDPass}>
            <Text style={styles.textCDPass}>Password length</Text>
            <TextInput
              style={styles.textInPutCDPass}
              value={passwordLength.toString()}
              onChangeText={(text) => setPasswordLength(parseInt(text) || 0)}
            />
          </View>
        </View>
        <View style={styles.chuthuong}>
          <Text style={styles.textchuthuong}>Include lower case letters</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={isCheckedChuThuong}
              onPress={toggleCheckboxChuThuong}
              checkedColor="black"
              uncheckedColor="white"
            />
          </View>
        </View>
        <View style={styles.chuhoa}>
          <Text style={styles.textchuhoa}>Include upcase letters</Text>
          <View style={styles.checkboxchuhoaContainer}>
            <CheckBox
              checked={isCheckedChuHoa}
              onPress={toggleCheckboxChuHoa}
              checkedColor="black"
              uncheckedColor="white"
            />
          </View>
        </View>
        <View style={styles.Includenumber}>
          <Text style={styles.textIncludenumber}>Include number</Text>
          <View style={styles.checkboxIncludenumberContainer}>
            <CheckBox
              checked={isCheckedIncludeNumber}
              onPress={toggleCheckboxIncludeNumber}
              checkedColor="black"
              uncheckedColor="white"
            />
          </View>
        </View>
        <View style={styles.kitudacbiet}>
          <Text style={styles.textkitudacbiet}>Include special symbol</Text>
          <View style={styles.checkboxkitudacbietContainer}>
            <CheckBox
              checked={isCheckedkitudacbiet}
              onPress={toggleCheckboxkitudacbiet}
              checkedColor="black"
              uncheckedColor="white"
            />
          </View>
        </View>
        <Button
          title="GENERATE PASSWORD"
          onPress={() => {}}
          style={styles.Button}
        />
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
    paddingLeft: 10,
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
    paddingLeft: 10,
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
