import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.homeItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={styles.home1}>HOME</Text>
      <View style={[styles.homeInner, styles.homeChildShadowBox1]} />
      <View style={styles.rectangleView} />
      <View style={[styles.homeChild1, styles.homeChildShadowBox1]} />
      <View style={[styles.homeChild2, styles.homeChildShadowBox1]} />
      <View style={[styles.homeChild3, styles.homeChildShadowBox]} />
      <Text style={[styles.joinPublicLeague, styles.leagueTypo]}>
        Join Public League
      </Text>
      <Text style={[styles.createNewLeague, styles.leagueTypo]}>
        Create New League
      </Text>
      <View style={[styles.homeChild4, styles.homeChildShadowBox]} />
      <Image
        style={[styles.ggprofileIcon, styles.ggprofilePosition]}
        contentFit="cover"
        source={require("../assets/ggprofile.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.tablervsIcon, styles.tablervsPosition]}
        contentFit="cover"
        source={require("../assets/tablervs.png")}
      />
      <Image
        style={[styles.mdihomeOutlineIcon, styles.mdihomePosition]}
        contentFit="cover"
        source={require("../assets/mdihomeoutline.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Profile")}
      />
      <Pressable
        style={styles.ggprofilePosition}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ggprofile1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition1}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.tablervsPosition}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/tablervs.png")}
        />
      </Pressable>
      <Pressable
        style={styles.mdihomePosition}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/mdihomeoutline.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildShadowBox1: {
    height: 113,
    width: 337,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkseagreen,
    borderRadius: Border.br_5xs,
    left: 28,
    position: "absolute",
  },
  homeChildShadowBox: {
    height: 48,
    width: 158,
    borderWidth: 1,
    borderColor: Color.colorLimegreen,
    borderStyle: "solid",
    backgroundColor: Color.colorSeagreen_400,
    top: 704,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  leagueTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 719,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  ggprofilePosition: {
    height: 30,
    width: 30,
    left: 119,
    top: 804,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  tablervsPosition: {
    height: 32,
    width: 33,
    left: 251,
    top: 803,
    position: "absolute",
  },
  mdihomePosition: {
    width: 37,
    left: 48,
    top: 801,
    height: 36,
    position: "absolute",
  },
  vectorPosition: {
    left: "80.92%",
    bottom: "2.46%",
    right: "12.21%",
    top: "94.48%",
    width: "6.87%",
    height: "3.05%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  homeChild: {
    top: 80,
    left: 25,
    width: 36,
    height: 36,
    position: "absolute",
  },
  homeItem: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  home1: {
    top: 79,
    left: 79,
    fontSize: FontSize.size_16xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 190,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  homeInner: {
    top: 190,
  },
  rectangleView: {
    top: 314,
    height: 114,
    width: 337,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkseagreen,
    borderRadius: Border.br_5xs,
    left: 28,
    position: "absolute",
  },
  homeChild1: {
    top: 439,
  },
  homeChild2: {
    top: 563,
  },
  homeChild3: {
    left: 28,
    height: 48,
    width: 158,
    borderWidth: 1,
    borderColor: Color.colorLimegreen,
    borderStyle: "solid",
    backgroundColor: Color.colorSeagreen_400,
    top: 704,
  },
  joinPublicLeague: {
    left: 44,
    width: 126,
    height: 10,
  },
  createNewLeague: {
    left: 221,
    width: 132,
    height: 19,
  },
  homeChild4: {
    left: 207,
  },
  ggprofileIcon: {
    overflow: "hidden",
  },
  vectorIcon: {
    left: "47.07%",
    bottom: "2.11%",
    right: "45.29%",
    top: "94.37%",
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
    top: 786,
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
    left: "47.07%",
    bottom: "2.11%",
    right: "45.29%",
    top: "94.37%",
    width: "7.63%",
    height: "3.52%",
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
