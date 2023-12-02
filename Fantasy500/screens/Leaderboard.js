import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Leaderboard = () => {
  return (
    <View style={styles.leaderboard}>
      <Image
        style={[styles.leaderboardChild, styles.leaderboardChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.leaderboardItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={styles.leaderboard1}>LEADERBOARD</Text>
      <View style={styles.leaderboardInner} />
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
        style={[styles.mdihomeOutlineIcon, styles.leaderboardChildLayout1]}
        contentFit="cover"
        source={require("../assets/mdihomeoutline.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.thisSeasonsStandings}>This season’s standings.</Text>
      <Image
        style={[styles.ellipseIcon, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild1, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild2, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild3, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild4, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild5, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.ayanjannu, styles.userTypo]}>ayanjannu</Text>
      <Text style={[styles.nitishapokkula, styles.userTypo]}>
        nitishapokkula
      </Text>
      <Text style={[styles.mahikadawar, styles.userTypo]}>mahikadawar</Text>
      <Text style={[styles.jayanthpandit, styles.userTypo]}>jayanthpandit</Text>
      <Text style={[styles.michaeltao, styles.userTypo]}>michaeltao</Text>
      <Text style={[styles.anokhishah, styles.userTypo]}>anokhishah</Text>
      <Text style={[styles.jacobencarnado, styles.userTypo]}>
        jacobencarnado
      </Text>
      <Image
        style={[styles.leaderboardChild6, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild7, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.andrewchoi, styles.userTypo]}>andrewchoi</Text>
      <Image
        style={[styles.ellipseIcon, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild1, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild2, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild3, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild4, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild5, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild6, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild7, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>1</Text>
      <Text style={[styles.text1, styles.textTypo1]}>3</Text>
      <Text style={[styles.text2, styles.textTypo1]}>2</Text>
      <Text style={[styles.text3, styles.textTypo1]}>4</Text>
      <Text style={[styles.text4, styles.textTypo1]}>5</Text>
      <Text style={[styles.text5, styles.textTypo1]}>6</Text>
      <Text style={[styles.text6, styles.textTypo1]}>7</Text>
      <Text style={[styles.text7, styles.textTypo1]}>8</Text>
      <Image
        style={[styles.leaderboardChild16, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild17, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild18, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild19, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.ayanjannu1, styles.userTypo]}>ayanjannu</Text>
      <Text style={[styles.user10, styles.userTypo]}>user10</Text>
      <Text style={[styles.user11, styles.userTypo]}>user11</Text>
      <Text style={[styles.user12, styles.userTypo]}>user12</Text>
      <Image
        style={[styles.leaderboardChild16, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild17, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild18, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.leaderboardChild19, styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.text8, styles.textTypo1]}>9</Text>
      <Text style={styles.text9}>10</Text>
      <Text style={[styles.text10, styles.textTypo]}>11</Text>
      <Text style={[styles.text11, styles.textTypo]}>12</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  leaderboardChildLayout1: {
    height: 36,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  leaderboardChildLayout: {
    height: 38,
    width: 38,
    left: 86,
    position: "absolute",
  },
  userTypo: {
    height: 15,
    width: 354,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 135,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo1: {
    width: 14,
    left: 41,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    width: 24,
    left: 41,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  leaderboardChild: {
    top: 80,
    left: 25,
    width: 36,
  },
  leaderboardItem: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  leaderboard1: {
    top: 78,
    left: 72,
    fontSize: FontSize.size_16xl,
    width: 272,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  leaderboardInner: {
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
  thisSeasonsStandings: {
    top: 159,
    left: 29,
    width: 243,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  ellipseIcon: {
    top: 209,
  },
  leaderboardChild1: {
    top: 256,
  },
  leaderboardChild2: {
    top: 303,
  },
  leaderboardChild3: {
    top: 350,
  },
  leaderboardChild4: {
    top: 397,
  },
  leaderboardChild5: {
    top: 444,
  },
  ayanjannu: {
    top: 213,
  },
  nitishapokkula: {
    top: 260,
  },
  mahikadawar: {
    top: 307,
  },
  jayanthpandit: {
    top: 356,
  },
  michaeltao: {
    top: 403,
  },
  anokhishah: {
    top: 452,
  },
  jacobencarnado: {
    top: 499,
  },
  leaderboardChild6: {
    top: 491,
  },
  leaderboardChild7: {
    top: 541,
  },
  andrewchoi: {
    top: 549,
  },
  text: {
    top: 216,
  },
  text1: {
    top: 313,
  },
  text2: {
    top: 266,
  },
  text3: {
    top: 357,
  },
  text4: {
    top: 404,
  },
  text5: {
    top: 451,
  },
  text6: {
    top: 498,
  },
  text7: {
    top: 545,
  },
  leaderboardChild16: {
    top: 595,
  },
  leaderboardChild17: {
    top: 642,
  },
  leaderboardChild18: {
    top: 689,
  },
  leaderboardChild19: {
    top: 736,
  },
  ayanjannu1: {
    top: 599,
  },
  user10: {
    top: 646,
  },
  user11: {
    top: 693,
  },
  user12: {
    top: 742,
  },
  text8: {
    top: 602,
  },
  text9: {
    top: 652,
    width: 28,
    left: 41,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text10: {
    top: 699,
  },
  text11: {
    top: 773,
  },
  leaderboard: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Leaderboard;
