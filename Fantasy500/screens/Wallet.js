import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import Profile from "./Profile";
import VersusPage from "./VersusPage";
import Leaderboard from "./Leaderboard";
import Home from "./Home"

const Wallet = ({navigation}) => {
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
      <View
        style={styles.rectanglePressable}
      />

     <Pressable
        style={styles.mdihomePosition}
        onPress={() => navigation.navigate(Home)}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/mdihomeoutline.png")}
        />
      </Pressable> 
      <Pressable
        style={styles.ggprofilePosition}
        onPress={() => navigation.navigate(Profile)}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ggprofile.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition1}
        onPress={() => navigation.navigate(Wallet)}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.tablervsPosition}
        onPress={() => navigation.navigate(VersusPage)}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/tablervs.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition}
        onPress={() => navigation.navigate(Leaderboard)}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
 
      <Image
        style={styles.polygonIcon}
        contentFit="cover"
        // source={require("../assets/polygon-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ggprofilePosition: {
    height: 30,
    width: 30,
    left: 104,
    top: 758,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  tablervsPosition: {
    height: 32,
    width: 33,
    left: 245,
    top: 758,
    position: "absolute",
  },
  mdihomePosition: {
    width: 37,
    left: 27,
    top: 755,
    height: 36,
    position: "absolute",
  },
  vectorPosition: {
    width: 30,
    left: 317,
    top: 760,
    height: 27,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
ggprofileIcon: {
    overflow: "hidden",
  },
  vectorIcon: {
    left: "47.07%",
    bottom: "2.11%",
    right: "45.29%",
    top: "4.37%",
    width: "7.63%",
    height: "3.52%",
    position: "absolute",
    overflow: "hidden",
  },
  tablervsIcon: {
    overflow: "hidden",
  },
  mdihomeOutlineIcon: {
    overflow: "hidden",
  },
  vectorIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectanglePressable: {
    top: 746,
    left: 0,
    backgroundColor: Color.colorSeagreen_100,
    width: 393,
    height: 66,
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorPosition1: {
    width: 30,
    left: "47%",
    top: 760,
    height: 27,
    position: "absolute",
  },
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
    left: 255,
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
    height: 20,
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
