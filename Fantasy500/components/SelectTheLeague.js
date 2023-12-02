import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SelectTheLeague = () => {
  return (
    <Text style={styles.selectTheLeague}>
      Select the league you want to play.
    </Text>
  );
};

const styles = StyleSheet.create({
  selectTheLeague: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 249,
  },
});

export default SelectTheLeague;
