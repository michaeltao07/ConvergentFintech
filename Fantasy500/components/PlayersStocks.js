import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const stocks = ['AAPL', 'MSFT', 'GOOG', 'TSLA', 'NVDA', 'INTC', 'FB', 'AMD', 'NFLX'];
const PlayersStocks = ({
  player,
  stockNum,
  playersStocksPosition,
  playersStocksTop,
  playersStocksLeft,
}) => {
  const playersStocksStyle = useMemo(() => {
    return {
      ...getStyleValue("position", playersStocksPosition),
      ...getStyleValue("top", playersStocksTop),
      ...getStyleValue("left", playersStocksLeft),
    };
  }, [playersStocksPosition, playersStocksTop, playersStocksLeft]);

  return (
    <View style={[styles.playersStocks, playersStocksStyle]}>
      <View style={[styles.playersStocksChild, styles.playersChildShadowBox1]}>
        <Text>{stocks[player]}</Text>
      </View>
      <View style={[styles.playersStocksItem, styles.playersChildShadowBox]} />
      <View style={[styles.playersStocksInner, styles.playersChildShadowBox]} />
      <View style={[styles.rectangleView, styles.playersChildShadowBox1]} />
      <View style={[styles.playersStocksChild1, styles.playersChildShadowBox1]} />
      <View style={[styles.playersStocksChild2, styles.playersChildShadowBox1]} />
      <View style={[styles.playersStocksChild3, styles.playersChildShadowBox]} />
      <View style={[styles.playersStocksChild4, styles.playersChildShadowBox]} />
      <View style={[styles.playersStocksChild5, styles.playersChildShadowBox1]} />
      <View style={[styles.playersStocksChild6, styles.playersChildShadowBox1]} />
    </View>
  );
};

const styles = StyleSheet.create({
  playersChildShadowBox1: {
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
    bottom: "0%",
    top: "0%",
    width: "8.49%",
    height: "100%",
    position: "absolute",
  },
  playersChildShadowBox: {
    width: "8.3%",
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
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  playersStocksChild: {
    right: "91.51%",
    left: "0%",
  },
  playersStocksItem: {
    right: "81.55%",
    left: "10.15%",
  },
  playersStocksInner: {
    right: "71.4%",
    left: "20.3%",
  },
  rectangleView: {
    right: "61.25%",
    left: "30.26%",
  },
  playersStocksChild1: {
    right: "50.92%",
    left: "40.59%",
  },
  playersStocksChild2: {
    right: "40.59%",
    left: "50.92%",
  },
  playersStocksChild3: {
    right: "30.63%",
    left: "61.07%",
  },
  playersStocksChild4: {
    right: "20.48%",
    left: "71.22%",
  },
  playersStocksChild5: {
    right: "10.33%",
    left: "81.18%",
  },
  playersStocksChild6: {
    right: "0%",
    left: "91.51%",
  },
  playersStocks: {
    width: 542,
    height: 36,
  },
});

export default PlayersStocks;
