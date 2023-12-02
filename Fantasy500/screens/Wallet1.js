import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Wallet1 = () => {
  return (
    <View style={styles.roster}>
      <Image
        style={[styles.rosterChild, styles.rosterChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.rosterItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={styles.yourDrafts}>YOUR DRAFTS</Text>
      <Text style={[styles.technology, styles.technologyTypo]}>Technology</Text>
      <Text style={[styles.healthcare, styles.technologyTypo]}>Healthcare</Text>
      <Text style={[styles.realEstate, styles.technologyTypo]}>
        Real Estate
      </Text>
      <Pressable style={[styles.rosterInner, styles.rosterInnerShadowBox]} />
      <Text style={[styles.appleInc, styles.appleTypo]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl, styles.nasdaqLayout]}>NASDAQ: APPL</Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rosterInnerShadowBox]}
      />
      <Text style={[styles.appleInc1, styles.appleInc1Position]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl1, styles.appleInc1Position]}>
        NASDAQ: APPL
      </Text>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <Pressable style={[styles.rosterChild1, styles.rosterChild1ShadowBox]} />
      <Text style={[styles.appleInc2, styles.appleIconPosition1]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl2, styles.nasdaqTypo1]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image3Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={[styles.rectangleView, styles.rosterChild1ShadowBox]} />
      <Text style={[styles.appleInc3, styles.appleIconPosition1]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl3, styles.nasdaqTypo1]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <View style={[styles.rosterChild2, styles.rosterChildShadowBox]} />
      <Text style={[styles.appleInc4, styles.appleIconPosition]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl4, styles.nasdaqTypo]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image5Icon, styles.appleIconPosition]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Pressable style={[styles.rosterChild3, styles.rosterChildShadowBox]} />
      <Text style={[styles.appleInc5, styles.appleIconPosition]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl5, styles.nasdaqTypo]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image6Icon, styles.appleIconPosition]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <View style={styles.rosterChild4} />
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
        style={[styles.mdihomeOutlineIcon, styles.rosterChildLayout]}
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
  rosterChildLayout: {
    height: 36,
    position: "absolute",
  },
  technologyTypo: {
    width: 243,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rosterInnerShadowBox: {
    height: 52,
    width: 164,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_5xs,
    top: 192,
    position: "absolute",
  },
  appleTypo: {
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  nasdaqLayout: {
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    top: 212,
  },
  appleInc1Position: {
    left: 235,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  rosterChild1ShadowBox: {
    top: 301,
    height: 52,
    width: 164,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  appleIconPosition1: {
    top: 309,
    position: "absolute",
  },
  nasdaqTypo1: {
    top: 321,
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    left: 34,
    height: 23,
    width: 19,
  },
  iconLayout: {
    left: 211,
    width: 20,
    height: 23,
  },
  rosterChildShadowBox: {
    top: 410,
    height: 52,
    width: 164,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  appleIconPosition: {
    top: 418,
    position: "absolute",
  },
  nasdaqTypo: {
    top: 430,
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
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
  rosterChild: {
    top: 80,
    width: 36,
    left: 25,
  },
  rosterItem: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  yourDrafts: {
    top: 78,
    left: 72,
    fontSize: FontSize.size_16xl,
    width: 256,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  technology: {
    top: 160,
    left: 25,
  },
  healthcare: {
    top: 272,
    left: 28,
  },
  realEstate: {
    top: 381,
    left: 26,
  },
  rosterInner: {
    left: 25,
  },
  appleInc: {
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    left: 57,
    fontSize: FontSize.size_3xs,
    position: "absolute",
    top: 200,
  },
  nasdaqAppl: {
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    left: 57,
    position: "absolute",
  },
  image1Icon: {
    left: 33,
    height: 23,
    width: 19,
    top: 200,
    position: "absolute",
  },
  rectanglePressable: {
    left: 203,
  },
  appleInc1: {
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    top: 200,
  },
  nasdaqAppl1: {
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    top: 212,
  },
  image2Icon: {
    left: 210,
    width: 20,
    height: 23,
    top: 200,
    position: "absolute",
  },
  rosterChild1: {
    left: 26,
  },
  appleInc2: {
    left: 58,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl2: {
    left: 58,
  },
  image3Icon: {
    top: 309,
    position: "absolute",
  },
  rectangleView: {
    left: 204,
  },
  appleInc3: {
    left: 236,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl3: {
    left: 236,
  },
  image4Icon: {
    top: 309,
    position: "absolute",
  },
  rosterChild2: {
    left: 26,
  },
  appleInc4: {
    left: 58,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl4: {
    left: 58,
  },
  image5Icon: {
    left: 34,
    height: 23,
    width: 19,
  },
  rosterChild3: {
    left: 204,
  },
  appleInc5: {
    left: 236,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl5: {
    left: 236,
  },
  image6Icon: {
    left: 211,
    width: 20,
    height: 23,
  },
  rosterChild4: {
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
  roster: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Wallet1;
