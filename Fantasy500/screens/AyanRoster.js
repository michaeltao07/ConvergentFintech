import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, ScrollView, TouchableOpacity } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import Home from './Home';
import Roster from "./Roster";
import Profile from "./Profile";
import Leaderboard from "./Leaderboard";
import VersusPage from "./VersusPage";
import TradePage from "./TradePage";
import TradeMac from "./TradeMac";


const AyanRoster = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate(TradeMac);
  }
  return (
    <ScrollView style={styles.roster}>
      <Image
        style={[styles.rosterChild, styles.rosterChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.rosterChild, styles.rosterChildLayout]}
        contentFit="cover"
        source={require("../assets/fLogo.png")}
      />
      <Text style={styles.yourDrafts}>AYAN'S DRAFTS</Text>
      <View style={styles.techie}>
      <Text style={[styles.technology, styles.technologyTypo]}>Technology</Text>
      <TouchableOpacity style={[styles.rosterInner, styles.rosterInnerShadowBox]} />
      <Text style={[styles.appleInc, styles.appleTypo]}>NVIDIA Corp.</Text>
      <Text style={[styles.nasdaqAppl, styles.nasdaqLayout]}>NASDAQ: NVDA</Text>
      
      <Pressable
        style={[styles.rectanglePressable, styles.rosterInnerShadowBox]}
      />
      <Text style={[styles.appleInc1, styles.appleInc1Position]}>
        Adobe Inc.
      </Text>
      <Text style={[styles.nasdaqAppl1, styles.appleInc1Position]}>
        NASDAQ: ADBE
      </Text>
      <View style={styles.techie2}>
      <TouchableOpacity onPress={handlePress} style={[styles.rosterInner, styles.rosterInnerShadowBox]} />
      <Text style={[styles.appleInc, styles.appleTypo]}>Alphabet Inc.</Text>
      <Text style={[styles.nasdaqAppl, styles.nasdaqLayout]}>NASDAQ: GOOGL</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rosterInnerShadowBox]}
      />
      <Text style={[styles.appleInc1, styles.appleInc1Position]}>
        Amazon.com Inc.
      </Text>
      <Text style={[styles.nasdaqAppl1, styles.appleInc1Position]}>
        NASDAQ: AMZN
      </Text>
      </View>
        </View>
        <View style={styles.healthb}>
      <Text style={[styles.healthcare, styles.technologyTypo]}>Consumer</Text>
        <View>
        <Pressable style={[styles.rosterChild1, styles.rosterChild1ShadowBox]} />
      <Text style={[styles.appleInc2, styles.appleIconPosition1]}>
        PepsiCo, Inc.
      </Text>
      <Text style={[styles.nasdaqAppl2, styles.nasdaqTypo1]}>NASDAQ: PEP</Text>
      <View style={[styles.rectangleView, styles.rosterChild1ShadowBox]} />
      <Text style={[styles.appleInc3, styles.appleIconPosition1]}>
        Procter & Gamble Co
      </Text>
      <Text style={[styles.nasdaqAppl3, styles.nasdaqTypo1]}>NASDAQ: PG</Text>
      
        </View>
        </View>
      <View style={styles.realEst}>
      <Text style={[styles.realEstate, styles.technologyTypo]}>Healthcare</Text>
      <View style={[styles.rosterChild2, styles.rosterChildShadowBox]} />
      <Text style={[styles.appleInc4, styles.appleIconPosition]}>
        Merck & Co Inc.
      </Text>
      <Text style={[styles.nasdaqAppl4, styles.nasdaqTypo]}>NASDAQ: MRK</Text>
     
      <Pressable style={[styles.rosterChild3, styles.rosterChildShadowBox]} />
      <Text style={[styles.appleInc5, styles.appleIconPosition]}>
        Pfizer Inc.
      </Text>
      <Text style={[styles.nasdaqAppl5, styles.nasdaqTypo]}>NASDAQ: PFE</Text>
     
      <View style={styles.rosterChild4} />
      </View>
      <View style={styles.finance}>
      <Text style={[styles.realEstate, styles.technologyTypo]}>Finance</Text>
      <View style={[styles.rosterChild2, styles.rosterChildShadowBox]} />
      <Text style={[styles.appleInc4, styles.appleIconPosition]}>
      Mastercard Inc.
      </Text>
      <Text style={[styles.nasdaqAppl4, styles.nasdaqTypo]}>NASDAQ: MA</Text>
     
      <Pressable style={[styles.rosterChild3, styles.rosterChildShadowBox]} />
      <Text style={[styles.appleInc5, styles.appleIconPosition]}>
        Visa Inc.
      </Text>
      <Text style={[styles.nasdaqAppl5, styles.nasdaqTypo]}>NASDAQ: V</Text>
    
      </View>
      <View style={styles.rectanglePressable1}/>

     <Pressable
        style={styles.mdihomePosition}
        onPress={() => navigation.navigate(Home)}
      >
        <Image
          style={styles.iconLayouts}
          contentFit="cover"
          source={require("../assets/mdihomeoutline.png")}
        />
      </Pressable> 
      <Pressable
        style={styles.ggprofilePosition}
        onPress={() => navigation.navigate(Profile)}
      >
        <Image
          style={styles.iconLayouts}
          contentFit="cover"
          source={require("../assets/ggprofile.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition1}
        onPress={() => navigation.navigate(Roster)}
      >
        <Image
          style={[styles.icon1, styles.iconLayouts]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.tablervsPosition}
        onPress={() => navigation.navigate(VersusPage)}
      >
        <Image
          style={styles.iconLayouts}
          contentFit="cover"
          source={require("../assets/tablervs.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorPosition}
        onPress={() => navigation.navigate(Leaderboard)}
      >
        <Image
          style={[styles.icon1, styles.iconLayouts]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  iconLayouts: {
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
  rectanglePressable1: {
    top: 746,
    left: 0,
    backgroundColor: Color.colorSeagreen_100,
    width: 393,
    height: 66,
    position: "fixed",
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
  techie: {
    right: 10,
    top: -10,
  },
  techie2: {
    top: 60,
  },
  healthb: {
    right: 10,
    bottom: -160,
  },
  realEst: {
    right: 10,
    bottom: 60,
  },
  finance: {
    right: 10,
    bottom: -160,
  },
  rosterChildLayout: {
    height: 36,
    position: "absolute",
  },
  technologyTypo: {
    left: 30,
    width: 243,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rosterInnerShadowBox: {
    height: 52,
    width: 164,
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
    top: 192,
    position: "absolute",
  },
  appleTypo: {
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  nasdaqLayout: {
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    top: 212,
  },
  appleInc1Position: {
    left: 215,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  rosterChild1ShadowBox: {
    top: 301,
    height: 52,
    width: 164,
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
    position: "absolute",
  },
  appleIconPosition1: {
    top: 309,
    position: "absolute",
  },
  nasdaqTypo1: {
    top: 321,
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    left: 34,
    height: 23,
    width: 19,
  },
  iconLayout: {
    left: 211,
    width: 20,
    height: 23,
  },
  rosterChildShadowBox: {
    top: 410,
    height: 52,
    width: 164,
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
    position: "absolute",
  },
  appleIconPosition: {
    top: 418,
    position: "absolute",
  },
  nasdaqTypo: {
    top: 430,
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  rosterChild: {
    top: 80,
    width: 36,
    left: 25,
  },
  rosterItem: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  yourDrafts: {
    top: 78,
    left: 72,
    fontSize: FontSize.size_16xl,
    width: 296,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  technology: {
    top: 160,
    left: 25,
  },
  healthcare: {
    top: 272,
    left: 28,
  },
  realEstate: {
    top: 381,
    left: 26,
  },
  rosterInner: {
    left: 25,
  },
  appleInc: {
    width: 100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    left: 37,
    fontSize: FontSize.size_3xs,
    position: "absolute",
    top: 200,
  },
  nasdaqAppl: {
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    left: 37,
    position: "absolute",
  },
  image1Icon: {
    left: 28,
    height: 40,
    marginTop: 10,
    width: 159,
    top: 200,
    position: "absolute",
  },
  rectanglePressable: {
    left: 203,
  },
  appleInc1: {
    width: 90,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    top: 200,
  },
  nasdaqAppl1: {
    width: 85,
    color: Color.colorLimegreen,
    fontFamily: FontFamily.interRegular,
    top: 212,
  },
  image2Icon: {
    left: 210,
    width: 20,
    height: 23,
    top: 200,
    position: "absolute",
  },
  rosterChild1: {
    left: 26,
  },
  appleInc2: {
    left: 38,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: 100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl2: {
    left: 38,
  },
  image3Icon: {
    top: 309,
    position: "absolute",
  },
  rectangleView: {
    left: 204,
  },
  appleInc3: {
    left: 216,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: 110,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl3: {
    left: 216,
  },
  image4Icon: {
    top: 309,
    position: "absolute",
  },
  rosterChild2: {
    left: 26,
  },
  appleInc4: {
    left: 38,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: 120,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl4: {
    left: 38,
  },
  image5Icon: {
    left: 34,
    height: 23,
    width: 19,
  },
  rosterChild3: {
    left: 204,
  },
  appleInc5: {
    left: 216,
    height: 25,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    width: 120,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  nasdaqAppl5: {
    left: 216,
  },
  image6Icon: {
    left: 211,
    width: 20,
    height: 23,
  },
  roster: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AyanRoster;
