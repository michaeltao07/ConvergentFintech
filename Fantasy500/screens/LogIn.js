import * as React from "react";
import { Text, StyleSheet, TextInput, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LogIn = () => {
  return (
    <View style={styles.logIn}>
      <Text style={styles.dontHaveAn}>Don’t have an account? Create one.</Text>
      <Text style={[styles.signIn, styles.signInTypo]}>Sign in</Text>
      <TextInput
        style={[styles.emailAddress, styles.password1Typo]}
        placeholder="Email Address"
        placeholderTextColor="#fff"
      />
      <Pressable style={styles.logInChild} />
      <View style={[styles.logInItem, styles.logShadowBox]} />
      <Text style={[styles.password, styles.logIn1Typo]}>Password</Text>
      <TextInput
        style={[styles.password1, styles.passwordPosition]}
        placeholder="Password"
        placeholderTextColor="#fff"
      />
      <View style={[styles.logInInner, styles.logShadowBox]} />
      <Text style={[styles.logIn1, styles.logIn1Typo]}>Log in</Text>
      <Text style={[styles.fantasy500, styles.signInTypo]}>Fantasy500</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.logInChild1}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={styles.frameView} />
    </View>
  );
};

const styles = StyleSheet.create({
  signInTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  password1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  logShadowBox: {
    height: 45,
    width: 277,
    borderColor: Color.colorLimegreen,
    backgroundColor: Color.colorSeagreen_400,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs,
    left: 66,
    position: "absolute",
  },
  logIn1Typo: {
    height: 24,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  passwordPosition: {
    left: 154,
    top: 510,
  },
  dontHaveAn: {
    top: 623,
    fontSize: FontSize.size_3xs,
    // textDecoration: "underline",
    width: 172,
    height: 11,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 123,
    position: "absolute",
  },
  signIn: {
    top: 343,
    left: 168,
    width: 68,
    fontSize: FontSize.size_xl,
  },
  emailAddress: {
    top: 432,
    left: 145,
    fontSize: FontSize.size_xl,
  },
  logInChild: {
    top: 567,
    backgroundColor: Color.colorSeagreen_200,
    borderColor: Color.colorSeagreen_200,
    width: 278,
    height: 46,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs,
    left: 66,
    position: "absolute",
  },
  logInItem: {
    top: 421,
  },
  password: {
    width: 95,
    left: 154,
    top: 510,
  },
  password1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  logInInner: {
    top: 499,
  },
  logIn1: {
    top: 577,
    left: 176,
    width: 58,
  },
  fantasy500: {
    top: 211,
    left: 132,
    fontSize: FontSize.size_16xl,
    width: 209,
  },
  ellipseIcon: {
    top: 197,
    left: 52,
    width: 70,
    height: 70,
    position: "absolute",
  },
  logInChild1: {
    top: 26,
    width: 147,
    height: 20,
    left: 123,
    position: "absolute",
  },
  frameView: {
    top: 250,
    left: 185,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  logIn: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default LogIn;
