import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, TextInput, Pressable, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import Home from "./Home";

const LaunchPage = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate(Home);
  };
  return (
    <View style={styles.launchPage}>
      <Image
        style={styles.launchPageChild}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={styles.launchPageChild}
        contentFit="cover"
        source={require("../assets/fLogo.png")}
      />
      <Pressable style={styles.signInTypo} onPress={handlePress} zIndex={1}>
      <Text style={[styles.signIn, styles.signInTypo]}>
        Sign in
        </Text>
      </Pressable>
      <Text style={[styles.launchPageItem, styles.launchShadowBox]} />
      <Text style={[styles.createAccount, styles.signInTypo]}>Create Account</Text>
      <Text style={[styles.forgotPassword, styles.fantasy500FlexBox]}>
        Forgot password?
      </Text>
      <Text style={[styles.launchPageInner, styles.launchShadowBox]} />
      <Text style={[styles.fantasy500, styles.fantasy500FlexBox]}>
        Fantasy500
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signInTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  launchShadowBox: {
    height: 57,
    width: 277,
    borderWidth: 1,
    borderColor: Color.colorLimegreen,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSeagreen_400,
    borderRadius: Border.br_5xs,
    left: 53,
    position: "absolute",
  },
  fantasy500FlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  launchPageChild: {
    top: 150,
    left: "23%",
    width: 201,
    height: 201,
    position: "absolute",
  },
  signIn: {
    top: 547,
    left: 158,
    color: "white",
  },
  launchPageItem: {
    top: 531,
  },
  createAccount: {
    top: 626,
    left: 118,
    color: "white",
  },
  forgotPassword: {
    top: 758,
    left: 123,
    fontSize: FontSize.size_mini,
    textDecoration: "underline",
    width: 132,
    height: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhite,
  },
  launchPageInner: {
    top: 609,
  },
  fantasy500: {
    top: 372,
    left: "23%",
    fontSize: FontSize.size_16xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 208,
  },
  ellipseIcon: {
    top: 25,
    left: 121,
    width: 147,
    height: 20,
    position: "absolute",
  },
  launchPage: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    // bottom:20,
  },
});

export default LaunchPage;
