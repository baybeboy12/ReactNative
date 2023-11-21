import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Welcome from "./screen/Welcome";
import Shops from "./screen/Shops";
import Drinks from "./screen/Drinks";
import Orders from "./screen/Orders";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const icon = ()=>{
    return(
        <Image source={require("./screen/image/IconSearch.PNG")}
        style={{width:30,height:30,marginRight:40}}></Image>
    );
}
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
        <Stack.Screen name="Shops Near Me" options={{
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 600,
            },
            headerRight:()=> icon()
          }} component={Shops} />
        <Stack.Screen name="Drinks" options={{
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 600,
            },
            headerRight:()=> icon()
          }} 
          component={Drinks} />
        <Stack.Screen name="Your orders" options={{
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 600,
            },
            headerRight:()=> icon()
          }} component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
