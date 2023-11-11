import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screen/Welcome";
import Shops from "./screen/Shops";
import Drinks from "./screen/Drinks";
import Orders from "./screen/Orders";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Shops Near Me" component={Shops} />
        <Stack.Screen name="Drinks" component={Drinks} />
        <Stack.Screen name="Your orders" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
