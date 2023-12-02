import * as React from "react";
import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Profile from "./Profile";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Wallet from "./Wallet"
import Roster from "./Roster";

const VersusPage = ({navigation}) => {
  return (
    <View style={styles.versuspage}>
      <Text style={[styles.versus, styles.matchTypo]}>VERSUS</Text>
      <Text style={[styles.versus, styles.matchTypo]}>VERSUS</Text>
      <Image
        style={[styles.versuspageChild, styles.versuspageChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.versuspageItem}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={styles.text}>?</Text>
      <View
        style={styles.rectanglePressable1}
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
      <View right={10}>
      <View style={styles.versuspageChild1} />
      <Text style={[styles.match, styles.matchTypo]}>Match</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.versuspageChild2, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>53%</Text>
      <Text style={[styles.text2, styles.textTypo]}>47%</Text>
      <View style={styles.lineView} />
      <Text style={[styles.teamSriya, styles.teamTypo]}>Team Sriya</Text>
      <Text style={[styles.win, styles.winTypo]}>win</Text>
      <Text style={[styles.win1, styles.winTypo]}>win</Text>
      <Text style={[styles.sriyachip, styles.opponentTypo]}>@sriyachip</Text>
      <Text style={[styles.teamOpp, styles.teamTypo]}>Team Opp</Text>
      <Text style={[styles.opponent, styles.opponentTypo]}>@opponent</Text>
      <Text style={[styles.yetToPlay, styles.yetTypo]}>Yet to play (9)</Text>
      <Text style={[styles.starters, styles.week10Typo]}>Starters</Text>
      <Text style={[styles.week10, styles.week10Typo]}> Week 10</Text>
      <Text style={[styles.yetToPlay1, styles.yetTypo]}>Yet to play (9)</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.versuspageChildShadowBox2]}
      />
      <Text style={[styles.appleInc, styles.applePosition1]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl, styles.nasdaqLayout]}>NASDAQ: APPL</Text>
      <Pressable
        style={[styles.versuspageChild3, styles.versuspageChildShadowBox2]}
      />
      <Text style={[styles.appleInc1, styles.appleTypo3]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl1, styles.nasdaqPosition3]}>
        NASDAQ: APPL
      </Text>
      <Pressable
        style={[styles.versuspageChild4, styles.versuspageChildShadowBox2]}
      />
      <Text style={[styles.appleInc2, styles.appleTypo2]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl2, styles.nasdaqPosition2]}>
        NASDAQ: APPL
      </Text>
      <Pressable
        style={[styles.versuspageChild5, styles.versuspageChildShadowBox2]}
      />
      <Text style={[styles.appleInc3, styles.appleTypo1]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl3, styles.nasdaqPosition1]}>
        NASDAQ: APPL
      </Text>
      <Pressable
        style={[styles.versuspageChild6, styles.versuspageChildShadowBox2]}
      />
      <Text style={[styles.appleInc4, styles.appleTypo]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl4, styles.nasdaqPosition]}>
        NASDAQ: APPL
      </Text>
      <Pressable
        style={[styles.versuspageChild7, styles.versuspageChildShadowBox1]}
      />
      <Text style={[styles.appleInc5, styles.applePosition]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl5, styles.applePosition]}>
        NASDAQ: APPL
      </Text>
      <Pressable
        style={[styles.versuspageChild8, styles.versuspageChildShadowBox1]}
      />
      <Text style={[styles.appleInc6, styles.applePosition]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl6, styles.applePosition]}>
        NASDAQ: APPL
      </Text>
      <Pressable
        style={[styles.versuspageChild9, styles.versuspageChildShadowBox1]}
      />
      <Text style={[styles.appleInc7, styles.applePosition]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl7, styles.applePosition]}>
        NASDAQ: APPL
      </Text>
      <Pressable
        style={[styles.versuspageChild10, styles.versuspageChildShadowBox1]}
      />
      <Text style={[styles.appleInc8, styles.applePosition]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl8, styles.applePosition]}>
        NASDAQ: APPL
      </Text>
      <Pressable
        style={[styles.versuspageChild11, styles.versuspageChildShadowBox1]}
      />
      <Text style={[styles.appleInc9, styles.applePosition]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl9, styles.applePosition]}>
        NASDAQ: APPL
      </Text>
      <Pressable
        style={[styles.versuspageChild12, styles.versuspageChildShadowBox2]}
      />
      <Text style={[styles.appleInc10, styles.applePosition1]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl10, styles.nasdaqLayout]}>
        NASDAQ: APPL
      </Text>
      <Text style={[styles.t, styles.tTypo]}>T</Text>
      <View
        style={[styles.versuspageChild13, styles.versuspageChildShadowBox]}
      />
      <Text style={[styles.t1, styles.tTypo]}>T</Text>
      <View
        style={[styles.versuspageChild14, styles.versuspageChildShadowBox]}
      />
      <Text style={[styles.h, styles.tTypo]}>F</Text>
      <View
        style={[styles.versuspageChild15, styles.versuspageChildShadowBox]}
      />
      <Text style={[styles.h1, styles.tTypo]}>H</Text>
      <View
        style={[styles.versuspageChild16, styles.versuspageChildShadowBox]}
      />
      <Text style={[styles.h2, styles.tTypo]}>F</Text>
      <View
        style={[styles.versuspageChild17, styles.versuspageChildShadowBox]}
      />
      <Image
        style={[styles.polygonIcon, styles.polygonIconLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Image
        style={[styles.versuspageChild18, styles.polygonIconLayout]}
        contentFit="cover"
        source={require("../assets/polygon-2.png")}
      />
      </View>
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
  rectanglePressable1: {
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
  matchTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  versuspageChildLayout: {
    height: 36,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIconPosition: {
    top: 177,
    height: 36,
    width: 36,
    position: "absolute",
  },
  textTypo: {
    width: 77,
    top: 226,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_16xl,
    position: "absolute",
  },
  teamTypo: {
    height: 20,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  winTypo: {
    width: 27,
    height: 25,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  opponentTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    top: 199,
    height: 25,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  yetTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    fontSize: FontSize.size_sm,
    top: 323,
    width: 95,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  week10Typo: {
    top: 370,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  versuspageChildShadowBox2: {
    height: 52,
    width: 139,
    backgroundColor: Color.colorMediumseagreen,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs,
    left: 28,
    position: "absolute",
  },
  applePosition1: {
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  nasdaqLayout: {
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
  },
  appleTypo3: {
    top: 466,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqPosition3: {
    top: 480,
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
  },
  appleTypo2: {
    top: 530,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqPosition2: {
    top: 544,
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
  },
  appleTypo1: {
    top: 594,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqPosition1: {
    top: 608,
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
  },
  appleTypo: {
    top: 658,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqPosition: {
    top: 672,
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
  },
  versuspageChildShadowBox1: {
    left: 226,
    height: 52,
    width: 139,
    backgroundColor: Color.colorMediumseagreen,
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
  applePosition: {
    left: 239,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  tTypo: {
    width: 9,
    left: 192,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 25,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  versuspageChildShadowBox: {
    width: 32,
    borderWidth: 1,
    borderColor: Color.colorLimegreen,
    backgroundColor: Color.colorSeagreen_400,
    left: 181,
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
    height: 32,
    position: "absolute",
  },
  polygonIconLayout: {
    width: 11,
    top: 375,
    height: 9,
    position: "absolute",
  },
  versus: {
    top: 69,
    left: 79,
    width: 143,
    fontSize: FontSize.size_16xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  versuspageChild: {
    top: 72,
    left: 33,
    width: 36,
    height: 36,
  },
  versuspageItem: {
    top: 84,
    left: 227,
    width: 22,
    height: 22,
    position: "absolute",
  },
  text: {
    top: 86,
    left: 236,
    fontSize: FontSize.size_5xs,
    width: 4,
    height: 25,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  versuspageInner: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  rectangleView: {
    top: 786,
    left: 0,
    width: 393,
    height: 66,
    backgroundColor: Color.colorSeagreen_100,
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
  versuspageChild1: {
    top: 166,
    width: 337,
    height: 145,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs,
    left: 28,
    backgroundColor: Color.colorSeagreen_100,
    position: "absolute",
  },
  match: {
    top: 133,
    left: 166,
    fontSize: FontSize.size_xl,
    width: 62,
  },
  ellipseIcon: {
    left: 39,
  },
  versuspageChild2: {
    left: 319,
  },
  text1: {
    left: 77,
    color: Color.colorLimegreen,
  },
  text2: {
    left: 245,
    color: Color.colorSalmon,
  },
  lineView: {
    top: 178,
    left: 197,
    borderColor: Color.colorDarkseagreen,
    borderRightWidth: 0.5,
    width: 1,
    height: 122,
    borderStyle: "solid",
    position: "absolute",
  },
  teamSriya: {
    top: 182,
    left: 80,
    width: 109,
  },
  win: {
    top: 261,
    left: 101,
    color: Color.colorLimegreen,
  },
  win1: {
    top: 260,
    left: 270,
    color: Color.colorSalmon,
  },
  sriyachip: {
    left: 81,
    width: 61,
  },
  teamOpp: {
    top: 181,
    right: 81,
    width: 74,
  },
  opponent: {
    left: 255,
    width: 57,
  },
  yetToPlay: {
    width: 95,
    left: 28,
  },
  starters: {
    width: 58,
    left: 28,
  },
  week10: {
    left: 273,
    width: 95,
  },
  yetToPlay1: {
    width: 95,
    left: 270,
  },
  rectanglePressable: {
    top: 395,
  },
  appleInc: {
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    top: 402,
  },
  nasdaqAppl: {
    top: 416,
    width: 85,
    fontFamily: FontFamily.interRegular,
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  versuspageChild3: {
    top: 459,
  },
  appleInc1: {
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  nasdaqAppl1: {
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  versuspageChild4: {
    top: 523,
  },
  appleInc2: {
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  nasdaqAppl2: {
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  versuspageChild5: {
    top: 587,
  },
  appleInc3: {
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  nasdaqAppl3: {
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  versuspageChild6: {
    top: 651,
  },
  appleInc4: {
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  nasdaqAppl4: {
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  versuspageChild7: {
    top: 395,
  },
  appleInc5: {
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    top: 402,
  },
  nasdaqAppl5: {
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
    top: 416,
  },
  versuspageChild8: {
    top: 459,
  },
  appleInc6: {
    top: 466,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl6: {
    top: 480,
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
  },
  versuspageChild9: {
    top: 523,
  },
  appleInc7: {
    top: 530,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl7: {
    top: 544,
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
  },
  versuspageChild10: {
    top: 587,
  },
  appleInc8: {
    top: 594,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl8: {
    top: 608,
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
  },
  versuspageChild11: {
    top: 651,
  },
  appleInc9: {
    top: 658,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl9: {
    top: 672,
    width: 85,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLimegreen,
  },
  versuspageChild12: {
    top: 851,
  },
  appleInc10: {
    top: 858,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl10: {
    top: 872,
    height: 25,
    left: 41,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  t: {
    top: 413,
  },
  versuspageChild13: {
    top: 405,
  },
  t1: {
    top: 541,
  },
  versuspageChild14: {
    top: 533,
  },
  h: {
    top: 605,
  },
  versuspageChild15: {
    top: 597,
  },
  h1: {
    top: 669,
  },
  versuspageChild16: {
    top: 661,
  },
  h2: {
    top: 477,
  },
  versuspageChild17: {
    top: 469,
  },
  polygonIcon: {
    left: 271,
  },
  versuspageChild18: {
    left: 355,
  },
  versuspage: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default VersusPage;
