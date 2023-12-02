import * as React from "react";
import { Text, StyleSheet, View, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import PlayersStocks from "../components/PlayersStocks";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import Home from './Home'

const DraftFilled = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate(Home);
  };
  
  return (
    <View style={styles.draftlist}>
      <Text style={styles.draft}>DRAFT</Text>
      <Image
        style={styles.draftlistChild}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <View style={styles.draftlistItem} />
      <TouchableOpacity onPress={handlePress}>
      <Text style={styles.startDraft}>Start Draft</Text>
      </TouchableOpacity>
      <Text style={[styles.player1, styles.playerTypo2]}>Player 1</Text>
      <Text style={[styles.player7, styles.playerTypo3]}>Player 7</Text>
      <View style={[styles.draftlistInner, styles.draftlistInnerLayout]}>
      <Pressable onPress={handlePress}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            player = {0}
            stockNum = {0}
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
        </Pressable>
      </View>
      <Text style={[styles.player2, styles.playerTypo2]}>Player 2</Text>
      <View style={[styles.frameView, styles.draftlistInnerLayout]}>
        <View
          style={[styles.playersStocksWrapper, styles.rectangleViewPosition]}
        >
          <PlayersStocks
            player = {1}
            stockNum = {1}
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
            player = {2}
            stockNum = {2}
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
            player = {3}
            stockNum = {0}
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
            player = {4}
            stockNum = {2}
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
            player = {5}
            stockNum = {2}
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
            player = {6}
            stockNum = {2}
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
            player = {7}
            stockNum = {2}
            playersStocksPosition="absolute"
            playersStocksTop={0}
            playersStocksLeft={0}
          />
        </View>
      </View>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
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
    left: 26,
    height: 36,
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
    height: 9,
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
  rectangleView: {
    top: 786,
    backgroundColor: Color.colorSeagreen_100,
    width: 393,
    height: 66,
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
  draftlist: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default DraftFilled;
