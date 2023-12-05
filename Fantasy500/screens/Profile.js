import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import Home from "./Home";
import VersusPage from "./VersusPage";
import Leaderboard from "./Leaderboard";
import Wallet from "./Wallet"
import LaunchPage from "./LaunchPage";
import InviteFriends from "./InviteFriends";
import ResponsibleGaming from "./ResponsibleGaming";
import Roster from "./Roster";

const Profile = ({navigation}) => {

  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/ellipse-23.png")}
      />
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/sriya.png")}
      />
      <Text style={styles.sriyachip}>sriyachip</Text>
      <Text style={styles.balance000}>Balance: $0.00</Text>
      <Image
        style={styles.profileItem}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Pressable onPress={() => navigation.navigate(Wallet)}>
      <Text style={[styles.wallet, styles.walletTypo]}>Wallet</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(Home)}>
      <Text style={[styles.accountAndSettings, styles.walletTypo]}>
        Account and Settings
      </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(InviteFriends)}>
      <Text style={[styles.friends, styles.walletTypo]}>Friends</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(ResponsibleGaming)}>
      <Text style={[styles.responsibleGaming, styles.walletTypo]}>
        Responsible Gaming
      </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(LaunchPage)}>
      <Text style={[styles.logOut, styles.walletTypo]}>Log out</Text>
      </Pressable>
      <View style={styles.materialSymbolsleaderboardO} />
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
        onPress={() => navigation.navigate(Roster)}
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
  walletTypo: {
    width: 354,
    fontSize: FontSize.size_lg,
    left: 23,
    height: 25,
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
    borderRadius: 100,
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
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
