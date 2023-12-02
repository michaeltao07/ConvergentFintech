const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import CreateAccount from "./screens/CreateAccount";
import PlayersStocks from "./components/PlayersStocks";
import Leaderboard from "./screens/Leaderboard";
import DraftList from "./screens/DraftList";
import VersusPage from "./screens/VersusPage";
import StocksPage from "./screens/StocksPage";
import StockPage from "./screens/StockPage";
import ResponsibleGaming from "./screens/ResponsibleGaming";
import InviteFriends from "./screens/InviteFriends";
import Profile from "./screens/Profile";
import Wallet from "./screens/Wallet";
import Home from "./screens/Home";
import Wallet1 from "./screens/Wallet1";
import LogIn from "./screens/LogIn";
import LaunchPage from "./screens/LaunchPage";

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
              name="VersusPage"
              component={VersusPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StocksPage"
              component={StocksPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StockPage"
              component={StockPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResponsibleGaming"
              component={ResponsibleGaming}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InviteFriends"
              component={InviteFriends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wallet"
              component={Wallet}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="Wallet1"
              component={Wallet1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaunchPage"
              component={LaunchPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
