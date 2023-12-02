import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import Home from "./Home";
import VersusPage from "./VersusPage";
import Leaderboard from "./Leaderboard";
import Wallet from "./Wallet"
import Profile from "./Profile";
import Roster from "./Roster";

const ResponsibleGaming = ({navigation}) => {
  return (
    <View style={styles.responsibleGaming}>
      <Text style={styles.responsibility}>RESPONSIBILITY</Text>
      <Text style={styles.playWithResponsibility}>
        Play with responsibility and intent.
      </Text>
      <Text style={[styles.manageTheAmount, styles.manageTheAmountTypo]}>
        Manage the amount you play with alerts and set up limits
      </Text>
      <Text style={[styles.limitsOnPlay, styles.resourcesTypo]}>
        Limits on Play
      </Text>
      <Text style={styles.excludeYourselfFrom}>
        Exclude yourself from paid-entry contests
      </Text>
      <Text style={[styles.selfExculsion, styles.resourcesTypo]}>
        Self Exculsion
      </Text>
      <Text style={[styles.helpfulLinksAnd, styles.manageTheAmountTypo]}>
        Helpful links and Fantasy500’s policy on responsible play
      </Text>
      <Text style={[styles.resources, styles.resourcesTypo]}>Resources</Text>
      <Image
        style={styles.responsibleGamingItem}
        contentFit="cover"
        // source={require("../assets/polygon-11.png")}
      />
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
  manageTheAmountTypo: {
    width: 296,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: 30,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  resourcesTypo: {
    height: 25,
    width: 354,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 30,
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
  responsibility: {
    top: 81,
    left: 71,
    fontSize: FontSize.size_16xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 300,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  playWithResponsibility: {
    top: 132,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    width: 363,
    fontSize: FontSize.size_mini,
    left: 30,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  manageTheAmount: {
    top: 211,
  },
  limitsOnPlay: {
    top: 187,
  },
  excludeYourselfFrom: {
    top: 291,
    width: 310,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: 30,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  selfExculsion: {
    top: 267,
  },
  helpfulLinksAnd: {
    top: 353,
  },
  resources: {
    top: 329,
  },
  responsibleGamingChild: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  responsibleGamingItem: {
    top: 92,
    width: 22,
    height: 21,
    left: 30,
    position: "absolute",
  },
  responsibleGamingInner: {
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
  responsibleGaming: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default ResponsibleGaming;
