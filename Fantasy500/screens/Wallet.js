import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Wallet = () => {
  return (
    <View style={styles.wallet}>
      <Text style={styles.wallet1}>WALLET</Text>
      <Text style={[styles.withdrawable, styles.textTypo]}>Withdrawable</Text>
      <Text style={[styles.transactionsUsd, styles.textTypo]}>
        Transactions (USD)
      </Text>
      <Text style={[styles.text, styles.textTypo]}>0.00</Text>
      <Text style={[styles.total, styles.totalTypo]}>TOTAL</Text>
      <Text style={[styles.statements, styles.totalTypo]}>Statements</Text>
      <View style={[styles.walletChild, styles.walletShadowBox]} />
      <Text style={[styles.withdraw, styles.depositTypo]}>Withdraw</Text>
      <Text style={[styles.deposit, styles.depositTypo]}>Deposit</Text>
      <View style={[styles.walletItem, styles.walletShadowBox]} />
      <Image
        style={styles.walletInner}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.ggprofileIcon}
        contentFit="cover"
        source={require("../assets/ggprofile.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.tablervsIcon}
        contentFit="cover"
        source={require("../assets/tablervs.png")}
      />
      <Image
        style={styles.mdihomeOutlineIcon}
        contentFit="cover"
        source={require("../assets/mdihomeoutline.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.polygonIcon}
        contentFit="cover"
        source={require("../assets/polygon-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  totalTypo: {
    height: 15,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  walletShadowBox: {
    height: 43,
    width: 158,
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
    borderRadius: Border.br_5xs,
    top: 201,
    position: "absolute",
  },
  depositTypo: {
    fontSize: FontSize.size_mini,
    top: 213,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wallet1: {
    top: 80,
    left: 73,
    fontSize: FontSize.size_16xl,
    width: 160,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  withdrawable: {
    width: 180,
    left: 29,
    top: 156,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  transactionsUsd: {
    top: 267,
    width: 197,
    left: 29,
    textAlign: "left",
  },
  text: {
    right: 26,
    textAlign: "right",
    width: 141,
    top: 156,
    fontSize: FontSize.size_xl,
  },
  total: {
    top: 162,
    left: 270,
    width: 67,
  },
  statements: {
    top: 273,
    left: 295,
    width: 72,
  },
  walletChild: {
    backgroundColor: Color.colorSeagreen_300,
    left: 29,
  },
  withdraw: {
    left: 72,
    width: 71,
    height: 9,
  },
  deposit: {
    left: 264,
    width: 57,
  },
  walletItem: {
    left: 210,
    backgroundColor: Color.colorSeagreen_400,
  },
  walletInner: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  rectangleView: {
    top: 786,
    left: 0,
    backgroundColor: Color.colorSeagreen_100,
    width: 393,
    height: 66,
    position: "absolute",
  },
  ggprofileIcon: {
    top: 804,
    left: 119,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.52%",
    width: "7.63%",
    top: "94.37%",
    right: "45.29%",
    bottom: "2.11%",
    left: "47.07%",
  },
  tablervsIcon: {
    top: 803,
    left: 251,
    width: 33,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  mdihomeOutlineIcon: {
    top: 801,
    left: 48,
    width: 37,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "3.05%",
    width: "6.87%",
    top: "94.48%",
    right: "12.21%",
    bottom: "2.46%",
    left: "80.92%",
  },
  polygonIcon: {
    top: 91,
    width: 22,
    height: 21,
    left: 29,
    position: "absolute",
  },
  wallet: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Wallet;
