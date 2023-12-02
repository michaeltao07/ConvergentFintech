import * as React from "react";
import { Text, StyleSheet, Pressable, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreateAccount = () => {
  return (
    <View style={styles.createAccount}>
      <Text style={[styles.fantasy500, styles.fantasy500FlexBox]}>
        Fantasy500
      </Text>
      <Image
        style={styles.createAccountChild}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.alreadyHaveAn, styles.nameTypo1]}>
        Already have an account? Sign in.
      </Text>
      <Image
        style={styles.createAccountItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <TextInput
        style={[styles.name, styles.nameTypo]}
        placeholder="Name"
        placeholderTextColor="#fff"
      />
      <Text style={[styles.createAccount1, styles.nameTypo]}>
        Create Account
      </Text>
      <Pressable style={styles.createAccountInner} />
      <TextInput
        style={[styles.emailAddress, styles.nameTypo]}
        placeholder="Email Address"
        placeholderTextColor="#fff"
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <View style={[styles.createAccountChild1, styles.rectangleLayout]} />
      <Text style={[styles.password, styles.signUpTypo]}>Password</Text>
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
      <Text style={[styles.password, styles.signUpTypo]}>Password</Text>
      <TextInput style={[styles.rectangleTextinput, styles.rectangleLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  fantasy500FlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  nameTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  nameTypo: {
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleLayout: {
    height: 45,
    width: 277,
    borderColor: Color.colorLimegreen,
    backgroundColor: Color.colorSeagreen_400,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xs,
    left: 58,
    position: "absolute",
  },
  signUpTypo: {
    height: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  fantasy500: {
    top: 211,
    left: 132,
    fontSize: FontSize.size_16xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 209,
    position: "absolute",
  },
  createAccountChild: {
    top: 197,
    left: 52,
    width: 70,
    height: 70,
    position: "absolute",
  },
  alreadyHaveAn: {
    top: 713,
    left: 115,
    fontSize: FontSize.size_3xs,
    textDecoration: "underline",
    width: 163,
    height: 11,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  createAccountItem: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  name: {
    top: 437,
    left: 165,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  createAccount1: {
    top: 341,
    left: 119,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 152,
    textAlign: "left",
    color: Color.colorWhite,
  },
  createAccountInner: {
    top: 660,
    backgroundColor: Color.colorSeagreen_200,
    borderColor: Color.colorSeagreen_200,
    width: 278,
    height: 46,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xs,
    left: 58,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  emailAddress: {
    top: 515,
    left: 137,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  rectangleView: {
    top: 504,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 277,
    borderColor: Color.colorLimegreen,
    backgroundColor: Color.colorSeagreen_400,
  },
  createAccountChild1: {
    top: 426,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 277,
    borderColor: Color.colorLimegreen,
    backgroundColor: Color.colorSeagreen_400,
  },
  password: {
    top: 593,
    left: 146,
    width: 95,
  },
  signUp: {
    top: 671,
    left: 160,
    width: 74,
  },
  rectangleTextinput: {
    top: 582,
    shadowColor: "#62c08e",
    shadowRadius: 1396.08,
    elevation: 1396.08,
  },
  createAccount: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default CreateAccount;
