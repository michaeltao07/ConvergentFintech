import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Wallet1 = () => {
  return (
    <View style={styles.wallet}>
      <Image
        style={[styles.walletChild, styles.walletChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.walletItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={styles.yourDrafts}>YOUR DRAFTS</Text>
      <Text style={[styles.technology, styles.technologyTypo]}>Technology</Text>
      <Text style={[styles.technology, styles.technologyTypo]}>Technology</Text>
      <Text style={[styles.healthcare, styles.technologyTypo]}>Healthcare</Text>
      <Text style={[styles.addOnFantasy500, styles.technologyTypo]}>
        Add on Fantasy500
      </Text>
      <Pressable style={[styles.walletInner, styles.walletInnerShadowBox]} />
      <Text style={[styles.appleInc, styles.appleTypo]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl, styles.nasdaqTypo2]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.walletInnerShadowBox]}
      />
      <Text style={[styles.appleInc1, styles.appleTypo]}>Apple Inc</Text>
      <Text style={[styles.nasdaqAppl1, styles.nasdaqTypo2]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <Pressable style={[styles.walletChild1, styles.walletChild1ShadowBox]} />
      <Text style={[styles.appleInc2, styles.appleIconPosition1]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl2, styles.nasdaqTypo1]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image3Icon, styles.appleIconPosition1]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={[styles.rectangleView, styles.walletChild1ShadowBox]} />
      <Text style={[styles.appleInc3, styles.appleIconPosition1]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl3, styles.nasdaqTypo1]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image4Icon, styles.appleIconPosition1]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <View style={[styles.walletChild2, styles.walletChildShadowBox]} />
      <Text style={[styles.appleInc4, styles.appleIconPosition]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl4, styles.nasdaqTypo]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image5Icon, styles.appleIconPosition]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Pressable style={[styles.walletChild3, styles.walletChildShadowBox]} />
      <Text style={[styles.appleInc5, styles.appleIconPosition]}>
        Apple Inc
      </Text>
      <Text style={[styles.nasdaqAppl5, styles.nasdaqTypo]}>NASDAQ: APPL</Text>
      <Image
        style={[styles.image6Icon, styles.appleIconPosition]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <View style={styles.walletChild4} />
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
        style={[styles.mdihomeOutlineIcon, styles.walletChildLayout]}
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
  walletChildLayout: {
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
  walletInnerShadowBox: {
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
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqTypo2: {
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    top: 212,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: 23,
    width: 19,
    left: 33,
  },
  iconLayout: {
    width: 20,
    left: 210,
    height: 23,
  },
  walletChild1ShadowBox: {
    top: 314,
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
    top: 322,
    position: "absolute",
  },
  nasdaqTypo1: {
    top: 334,
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  walletChildShadowBox: {
    top: 436,
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
    top: 444,
    position: "absolute",
  },
  nasdaqTypo: {
    top: 456,
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
  walletChild: {
    top: 80,
    width: 36,
    left: 25,
  },
  walletItem: {
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
    top: 154,
    left: 27,
    width: 243,
    fontSize: FontSize.size_xl,
  },
  healthcare: {
    top: 276,
    left: 27,
    width: 243,
    fontSize: FontSize.size_xl,
  },
  addOnFantasy500: {
    top: 398,
    left: 25,
  },
  walletInner: {
    left: 25,
  },
  appleInc: {
    left: 57,
    top: 200,
    position: "absolute",
  },
  nasdaqAppl: {
    left: 57,
  },
  image1Icon: {
    top: 200,
    position: "absolute",
  },
  rectanglePressable: {
    left: 203,
  },
  appleInc1: {
    left: 235,
    top: 200,
    position: "absolute",
  },
  nasdaqAppl1: {
    left: 235,
  },
  image2Icon: {
    top: 200,
    position: "absolute",
  },
  walletChild1: {
    left: 25,
  },
  appleInc2: {
    height: 9,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
    left: 57,
  },
  nasdaqAppl2: {
    left: 57,
  },
  image3Icon: {
    height: 23,
    width: 19,
    left: 33,
  },
  rectangleView: {
    left: 203,
  },
  appleInc3: {
    left: 235,
    height: 9,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl3: {
    left: 235,
  },
  image4Icon: {
    width: 20,
    left: 210,
    height: 23,
  },
  walletChild2: {
    left: 25,
  },
  appleInc4: {
    height: 9,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
    left: 57,
  },
  nasdaqAppl4: {
    left: 57,
  },
  image5Icon: {
    height: 23,
    width: 19,
    left: 33,
  },
  walletChild3: {
    left: 203,
  },
  appleInc5: {
    left: 235,
    height: 9,
    width: 68,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
  },
  nasdaqAppl5: {
    left: 235,
  },
  image6Icon: {
    width: 20,
    left: 210,
    height: 23,
  },
  walletChild4: {
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
  wallet: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Wallet1;
