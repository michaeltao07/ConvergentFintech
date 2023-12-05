import React, {useState} from "react";
import { Text, StyleSheet, View, ScrollView, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import PlayersStocks from "../components/PlayersStocks";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import StockPage from './StockPage';
import Home from './Home';
import Wallet from "./Wallet";
import Profile from "./Profile";
import Leaderboard from "./Leaderboard";
import VersusPage from "./VersusPage";
import Roster from "./Roster";

const DraftList = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate(StockPage);
  };
  
  return (
    <View style={styles.draftlist}>
      <Text style={styles.draft}>DRAFT</Text>
      <Image
        style={styles.draftlistChild}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.draftlistChild}
        contentFit="cover"
        source={require("../assets/fLogo.png")}
      />
      <View style={styles.draftlistItem} />
      <TouchableOpacity onPress={handlePress}>
      <Text style={styles.startDraft}>Start Draft</Text>
      </TouchableOpacity>
      <View style={position="fixed"}>
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

      </View>
      <ScrollView horizontal vertical showsVerticalScrollIndicator="false" showsHorizontalScrollIndicator="false" style={styles.daScroll}>
      <Text style={[styles.player1, styles.playerTypo2]}>You</Text>
      <View style={[styles.draftlistInner, styles.draftlistInnerLayout]}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
      </View>
      <Text style={[styles.player2, styles.playerTypo2]}>Player 2</Text>
      <View style={[styles.frameView, styles.draftlistInnerLayout]}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
      </View>
      <Text style={[styles.player3, styles.playerTypo1]}>Player 3</Text>
      <View style={[styles.draftlistInner1, styles.draftlistInnerLayout]}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
      </View>
      <View style={[styles.draftlistInner2, styles.draftlistInnerLayout]}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
      </View>
      <Text style={[styles.player4, styles.playerTypo1]}>Player 4</Text>
      <View style={[styles.draftlistInner3, styles.draftlistInnerLayout]}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
      </View>
      <Text style={[styles.player5, styles.playerTypo3]}>{`Player 5 `}</Text>
      <Text style={[styles.player6, styles.playerTypo2]}>Player 6</Text>
      <View style={[styles.draftlistInner4, styles.draftlistInnerLayout]}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
      </View>
      <Text style={[styles.player71, styles.playerTypo]}>Player 7</Text>
      <View style={[styles.draftlistInner5, styles.draftlistInnerLayout]}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
      </View>
      <Text style={[styles.player8, styles.playerTypo]}>Player 8</Text>
      <View style={[styles.draftlistInner6, styles.draftlistInnerLayout]}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
      </View>
      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  daScroll: {
    // bounce:"false",
    zIndex: -1,
    bottom: 10,
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
    background: "solid",
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
  playerTypo2: {
    height: 16,
    fontSize: FontSize.size_mini,
    left: 28,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  playerTypo3: {
    fontSize: FontSize.size_mini,
    left: 28,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  draftlistInnerLayout: {
    width: 294,
    left: 10,
    height: 36,
    zIndex: 0,
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 0,
    position: "absolute",
  },
  playerTypo1: {
    width: 65,
    height: 16,
    fontSize: FontSize.size_mini,
    left: 28,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  playerTypo: {
    width: 64,
    height: 16,
    fontSize: FontSize.size_mini,
    left: 28,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
  draft: {
    top: 63,
    left: 62,
    fontSize: FontSize.size_16xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 123,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  draftlistChild: {
    top: 66,
    left: 16,
    width: 36,
    height: 36,
    position: "absolute",
  },
  draftlistItem: {
    top: 122,
    left: 120,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSeagreen_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorLimegreen,
    borderWidth: 1,
    width: 155,
    height: 37,
    position: "absolute",
  },
  startDraft: {
    top: 130,
    left: 152,
    fontSize: 17,
    width: 90,
    height: 20,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  player1: {
    top: 178,
    width: 56,
  },
  player7: {
    top: 812,
    width: 58,
    height: 18,
  },
  playersStocksWrapper: {
    top: 0,
    width: 542,
    height: 36,
  },
  draftlistInner: {
    top: 204,
  },
  player2: {
    top: 259,
    width: 69,
  },
  frameView: {
    top: 285,
  },
  player3: {
    top: 338,
  },
  draftlistInner1: {
    top: 364,
  },
  draftlistInner2: {
    top: 443,
  },
  player4: {
    top: 417,
  },
  draftlistInner3: {
    top: 515,
  },
  player5: {
    top: 489,
  },
  player6: {
    top: 561,
    width: 62,
  },
  draftlistInner4: {
    top: 587,
  },
  player71: {
    top: 633,
  },
  draftlistInner5: {
    top: 659,
  },
  player8: {
    top: 705,
  },
  draftlistInner6: {
    top: 731,
  },
  ellipseIcon: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  draftlist: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    // overflow: "hidden",
    // bounce: "false",
  },
});

export default DraftList;
