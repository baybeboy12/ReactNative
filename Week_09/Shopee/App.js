import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./screen/screen1";
import Screen2 from "./screen/screen2";
import Screen3 from "./screen/screen3";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  // const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Screen1"
    //       component={Screen1}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen name="Screen2" component={Screen2} />
    //     <Stack.Screen name="Screen3" component={Screen3} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Screen1 />
    <Provider store={store}>
      <Screen2 />
    </Provider>
  );
}
