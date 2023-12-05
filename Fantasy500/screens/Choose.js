import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import Profile from "./Profile";
import VersusPage from "./VersusPage";
import Home from "./Home";
import Wallet from "./Wallet";
import AyanRoster from "./AyanRoster";

const Choose = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate(AyanRoster)
    };
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

      <Text style={[styles.thisSeasonsStandings, styles.text9Typo]}>
        Choose a player to trade with.
      </Text>
      <View style={styles.flexer}>
      <View>
      <Text style={[styles.textTypo1]}>1</Text>
      <TouchableOpacity onPress={handlePress}>
      <Image
        style={[styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/ayan.jpg")}
      />
      <Text style={[styles.userTypo]}>ayanjannu</Text>
      </TouchableOpacity>
      </View>
      <View>
      <Text style={[styles.textTypo1]}>2</Text>
      <Text style={[styles.userTypo]}>ursulaburns</Text>
      <Image
        style={[styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/burns.png")}
      />
      </View>
      <View>
      <Text style={[styles.textTypo1]}>3</Text>
      <Text style={[styles.userTypo]}>sriyachippalthurty</Text>
      <Image
        style={[styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/sriya.png")}
      />
      </View>
      <View>
      <Text style={[styles.textTypo1]}>4</Text>
      <Text style={[styles.userTypo]}>barbaracorcoran</Text>
      <Image
        style={[styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/lori.png")}
      />
      </View>
      <View>
      <Text style={[styles.textTypo1]}>5</Text>
      <Text style={[styles.userTypo]}>markcuban</Text>
      <Image
        style={[styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/cuban.jpg")}
      />
      </View>
      <View>
      <Text style={[styles.textTypo1]}>6</Text>
      <Text style={[styles.userTypo]}>davidrobertson</Text>
      <Image
        style={[styles.leaderboardChildLayout]}
        contentFit="cover"
        source={require("../assets/david.png")}
      />
      </View>
      <View>
        <Text style={[styles.textTypo1]}>7</Text>
        <Text style={[styles.userTypo]}>jacobencarnado</Text>
        <Image
          style={[styles.leaderboardChildLayout]}
          contentFit="cover"
          source={require("../assets/jacob.jpg")}
        />
      </View>
      <View>
        <Text style={[styles.textTypo1]}>8</Text>
        <Text style={[styles.userTypo]}>jeffbezos</Text>
        <Image
          style={[styles.leaderboardChildLayout]}
          contentFit="cover"
          source={require("../assets/bezos.jpg")}
        />
      </View>
      <View>
      <Text style={styles.textTypo1}>9</Text>
      <Text style={[styles.userTypo]}>elonmusk</Text>
        <Image
          style={[styles.leaderboardChildLayout]}
          contentFit="cover"
          source={require("../assets/musk.jpg")}  // 9
        />
      </View>
      <View>
          <Text style={[styles.userTypo]}>meenaharris</Text>
          <Text style={[styles.text9Typo1]}>10</Text><Image
          style={[styles.leaderboardChildLayout]}
          contentFit="cover"
          source={require("../assets/meenaharris.png")}
        />
      </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  flexer: {
    flex: 1,
    left: 30,
    top: 170,
    bottom: 100,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBottom: 300,
  },
  roundy: {
    borderRadius: 10,
  },
  ggprofilePosition: {
    height: 30,
    width: 30,
    left: 104,
    top: 758,
    zIndex: 2,
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
    zIndex: 2,
    position: "absolute",
  },
  mdihomePosition: {
    width: 37,
    left: 27,
    top: 755,
    height: 36,
    zIndex: 2,
    position: "absolute",
  },
  vectorPosition: {
    width: 30,
    left: 317,
    top: 760,
    height: 27,
    zIndex: 2,
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
    zIndex: 2,
    position: "absolute",
  },

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
  text9Typo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text9Typo1: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
    marginTop: 10,
  },
  leaderboardChildLayout: {
    height: 50,
    width: 50,
    left: 38,
    borderRadius: 100,
    position: "absolute",
  },
  userTypo: {
    height: 20,
    marginTop: 12,
    width: 354,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 105,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo1: {
    width: 14,
    marginTop:10,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    width: 24,
    left: 37,
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
    top: 129,
    left: 28,
    // width: 243,
  },
  ellipseIcon: {
    top: 186,
  },
  leaderboardChild1: {
    top: 233,
  },
  leaderboardChild2: {
    top: 280,
  },
  leaderboardChild3: {
    top: 327,
  },
  leaderboardChild4: {
    top: 374,
  },
  leaderboardChild5: {
    top: 421,
  },
  ayanjannu: {
    top: 190,
  },
  nitishapokkula: {
    top: 237,
  },
  mahikadawar: {
    top: 284,
  },
  jayanthpandit: {
    top: 333,
  },
  michaeltao: {
    top: 380,
  },
  anokhishah: {
    top: 429,
  },
  jacobencarnado: {
    top: 476,
  },
  leaderboardChild6: {
    top: 468,
  },
  leaderboardChild7: {
    top: 518,
  },
  andrewchoi: {
    top: 526,
  },
  text: {
    top: 192,
    left: 37,
  },
  text1: {
    top: 287,
    left: 37,
  },
  text2: {
    top: 240,
    left: 38,
  },
  text3: {
    top: 336,
    left: 37,
  },
  text4: {
    top: 383,
    left: 37,
  },
  text5: {
    top: 432,
    left: 37,
  },
  text6: {
    left: 37,
    top: 476,
  },
  text7: {
    top: 525,
    left: 37,
  },
  leaderboardChild16: {
    top: 615,
  },
  leaderboardChild17: {
    top: 664,
  },
  leaderboardChild18: {
    top: 713,
  },
  ayanjannu1: {
    top: 615,
  },
  user11: {
    top: 670,
  },
  user12: {
    top: 719,
  },
  leaderboardChild19: {
    top: 615,
  },
  text8: {
    top: 626,
    left: 37,
  },
  text9: {
    top: 680,
    width: 28,
    left: 37,
  },
  text10: {
    top: 671,
  },
  text11: {
    top: 720,
  },
  leaderboard: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Choose;
