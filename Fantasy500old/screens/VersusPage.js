import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const VersusPage = () => {
  return (
    <View style={styles.versuspage}>
      <Text style={[styles.versus, styles.textFlexBox]}>VERSUS</Text>
      <Text style={[styles.versus, styles.textFlexBox]}>VERSUS</Text>
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
      <Text style={[styles.text, styles.textFlexBox]}>?</Text>
      <Text style={[styles.you, styles.youTypo]}>YOU</Text>
      <Text style={[styles.opp, styles.youTypo]}>OPP</Text>
      <Image
        style={styles.versuspageInner}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={styles.rectangleView} />
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
        style={[styles.mdihomeOutlineIcon, styles.versuspageChildLayout]}
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
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  versuspageChildLayout: {
    height: 36,
    position: "absolute",
  },
  youTypo: {
    width: 46,
    fontSize: FontSize.size_xl,
    top: 176,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  versus: {
    top: 69,
    left: 79,
    fontSize: FontSize.size_16xl,
    width: 143,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  versuspageChild: {
    top: 72,
    left: 33,
    width: 36,
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
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 4,
    height: 8,
  },
  you: {
    left: 69,
  },
  opp: {
    left: 279,
  },
  versuspageInner: {
    left: 197,
    width: 5,
    height: 573,
    top: 176,
    position: "absolute",
  },
  ellipseIcon: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  rectangleView: {
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
  versuspage: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default VersusPage;
