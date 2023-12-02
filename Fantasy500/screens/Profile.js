import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

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
      <View style={styles.rectangleView} />
      <Image
        style={[styles.ggprofileIcon, styles.ggprofilePosition]}
        contentFit="cover"
        source={require("../assets/ggprofile.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.tablervsIcon, styles.tablervsPosition]}
        contentFit="cover"
        source={require("../assets/tablervs.png")}
      />
      <Image
        style={[styles.mdihomeOutlineIcon, styles.mdihomePosition]}
        contentFit="cover"
        source={require("../assets/mdihomeoutline.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Pressable
        style={styles.rectangleView}
        onPress={() => navigation.navigate("Profile")}
      />
      <Pressable
        style={styles.ggprofilePosition}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ggprofile.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition1}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.tablervsPosition}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/tablervs.png")}
        />
      </Pressable>
      <Pressable
        style={styles.mdihomePosition}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/mdihomeoutline.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition}
        onPress={() => navigation.navigate("Profile")}
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
  ggprofilePosition: {
    height: 30,
    width: 30,
    left: 120,
    top: 804,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  tablervsPosition: {
    height: 32,
    width: 33,
    left: 252,
    top: 803,
    position: "absolute",
  },
  mdihomePosition: {
    height: 36,
    width: 37,
    left: 49,
    top: 801,
    position: "absolute",
  },
  vectorPosition: {
    left: "81.17%",
    bottom: "2.46%",
    right: "11.96%",
    top: "94.48%",
    width: "6.87%",
    height: "3.05%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
  rectangleView: {
    top: 786,
    left: 1,
    backgroundColor: Color.colorSeagreen_100,
    width: 393,
    height: 66,
    position: "absolute",
  },
  ggprofileIcon: {
    overflow: "hidden",
  },
  vectorIcon: {
    left: "47.33%",
    bottom: "2.11%",
    right: "45.04%",
    top: "94.37%",
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
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorPosition1: {
    left: "47.33%",
    bottom: "2.11%",
    right: "45.04%",
    top: "94.37%",
    width: "7.63%",
    height: "3.52%",
    position: "absolute",
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
