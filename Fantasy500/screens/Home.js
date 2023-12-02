import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={[styles.homeChild, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.homeItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={styles.home1}>HOME</Text>
      <View style={[styles.homeInner, styles.homeChildShadowBox1]} />
      <View style={styles.rectangleView} />
      <View style={[styles.homeChild1, styles.homeChildShadowBox1]} />
      <View style={[styles.homeChild2, styles.homeChildShadowBox1]} />
      <View style={[styles.homeChild3, styles.homeChildShadowBox]} />
      <Text style={[styles.joinPublicLeague, styles.leagueTypo]}>
        Join Public League
      </Text>
      <Text style={[styles.createNewLeague, styles.leagueTypo]}>
        Create New League
      </Text>
      <View style={[styles.homeChild4, styles.homeChildShadowBox]} />
      <View style={styles.homeChild5} />
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
        style={[styles.mdihomeOutlineIcon, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/mdihomeoutline.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildLayout: {
    height: 36,
    position: "absolute",
  },
  homeChildShadowBox1: {
    height: 113,
    width: 337,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs,
    left: 28,
    position: "absolute",
  },
  homeChildShadowBox: {
    height: 48,
    width: 158,
    borderWidth: 1,
    borderColor: Color.colorLimegreen,
    borderStyle: "solid",
    backgroundColor: Color.colorSeagreen_400,
    top: 669,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  leagueTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 684,
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
  homeChild: {
    top: 80,
    left: 25,
    width: 36,
  },
  homeItem: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  home1: {
    top: 79,
    left: 79,
    fontSize: FontSize.size_16xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 190,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  homeInner: {
    top: 155,
  },
  rectangleView: {
    top: 279,
    height: 114,
    width: 337,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs,
    left: 28,
    position: "absolute",
  },
  homeChild1: {
    top: 404,
  },
  homeChild2: {
    top: 528,
  },
  homeChild3: {
    left: 28,
    height: 48,
    width: 158,
    borderWidth: 1,
    borderColor: Color.colorLimegreen,
    borderStyle: "solid",
    backgroundColor: Color.colorSeagreen_400,
    top: 669,
  },
  joinPublicLeague: {
    left: 44,
    width: 126,
    height: 10,
  },
  createNewLeague: {
    left: 221,
    width: 132,
    height: 19,
  },
  homeChild4: {
    left: 207,
  },
  homeChild5: {
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
  home: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Home;
