const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import DraftList from "./screens/DraftList";
import StockPage from "./screens/StockPage";
import StocksPage from "./screens/StocksPage";
import DraftFilled from "./screens/DraftFilled";
import Profile from "./screens/Profile"
import VersusPage from "./screens/VersusPage";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
             name="DraftList"
             component={DraftList}
             options={{ headerShown: false }}
           />
           <Stack.Screen
             name="StockPage"
             component={StockPage}
             options={{ headerShown: false }}
           />
           <Stack.Screen
             name="StocksPage"
             component={StocksPage}
             options={{ headerShown: false }}
           />
           <Stack.Screen
             name="DraftFilled"
             component={DraftFilled}
             options={{ headerShown: false }}
           />
           <Stack.Screen
             name="VersusPage"
             component={VersusPage}
             options={{ headerShown: false }}
           />
           <Stack.Screen
             name="Profile"
             component={Profile}
             options={{ headerShown: false }}
           />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
