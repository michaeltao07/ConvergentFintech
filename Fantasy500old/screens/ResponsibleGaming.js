import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ResponsibleGaming = () => {
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
        style={styles.responsibleGamingChild}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.responsibleGamingItem}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <View style={styles.responsibleGamingInner} />
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
        style={styles.mdihomeOutlineIcon}
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
    height: 15,
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
