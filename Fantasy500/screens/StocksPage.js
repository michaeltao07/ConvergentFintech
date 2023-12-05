import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import DraftFilled from './DraftFilled';
import StockPage from "./StockPage";
import Home from './Home';
import Roster from "./Roster";
import Profile from "./Profile";
import Leaderboard from "./Leaderboard";
import VersusPage from "./VersusPage";

const StocksPage = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate(DraftFilled)
  };
  return (
    <View style={styles.stocksPage}>
      <Text style={[styles.appleInc, styles.textLayout]}>Apple Inc.</Text>
      <Text style={[styles.text, styles.textTypo]}>{`173.97`}</Text>
      <Text style={[styles.nasdaqAppl, styles.todayLayout]}>NASDAQ: AAPL</Text>
      <Text style={[styles.today, styles.todayLayout]}>
        +3.20 (1.87%) today
      </Text>
      <Text style={[styles.marketSummary, styles.textTypo]}>
        Market Summary
      </Text>
      <Text style={[styles.featured, styles.usdFlexBox]}>Featured</Text>
      <Text style={[styles.usd, styles.usdFlexBox]}>USD</Text>
      <View style={[styles.stocksPageChild, styles.stocksShadowBox]}>
      <Image
        style={[styles.graphBro]}
        contentFit="cover"
        zIndex={30}
        source={require("../assets/Fantasy500/Tech/AAPLgraph.png")}
      />
      </View>
      <TouchableOpacity onPress={handlePress}>
      <Pressable style={[styles.stocksPageInner, styles.stocksShadowBox]} />
      <Text style={[styles.addToRoster, styles.nasdaqApplTypo]}>
        Add to Roster
      </Text>
      </TouchableOpacity>
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

      <View style={[styles.stocksPageChild1, styles.stocksChildLayout]} />
      <Text style={[styles.newsArticle1, styles.newsTypo]}>news article 1</Text>
      <View style={[styles.stocksPageChild2, styles.stocksChildLayout]} />
      <Text style={[styles.newsArticle2, styles.newsTypo]}>news article 2</Text>
      <Pressable onPress={()=>navigation.navigate(StockPage)}>
      <Image
        style={styles.polygonIcon}
        contentFit="cover"
        source={require("../assets/polygon-11.png")}
      />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  graphBro: {
    top: 43,
    height: 150,
    width: 337,
    borderRadius: 10,

  },
  textLayout: {
    height: 34,
    width: 183,
  },
  textTypo: {
    left: 32,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  todayLayout: {
    height: 26,
    color: Color.colorLimegreen,
    textAlign: "left",
    position: "absolute",
  },
  usdFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  stocksShadowBox: {
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
  nasdaqApplTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stocksChildLayout: {
    height: 60,
    width: 306,
    backgroundColor: Color.colorGainsboro,
    left: 43,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  newsTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  image2Icon: {
    top: 73,
    left: 73,
    width: 60,
    height: 67,
    position: "absolute",
  },
  appleInc: {
    top: 80,
    fontSize: 25,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 80,
  },
  text: {
    top: 199,
    fontSize: FontSize.size_11xl,
    height: 34,
    width: 183,
  },
  nasdaqAppl: {
    top: 114,
    width: 191,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 80,
  },
  today: {
    top: 237,
    left: 33,
    fontSize: 16,
    fontFamily: FontFamily.interRegular,
    width: 298,
  },
  marketSummary: {
    top: 167,
    width: 169,
    fontSize: FontSize.size_xl,
  },
  featured: {
    top: 583,
    left: 153,
    width: 87,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  usd: {
    top: 209,
    left: 133,
    width: 43,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  stocksPageChild: {
    top: 271,
    left: 28,
    backgroundColor: Color.colorDarkseagreen,
    width: 337,
    height: 193,
  },
  stocksPageItem: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  stocksPageInner: {
    top: 489,
    left: 70,
    backgroundColor: Color.colorSeagreen_400,
    borderStyle: "solid",
    borderColor: Color.colorLimegreen,
    borderWidth: 1,
    width: 250,
    height: 58,
  },
  addToRoster: {
    top: 507,
    left: 128,
    width: 134,
    height: 25,
    fontSize: FontSize.size_xl,
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
  stocksPageChild1: {
    top: 619,
  },
  newsArticle1: {
    top: 634,
    left: 131,
    color: Color.colorBlack,
  },
  stocksPageChild2: {
    top: 686,
  },
  newsArticle2: {
    top: 704,
    left: 131,
    color: Color.colorBlack,
  },
  graphOfStock: {
    top: 356,
    left: 97,
  },
  polygonIcon: {
    top: 81,
    left: 31,
    width: 22,
    height: 21,
    position: "absolute",
  },
  showMoreOn: {
    top: 753,
    left: 151,
    fontSize: FontSize.size_3xs,
    textDecoration: "underline",
    width: 91,
    height: 11,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  stocksPage: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "110%",
    height: 852,
    overflow: "hidden",
    left: -10,
  },
});

export default StocksPage;
