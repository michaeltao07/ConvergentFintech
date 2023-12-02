import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import PlayersStocks from "../components/PlayersStocks";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const DraftList = () => {
  return (
    <View style={styles.draftlist}>
      <Text style={styles.draft}>DRAFT</Text>
      <Image
        style={styles.draftlistChild}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <View style={styles.draftlistItem} />
      <Text style={styles.startDraft}>Start Draft</Text>
      <Text style={[styles.player1, styles.playerTypo2]}>Player 1</Text>
      <Text style={[styles.player2, styles.playerTypo]}>Player 2</Text>
      <Text style={[styles.player3, styles.playerTypo1]}>Player 3</Text>
      <Text style={[styles.player4, styles.playerTypo2]}>Player 4</Text>
      <Text style={[styles.player5, styles.playerTypo]}>Player 5</Text>
      <Text style={[styles.player6, styles.playerTypo]}>Player 6</Text>
      <Text style={[styles.player7, styles.playerTypo1]}>Player 7</Text>
      <View style={[styles.playersStocksWrapper, styles.playersLayout]}>
        <PlayersStocks
          playersStocksPosition="absolute"
          playersStocksTop={0}
          playersStocksLeft={0}
        />
      </View>
      <View style={[styles.playersStocksContainer, styles.playersLayout]}>
        <PlayersStocks
          playersStocksPosition="absolute"
          playersStocksTop={0}
          playersStocksLeft={0}
        />
      </View>
      <View style={[styles.draftlistInner, styles.playersLayout]}>
        <View style={[styles.playersStocksFrame, styles.rectangleViewPosition]}>
          <PlayersStocks
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
    fontSize: FontSize.size_mini,
    height: 16,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  playerTypo: {
    height: 15,
    width: 58,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  playerTypo1: {
    width: 58,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  playersLayout: {
    width: 294,
    height: 36,
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 0,
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
    top: 197,
    width: 56,
    height: 16,
    left: 28,
  },
  player2: {
    top: 338,
    left: 27,
  },
  player3: {
    top: 422,
    left: 26,
    height: 16,
  },
  player4: {
    top: 492,
    left: 29,
    width: 59,
    height: 16,
  },
  player5: {
    top: 594,
    left: 28,
  },
  player6: {
    top: 703,
    left: 28,
  },
  player7: {
    top: 812,
    height: 18,
    left: 28,
  },
  playersStocksWrapper: {
    top: 328,
    left: 99,
    width: 294,
  },
  playersStocksContainer: {
    top: 413,
    left: 99,
    width: 294,
  },
  playersStocksFrame: {
    top: 0,
    width: 542,
    height: 36,
  },
  draftlistInner: {
    top: 223,
    left: 26,
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

export default DraftList;
