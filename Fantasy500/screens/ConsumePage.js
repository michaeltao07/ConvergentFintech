import React, {useState} from "react";
import { Text, StyleSheet, Pressable, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import StockPage from "./StockPage";
import Home from './Home';
import Profile from "./Profile";
import Leaderboard from "./Leaderboard";
import VersusPage from "./VersusPage";
import Roster from "./Roster";

const ConsumePage = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate(StockPage);
  };
  return (
    <View style={styles.stockpage}>
      <Text style={styles.picks}>PICKS</Text>
      <Text style={[styles.stocks, styles.textTypo]}>Stocks</Text>
      <Text style={styles.stockOptionsFor}>
        Stock options for the consumer industry
      </Text>
      <Text style={styles.technology}>Technology</Text>
      <TouchableOpacity onPress={handlePress} style={styles.stockpageChild} />
      <View style={[styles.stockpageItem, styles.stockpageChildLayout]} />
      <Pressable style={[styles.stockpageInner, styles.stockpageShadowBox]} />
      <Text style={[styles.realEstate, styles.realEstateTypo]}>
        Real Estate
      </Text>
      <Text style={[styles.healthcare, styles.realEstateTypo]}>Healthcare</Text>
      
      <View style={[styles.rectangleView, styles.rectangleShadowBox]} />
      <Pressable
        style={[styles.rectangleShadowBox, styles.ooba]}
      />
      <Pressable
        style={[styles.stockpageChild1, styles.stockpageChildShadowBox456]}
      />
      <Text style={styles.industry4}>Consumer</Text>
      <Text style={[styles.industry5, styles.industryTypo]}>Energy</Text>
      <Text style={[styles.industry6, styles.industryTypo]}>Industrial</Text>
      <Pressable
        style={[styles.stockpageChild2, styles.stockpageChildShadowBox4]}
      />
      <Pressable
        style={[styles.stockpageChild3, styles.stockpageChildShadowBox4]}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout5]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout5]}
        contentFit="cover"
        source={require("../assets/fLogo.png")}
      />
      <Image
        style={styles.stockpageChild4}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>?</Text>
      <Text style={[styles.appleInc, styles.appleTypo]}>McDonald's Corp.</Text>
      <Text style={[styles.nasdaqAppl, styles.nasdaqTypo3]}>NASDAQ: MCD</Text>
          <Image
        style={[styles.image1Icon]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Consumption/MCDnoNum.png")}
        />
      <TouchableOpacity onPress={handlePress}>
      <View style={[styles.frameView, styles.frameViewPosition]} />
      <Pressable style={[styles.stockpageChild5, styles.stockpageShadowBox]} />
      <Text style={[styles.appleInc1, styles.appleTypo]}>PepsiCo Inc.</Text>
      <Text style={[styles.nasdaqAppl1, styles.nasdaqTypo3]}>NASDAQ: PEP</Text>
      <Image
        style={[styles.image1Icon1]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Consumption/PEPnoNum.png")}
      />
      </TouchableOpacity>
      <View style={[styles.stockpageChild6, styles.stockpageChildLayout]} />
      <Pressable
        style={[styles.stockpageChild7, styles.stockpageChildShadowBox3]}
      />
      <Text style={[styles.appleInc2, styles.appleInc2Position]}>
        Coca-Cola Co
      </Text>
      <Text style={[styles.nasdaqAppl2, styles.nasdaqPosition]}>
        NASDAQ: KO
      </Text>
      <Image
        style={[styles.image1Icon, styles.down1]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Consumption/KOnoNum.png")}
      />
      <View style={[styles.stockpageChild8, styles.stockpageChildLayout]} />
      <Pressable
        style={[styles.stockpageChild9, styles.stockpageChildShadowBox3]}
      />
      <Text style={[styles.appleInc3, styles.appleInc3Position]}>
        Procter & Gamble Co
      </Text>
      <Text style={[styles.nasdaqAppl3, styles.appleInc3Position]}>
        NASDAQ: PG
      </Text>
      <Image
        style={[styles.image1Icon1, styles.down1]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Consumption/PGnoNum.png")}
      />
      <View style={[styles.stockpageChild10, styles.stockpageChildLayout]} />
      <View
        style={[styles.stockpageChild11, styles.stockpageChildShadowBox2]}
      />
      <Text style={[styles.appleInc4, styles.appleIconPosition2]}>
        Carnival Corp.
      </Text>
      <Text style={[styles.nasdaqAppl4, styles.nasdaqTypo2]}>NASDAQ: CCL</Text>
      <Image
        style={[styles.image1Icon, styles.down2]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Healthcare/UNDnoNum.png")}
      />
      <View style={[styles.stockpageChild12, styles.stockpageChildPosition]} />
      <Pressable
        style={[styles.stockpageChild13, styles.stockpageChildShadowBox2]}
      />
      <Text style={[styles.appleInc5, styles.appleIconPosition2]}>
        Royal Caribbean Group
      </Text>
      <Text style={[styles.nasdaqAppl5, styles.nasdaqTypo2]}>NASDAQ: RCL</Text>
      <Image
        style={[styles.image1Icon1, styles.down2]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Finance/VnoNum.png")}
      />
      <View style={[styles.stockpageChild14, styles.stockpageChildLayout]} />
      <Pressable
        style={[styles.stockpageChild15, styles.stockpageChildShadowBox1]}
      />
      <Text style={[styles.appleInc6, styles.appleIconPosition1]}>
        Walmart Inc.
      </Text>
      <Text style={[styles.nasdaqAppl6, styles.nasdaqTypo1]}>NASDAQ: WMT</Text>
      <Image
        style={[styles.image1Icon, styles.down3]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Healthcare/JNJnoNum.png")}
      />
      <View style={[styles.stockpageChild16, styles.frameViewPosition]} />
      <Pressable
        style={[styles.stockpageChild17, styles.stockpageChildShadowBox1]}
      />
      <Text style={[styles.appleInc7, styles.appleIconPosition1]}>
        Monster Beverage Corp.
      </Text>
      <Text style={[styles.nasdaqAppl7, styles.nasdaqTypo1]}>NASDAQ: MNST</Text>
      <Image
        style={[styles.image1Icon1, styles.down3]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Healthcare/LLYnoNum.png")}
      />
      <View style={[styles.stockpageChild18, styles.stockpageChildLayout]} />
      <Pressable
        style={[styles.stockpageChild19, styles.stockpageChildShadowBox]}
      />
      <Text style={[styles.appleInc8, styles.appleIconPosition]}>
        General Mills Inc.
      </Text>
      <Text style={[styles.nasdaqAppl8, styles.nasdaqTypo]}>NASDAQ: GIS</Text>
      <Image
        style={[styles.image1Icon, styles.down4]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Finance/BRKnoNum.png")}
      />
      <View style={[styles.stockpageChild20, styles.stockpageChildPosition]} />
      <Pressable
        style={[styles.stockpageChild21, styles.stockpageChildShadowBox]}
      />
      <Text style={[styles.appleInc9, styles.appleIconPosition]}>
        Clorox Co
      </Text>
      <Text style={[styles.nasdaqAppl9, styles.nasdaqTypo]}>NASDAQ: CLX</Text>
      <Image
        style={[styles.image1Icon1, styles.down4]}
        contentFit="cover"
        source={require("../assets/Fantasy500/Healthcare/MRKnoNum.png")}
      />
      <View
        style={styles.rectanglePressable}
      />

     <Pressable
        style={styles.mdihomePosition}
        onPress={() => navigation.navigate(Home)}
      >
        <Image
          style={styles.iconLayouts}
          contentFit="cover"
          source={require("../assets/mdihomeoutline.png")}
        />
      </Pressable> 
      <Pressable
        style={styles.ggprofilePosition}
        onPress={() => navigation.navigate(Profile)}
      >
        <Image
          style={styles.iconLayouts}
          contentFit="cover"
          source={require("../assets/ggprofile.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition1}
        onPress={() => navigation.navigate(Roster)}
      >
        <Image
          style={[styles.icon1, styles.iconLayouts]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.tablervsPosition}
        onPress={() => navigation.navigate(VersusPage)}
      >
        <Image
          style={styles.iconLayouts}
          contentFit="cover"
          source={require("../assets/tablervs.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition}
        onPress={() => navigation.navigate(Leaderboard)}
      >
        <Image
          style={[styles.icon1, styles.iconLayouts]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  down1: {
    marginTop: 135,
  },
  down2: {
    marginTop: 239,
  },
  down3: {
    marginTop: 343,
  },
  down4: {
    marginTop: 447,
  },
  ooba: {
    left: 270,
  },
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
  iconLayouts: {
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
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  stockpageChildLayout: {
    height: 67,
    width: 100,
    position: "absolute",
    overflow: "hidden",
  },
  stockpageShadowBox: {
    height: 92,
    width: 174,
    backgroundColor: Color.colorMediumseagreen,
    top: 261,
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
  appleTypo: {
    height: 25,
    width: 90,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  realEstateTypo: {
    height: 25,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: 128,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  nasdaqTypo3: {
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    top: 281,
    width: 90,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleShadowBox: {
    backgroundColor: Color.colorSeagreen_400,
    height: 34,
    width: 108,
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
    top: 119,
    position: "absolute",
  },
  stockpageChildShadowBox456: {
    top: 166,
    backgroundColor: Color.colorSeagreen_300,
    height: 34,
    width: 108,
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
    position: "absolute",
  },
  stockpageChildShadowBox4: {
    top: 166,
    backgroundColor: Color.colorSeagreen_400,
    height: 34,
    width: 108,
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
    position: "absolute",
  },
  industryTypo: {
    width: 73,
    top: 174,
    height: 25,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout5: {
    height: 36,
    position: "absolute",
  },
  iconLayout3: {
    height: 23,
    width: 21,
  },
  frameViewPosition: {
    left: 249,
    height: 67,
    width: 100,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout2: {
    left: 212,
    height: 23,
    width: 21,
  },
  stockpageChildShadowBox3: {
    top: 365,
    height: 92,
    width: 174,
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
  appleInc2Position: {
    left: 30,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  nasdaqPosition: {
    top: 385,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    width: 90,
  },
  appleInc3Position: {
    left: 218,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  stockpageChildShadowBox2: {
    top: 469,
    height: 92,
    width: 174,
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
  appleIconPosition2: {
    top: 477,
    position: "absolute",
  },
  nasdaqTypo2: {
    top: 489,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    width: 90,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    left: 25,
    height: 23,
    width: 21,
  },
  stockpageChildPosition: {
    left: 250,
    height: 67,
    width: 100,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    left: 213,
    height: 23,
    width: 21,
  },
  stockpageChildShadowBox1: {
    top: 573,
    height: 92,
    width: 174,
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
  appleIconPosition1: {
    top: 581,
    position: "absolute",
  },
  nasdaqTypo1: {
    top: 593,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    width: 90,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  stockpageChildShadowBox: {
    top: 677,
    height: 92,
    width: 174,
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
  appleIconPosition: {
    top: 685,
    position: "absolute",
  },
  nasdaqTypo: {
    top: 697,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    width: 90,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  picks: {
    top: 62,
    fontSize: FontSize.size_16xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 110,
    textAlign: "left",
    color: Color.colorWhite,
    left: 62,
    position: "absolute",
  },
  stocks: {
    top: 213,
    fontSize: FontSize.size_xl,
    width: 75,
    left: 18,
    fontWeight: "600",
  },
  stockOptionsFor: {
    top: 237,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    width: 308,
    fontSize: FontSize.size_3xs,
    left: 18,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  stockpageChild: {
    height: 34,
    width: 108,
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
    top: 119,
    left: 16,
    position: "absolute",
  },
  stockpageItem: {
    top: 278,
    left: 61,
    height: 67,
    width: 100,
  },
  stockpageInner: {
    left: 16,
  },
  appleInc: {
    left: 30,
    top: 269,
    position: "absolute",
  },
  technology: {
    height: 25,
    width: 90,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    left: 27,
    top: 128,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  realEstate: {
    left: 158,
    width: 81,
  },
  healthcare: {
    left: 286,
    width: 79,
  },
  nasdaqAppl: {
    left: 30,
  },
  nasdaqAppl1: {
    left: 50,
  },
  rectangleView: {
    left: 144,
  },
  stockpageChild1: {
    left: 16,
  },
  industry4: {
    top: 174,
    height: 24,
    width: 90,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    left: 33,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  industry5: {
    left: 172,
  },
  industry6: {
    left: 289,
  },
  stockpageChild2: {
    left: 144,
  },
  stockpageChild3: {
    left: 271,
  },
  ellipseIcon: {
    top: 65,
    width: 36,
    left: 16,
  },
  stockpageChild4: {
    top: 77,
    left: 172,
    width: 22,
    height: 22,
    position: "absolute",
  },
  text: {
    top: 79,
    left: 181,
    fontSize: FontSize.size_5xs,
    width: 4,
    height: 8,
  },
  image1Icon: {
    left: 17,
    height: 70,
    marginTop: 30,
    opacity: 0.5,
    borderRadius: 10,
    width: 173,
    top: 252,
    position: "absolute",
  },
  image1Icon1: {
    left: 205,
    height: 70,
    marginTop: 30,
    opacity: 0.5,
    borderRadius: 10,
    width: 173,
    top: 252,
    position: "absolute",
  },
  frameView: {
    top: 282,
  },
  stockpageChild5: {
    left: 204,
  },
  appleInc1: {
    left: 218,
    top: 269,
    position: "absolute",
  },
  nasdaqAppl1: {
    left: 218,
  },
  image2Icon: {
    top: 269,
    position: "absolute",
  },
  stockpageChild6: {
    top: 382,
    left: 60,
  },
  stockpageChild7: {
    left: 15,
  },
  appleInc2: {
    top: 373,
    width: 100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl2: {
    left: 30,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  image3Icon: {
    left: 23,
    top: 373,
    position: "absolute",
  },
  stockpageChild8: {
    top: 386,
    left: 248,
  },
  stockpageChild9: {
    left: 203,
  },
  appleInc3: {
    top: 373,
    // width: 100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl3: {
    top: 385,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    width: 90,
  },
  image4Icon: {
    left: 211,
    top: 373,
    position: "absolute",
  },
  stockpageChild10: {
    top: 486,
    left: 62,
    height: 67,
    width: 100,
  },
  stockpageChild11: {
    left: 17,
  },
  appleInc4: {
    left: 30,
    height: 24,
    width: 100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl4: {
    left: 30,
  },
  image5Icon: {
    top: 477,
    position: "absolute",
  },
  stockpageChild12: {
    top: 490,
  },
  stockpageChild13: {
    left: 205,
  },
  appleInc5: {
    left: 218,
    height: 25,
    // width: 100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl5: {
    left: 218,
  },
  image6Icon: {
    top: 477,
    position: "absolute",
  },
  stockpageChild14: {
    top: 590,
    left: 61,
    height: 67,
    width: 100,
  },
  stockpageChild15: {
    left: 16,
  },
  appleInc6: {
    height: 25,
    width: 100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    left: 30,
  },
  nasdaqAppl6: {
    left: 30,
  },
  image7Icon: {
    height: 23,
    width: 21,
    left: 24,
  },
  stockpageChild16: {
    top: 594,
  },
  stockpageChild17: {
    left: 204,
  },
  appleInc7: {
    left: 218,
    height: 25,
    // width: 100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl7: {
    left: 218,
  },
  image8Icon: {
    left: 212,
    height: 23,
    width: 21,
  },
  stockpageChild18: {
    top: 694,
    left: 62,
    height: 67,
    width: 100,
  },
  stockpageChild19: {
    left: 17,
  },
  appleInc8: {
    left: 30,
    height: 25,
    width: 100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl8: {
    left: 30,
  },
  image9Icon: {
    left: 25,
    height: 23,
    width: 21,
  },
  stockpageChild20: {
    top: 698,
  },
  stockpageChild21: {
    left: 205,
  },
  appleInc9: {
    left: 218,
    height: 25,
    width: 100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl9: {
    left: 218,
  },
  image10Icon: {
    left: 213,
    height: 23,
    width: 21,
  },
  stockpageChild22: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  stockpageChild23: {
    top: 786,
    left: 0,
    backgroundColor: Color.colorSeagreen_100,
    width: 393,
    height: 66,
    position: "absolute",
  },
  stockpage: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "110%",
    height: 852,
    left: -10,
    overflow: "hidden",
  },
});

export default ConsumePage;
