import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Text style={styles.sriyachip}>sriyachip</Text>
      <Text style={styles.balance000}>Balance: $0.00</Text>
      <Image
        style={styles.profileItem}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Text style={[styles.wallet, styles.walletTypo]}>Wallet</Text>
      <Text style={[styles.accountAndSettings, styles.walletTypo]}>
        Account and Settings
      </Text>
      <Text style={[styles.friends, styles.walletTypo]}>Friends</Text>
      <Text style={[styles.responsibleGaming, styles.walletTypo]}>
        Responsible Gaming
      </Text>
      <Text style={[styles.logOut, styles.walletTypo]}>Log out</Text>
      <Image
        style={styles.profileInner}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={styles.materialSymbolsleaderboardO} />
    </View>
  );
};

const styles = StyleSheet.create({
  walletTypo: {
    width: 354,
    fontSize: FontSize.size_lg,
    left: 23,
    height: 15,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  profileChild: {
    top: 101,
    left: 104,
    width: 186,
    height: 186,
    position: "absolute",
  },
  sriyachip: {
    top: 301,
    left: 129,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 136,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  balance000: {
    top: 345,
    left: 131,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    width: 134,
    height: 15,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  profileItem: {
    top: 392,
    left: 13,
    width: 370,
    height: 2,
    position: "absolute",
  },
  wallet: {
    top: 419,
  },
  accountAndSettings: {
    top: 459,
  },
  friends: {
    top: 499,
  },
  responsibleGaming: {
    top: 539,
  },
  logOut: {
    top: 579,
  },
  profileInner: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  materialSymbolsleaderboardO: {
    top: 609,
    left: 139,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Profile;
