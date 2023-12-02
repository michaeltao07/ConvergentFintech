import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, ScrollView, View, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import DraftList from "./DraftList";
import Profile from "./Profile";
import VersusPage from "./VersusPage";
import Leaderboard from "./Leaderboard";
import Wallet from "./Wallet"
import Roster from "./Roster";

const Home = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate(DraftList);
  };

  return (
    <View style={styles.home}>
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Text style={styles.home1}>HOME</Text>
      <TouchableOpacity onPress={()=>{handlePress()}}>
      <View style={[styles.homeInner, styles.homeChildShadowBox1]}>
        <Text style={styles.leagueNames}>Sriya's League</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{handlePress()}}>
      <View style={styles.rectangleView}>
      <Text style={styles.leagueNames}>Office League</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{handlePress()}}>
      <View style={[styles.homeChild1, styles.homeChildShadowBox1]}>
      <Text style={styles.leagueNames}>LeagueOfLosers</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity> 
      <View style={[styles.homeChild2, styles.homeChildShadowBox1]} />
      </TouchableOpacity>
      <View style={[styles.homeChild3, styles.homeChildShadowBox]} />
      <TouchableOpacity onPress={handlePress}>
        <View>
        <Text style={[styles.joinPublicLeague, styles.leagueTypo]}>
          Join Public League
        </Text>
        </View>
      </TouchableOpacity>
      <Text style={[styles.createNewLeague, styles.leagueTypo]}>
        Create New League
      </Text>
      <View style={[styles.homeChild4, styles.homeChildShadowBox]} />
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
        // onPress={() => navigation.navigate(Roster)}
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
  );
};

const styles = StyleSheet.create({
  leagueNames: {
    color: "white",
    top: 35,
    left: 40,
    width: 337,
    fontSize: FontSize.size_16xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
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
    left: 20,
    position: "absolute",
  },
  homeChildShadowBox: {
    height: 48,
    width: 158,
    borderWidth: 1,
    borderColor: Color.colorLimegreen,
    borderStyle: "solid",
    backgroundColor: Color.colorSeagreen_400,
    top: 676,
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
    top: 690,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
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
    top: 150,
  },
  rectangleView: {
    top: 275,
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
    left: 20,
    position: "absolute",
  },
  homeChild1: {
    top: 400,
  },
  homeChild2: {
    top: 525,
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
    height: 20,
    top: 690,
  },
  createNewLeague: {
    left: 221,
    width: 132,
    height: 20,
    top: 690,
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
