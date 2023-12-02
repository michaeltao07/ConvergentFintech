import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const StocksPage = () => {
  return (
    <View style={styles.stocksPage}>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.appleInc, styles.textLayout]}>Apple Inc</Text>
      <Text style={[styles.text, styles.textTypo]}>{`173.97
`}</Text>
      <Text style={[styles.nasdaqAppl, styles.todayLayout]}>NASDAQ: APPL</Text>
      <Text style={[styles.today, styles.todayLayout]}>
        +3.20 (1.87%) today
      </Text>
      <Text style={[styles.marketSummary, styles.textTypo]}>
        Market Summary
      </Text>
      <Text style={[styles.featured, styles.usdFlexBox]}>Featured</Text>
      <Text style={[styles.usd, styles.usdFlexBox]}>USD</Text>
      <View style={[styles.stocksPageChild, styles.stocksShadowBox]} />
      <Image
        style={styles.stocksPageItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Pressable style={[styles.stocksPageInner, styles.stocksShadowBox]} />
      <Text style={[styles.addToRoster, styles.nasdaqApplTypo]}>
        Add to Roster
      </Text>
      <View style={styles.rectangleView} />
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
      <View style={[styles.stocksPageChild1, styles.stocksChildLayout]} />
      <Text style={[styles.newsArticle1, styles.newsTypo]}>news article 1</Text>
      <View style={[styles.stocksPageChild2, styles.stocksChildLayout]} />
      <Text style={[styles.newsArticle2, styles.newsTypo]}>news article 2</Text>
      <Text style={[styles.graphOfStock, styles.newsTypo]}>
        graph of stock value
      </Text>
      <Image
        style={styles.polygonIcon}
        contentFit="cover"
        source={require("../assets/polygon-11.png")}
      />
      <Text style={[styles.showMoreOn, styles.nasdaqApplTypo]}>
        show more on web
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    left: 152,
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
    left: 152,
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
    height: 9,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleView: {
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
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default StocksPage;
