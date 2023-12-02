import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const StockPage = () => {
  return (
    <View style={styles.stockpage}>
      <Text style={styles.picks}>PICKS</Text>
      <Text style={styles.picks}>PICKS</Text>
      <Text style={[styles.stocks, styles.textTypo]}>Stocks</Text>
      <Text style={[styles.stocks, styles.textTypo]}>Stocks</Text>
      <Text style={styles.stockOptionsFor}>
        Stock options for the [technology] industry
      </Text>
      <Pressable style={[styles.stockpageChild, styles.rectangleShadowBox]} />
      <View style={[styles.stockpageItem, styles.stockpageChildLayout]} />
      <Pressable style={[styles.stockpageInner, styles.stockpageShadowBox]} />
      <Text style={[styles.appleInc, styles.appleTypo]}>Apple Inc</Text>
      <Text style={[styles.technology, styles.technologyLayout]}>
        Technology
      </Text>
      <Text style={[styles.technology, styles.technologyLayout]}>
        Technology
      </Text>
      <Text style={[styles.realEstate, styles.realLayout]}>Real Estate</Text>
      <Text style={[styles.healthcare, styles.healthcareTypo]}>Healthcare</Text>
      <Text style={[styles.nasdaqAppl, styles.nasdaqTypo3]}>NASDAQ: APPL</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Pressable
        style={[styles.rectanglePressable, styles.stockpageChild3Position]}
      />
      <Pressable
        style={[styles.stockpageChild1, styles.stockpageChildShadowBox4]}
      />
      <Text style={[styles.technology2, styles.technology2Typo]}>
        Technology
      </Text>
      <Text style={[styles.technology2, styles.technology2Typo]}>
        Technology
      </Text>
      <Text style={[styles.realEstate1, styles.technology2Typo]}>
        Real Estate
      </Text>
      <Text style={[styles.healthcare1, styles.healthcareTypo]}>
        Healthcare
      </Text>
      <Pressable
        style={[styles.stockpageChild2, styles.stockpageChildShadowBox4]}
      />
      <Pressable
        style={[styles.stockpageChild3, styles.stockpageChildShadowBox4]}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout5]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.stockpageChild4}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>?</Text>
      <Image
        style={[styles.image1Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.frameView, styles.frameViewPosition]} />
      <Pressable style={[styles.stockpageChild5, styles.stockpageShadowBox]} />
      <Text style={[styles.appleInc1, styles.appleTypo]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl1, styles.nasdaqTypo3]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image2Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.stockpageChild6, styles.stockpageChildLayout]} />
      <Pressable
        style={[styles.stockpageChild7, styles.stockpageChildShadowBox3]}
      />
      <Text style={[styles.appleInc2, styles.appleInc2Position]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl2, styles.nasdaqPosition]}>
        NASDAQ: APPL
      </Text>
      <Image
        style={[styles.image3Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.stockpageChild8, styles.stockpageChildLayout]} />
      <Pressable
        style={[styles.stockpageChild9, styles.stockpageChildShadowBox3]}
      />
      <Text style={[styles.appleInc3, styles.appleInc3Position]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl3, styles.appleInc3Position]}>
        NASDAQ: APPL
      </Text>
      <Image
        style={[styles.image4Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.stockpageChild10, styles.stockpageChildLayout]} />
      <View
        style={[styles.stockpageChild11, styles.stockpageChildShadowBox2]}
      />
      <Text style={[styles.appleInc4, styles.appleIconPosition2]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl4, styles.nasdaqTypo2]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image5Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.stockpageChild12, styles.stockpageChildPosition]} />
      <Pressable
        style={[styles.stockpageChild13, styles.stockpageChildShadowBox2]}
      />
      <Text style={[styles.appleInc5, styles.appleIconPosition2]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl5, styles.nasdaqTypo2]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image6Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.stockpageChild14, styles.stockpageChildLayout]} />
      <Pressable
        style={[styles.stockpageChild15, styles.stockpageChildShadowBox1]}
      />
      <Text style={[styles.appleInc6, styles.appleIconPosition1]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl6, styles.nasdaqTypo1]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image7Icon, styles.appleIconPosition1]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.stockpageChild16, styles.frameViewPosition]} />
      <Pressable
        style={[styles.stockpageChild17, styles.stockpageChildShadowBox1]}
      />
      <Text style={[styles.appleInc7, styles.appleIconPosition1]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl7, styles.nasdaqTypo1]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image8Icon, styles.appleIconPosition1]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.stockpageChild18, styles.stockpageChildLayout]} />
      <Pressable
        style={[styles.stockpageChild19, styles.stockpageChildShadowBox]}
      />
      <Text style={[styles.appleInc8, styles.appleIconPosition]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl8, styles.nasdaqTypo]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image9Icon, styles.appleIconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.stockpageChild20, styles.stockpageChildPosition]} />
      <Pressable
        style={[styles.stockpageChild21, styles.stockpageChildShadowBox]}
      />
      <Text style={[styles.appleInc9, styles.appleIconPosition]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl9, styles.nasdaqTypo]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image10Icon, styles.appleIconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.stockpageChild22}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={styles.stockpageChild23} />
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
        style={[styles.mdihomeOutlineIcon, styles.iconLayout5]}
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
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleShadowBox: {
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
    height: 9,
    width: 72,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  technologyLayout: {
    height: 7,
    width: 90,
    left: 27,
  },
  realLayout: {
    height: 14,
    width: 81,
    left: 158,
  },
  healthcareTypo: {
    width: 79,
    left: 286,
    height: 14,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  nasdaqTypo3: {
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    top: 281,
    width: 90,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.colorSeagreen_400,
    left: 144,
  },
  stockpageChild3Position: {
    left: 271,
    backgroundColor: Color.colorSeagreen_400,
  },
  stockpageChildShadowBox4: {
    top: 166,
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
  technology2Typo: {
    top: 176,
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
    left: 49,
    height: 9,
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
    left: 237,
    height: 9,
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
    height: 9,
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
    height: 9,
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
    height: 9,
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
    backgroundColor: Color.colorSeagreen_300,
    left: 16,
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
    left: 50,
    top: 269,
    position: "absolute",
  },
  technology: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: 130,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  realEstate: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: 130,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  healthcare: {
    top: 129,
  },
  nasdaqAppl: {
    left: 50,
  },
  rectangleView: {
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
  rectanglePressable: {
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
  stockpageChild1: {
    backgroundColor: Color.colorSeagreen_300,
    left: 16,
  },
  technology2: {
    height: 7,
    width: 90,
    left: 27,
  },
  realEstate1: {
    height: 14,
    width: 81,
    left: 158,
  },
  healthcare1: {
    top: 175,
  },
  stockpageChild2: {
    backgroundColor: Color.colorSeagreen_400,
    left: 144,
  },
  stockpageChild3: {
    left: 271,
    backgroundColor: Color.colorSeagreen_400,
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
    left: 24,
    height: 23,
    width: 21,
    top: 269,
    position: "absolute",
  },
  frameView: {
    top: 282,
  },
  stockpageChild5: {
    left: 204,
  },
  appleInc1: {
    left: 238,
    top: 269,
    position: "absolute",
  },
  nasdaqAppl1: {
    left: 238,
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
    width: 72,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl2: {
    left: 49,
    height: 9,
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
    width: 72,
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
    left: 51,
    height: 9,
    width: 72,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl4: {
    left: 51,
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
    left: 239,
    height: 9,
    width: 72,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl5: {
    left: 239,
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
    height: 9,
    width: 72,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    left: 50,
  },
  nasdaqAppl6: {
    left: 50,
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
    left: 238,
    height: 9,
    width: 72,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl7: {
    left: 238,
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
    left: 51,
    height: 9,
    width: 72,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl8: {
    left: 51,
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
    left: 239,
    height: 9,
    width: 72,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl9: {
    left: 239,
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
  stockpage: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default StockPage;
