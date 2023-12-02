import * as React from "react";
import { Text, StyleSheet, TextInput, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword}>
      <Text style={[styles.resetPassword, styles.passwordFlexBox]}>
        Reset Password
      </Text>
      <TextInput
        style={[styles.newPassword, styles.newTypo]}
        placeholder="Email Address"
        placeholderTextColor="#fff"
      />
      <Pressable style={styles.forgotPasswordChild} />
      <View style={[styles.forgotPasswordItem, styles.forgotShadowBox]} />
      <Text style={[styles.confirmNewPassword, styles.newTypo]}>
        Confirm New Password
      </Text>
      <View style={[styles.forgotPasswordInner, styles.forgotShadowBox]} />
      <Text style={[styles.returnToLogin, styles.returnToLoginLayout]}>
        Return to Login
      </Text>
      <Text style={[styles.fantasy500, styles.passwordFlexBox]}>
        Fantasy500
      </Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.forgotPasswordChild1, styles.returnToLoginLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  newTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  forgotShadowBox: {
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
  returnToLoginLayout: {
    width: 147,
    position: "absolute",
  },
  resetPassword: {
    top: 343,
    left: 116,
    width: 161,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    position: "absolute",
    fontSize: FontSize.size_xl,
  },
  newPassword: {
    top: 432,
    left: 140,
    position: "absolute",
  },
  forgotPasswordChild: {
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
  forgotPasswordItem: {
    top: 421,
  },
  confirmNewPassword: {
    top: 510,
    left: 95,
    width: 227,
    height: 23,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  forgotPasswordInner: {
    top: 499,
  },
  returnToLogin: {
    top: 578,
    left: 131,
    height: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  fantasy500: {
    top: 211,
    left: 132,
    fontSize: FontSize.size_16xl,
    width: 209,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    position: "absolute",
  },
  ellipseIcon: {
    top: 197,
    left: 52,
    width: 70,
    height: 70,
    position: "absolute",
  },
  forgotPasswordChild1: {
    top: 26,
    left: 123,
    height: 20,
  },
  forgotPassword: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default ForgotPassword;
