import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Home from "./Home";
import VersusPage from "./VersusPage";
import Leaderboard from "./Leaderboard";
import Profile from "./Profile";
import Roster from "./Roster";

const InviteFriends = ({navigation}) => {
  return (
    <View style={styles.inviteFriends}>
      <Text style={[styles.contacts, styles.httpsFlexBox]}>CONTACTS</Text>
      <Text style={styles.findYourFriends}>
        Find your friends or invite your friend.
      </Text>
      <Text style={[styles.https, styles.httpsTypo]}>https:</Text>
      <View style={styles.rectangleViewShadowBox} />
      <Text style={[styles.friendsOnFantasy500, styles.fantasyTypo]}>
        Friends on Fantasy500
      </Text>
      <Text style={[styles.anokhishah, styles.ayanjannuTypo]}>anokhishah</Text>
      <Text style={[styles.ayanjannu, styles.ayanjannuTypo]}>ayanjannu</Text>
      <Text style={[styles.andrewchoi, styles.ayanjannuTypo]}>michaeltao</Text>
      <Text style={[styles.davidrobertson, styles.ayanjannuTypo]}>
        davidrobertson
      </Text>
      <Text style={[styles.jacobencarnado, styles.ayanjannuTypo]}>
        jacobencarnado
      </Text>
      <Text style={[styles.jayanthpandit, styles.ayanjannuTypo]}>
        jayanthpandit
      </Text>
      <Text style={[styles.mahikadawar, styles.ayanjannuTypo]}>
        mahikadawar
      </Text>
      <Text style={[styles.nitishapokkula, styles.ayanjannuTypo]}>
        nitishapokkula
      </Text>
     
      <View style={styles.rectangleViewShadowBox} />
      <Image
        style={[styles.inviteFriendsItem, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/anokh1.png")}
      />
      <Image
        style={[styles.inviteFriendsInner, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ayan.jpg")}
      />
      <Image
        style={[styles.ellipseIcon, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/michae1.png")}
      />
      <Image
        style={[styles.inviteFriendsChild1, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/david.png")}
      />
      <Image
        style={[styles.inviteFriendsChild2, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/jacob.jpg")}
      />
      <Image
        style={[styles.inviteFriendsChild3, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/jayanth.png")}
      />
      <Image
        style={[styles.inviteFriendsChild4, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/mahik1.png")}
      />
      <Image
        style={[styles.inviteFriendsChild5, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/nitish1.png")}
      />
      <Pressable onPress={()=>navigation.navigate(Profile)}>
      <Image
        style={styles.polygonIcon}
        contentFit="cover"
        source={require("../assets/polygon-11.png")}
      />
      </Pressable>
      <Text style={[styles.copyAndShare, styles.httpsTypo]}>
        copy and share link
      </Text>
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
      <Text style={[styles.addOnFantasy500, styles.fantasyTypo]}>
        Add on Fantasy500
      </Text>
      <Image
        style={[styles.inviteFriendsChild16, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/jjwatt.jpg")}
      />
      <Text style={[styles.anokhishah2, styles.ayanjannuTypo]}>jjwatt</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ggprofilePosition: {
    height: 30,
    width: 30,
    left: 104,
    top: 758,
    zIndex: 1,
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
    zIndex: 1,
    position: "absolute",
  },
  mdihomePosition: {
    width: 37,
    left: 27,
    top: 755,
    height: 36,
    zIndex: 1,
    position: "absolute",
  },
  vectorPosition: {
    width: 30,
    left: 317,
    top: 760,
    height: 27,
    zIndex: 1,
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
    zIndex: 1,
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
    zIndex: 1,
    position: "absolute",
  },
  httpsFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  httpsTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  fantasyTypo: {
    width: 243,
    fontSize: FontSize.size_xl,
    left: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  inviteChildLayout: {
    height: 38,
    width: 38,
    left: 20,
    borderRadius: 100,
    position: "absolute",
  },
  ayanjannuTypo: {
    height: 25,
    width: 354,
    fontSize: FontSize.size_lg,
    left: 69,
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
  contacts: {
    top: 78,
    left: 61,
    fontSize: FontSize.size_16xl,
    width: 239,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    position: "absolute",
  },
  findYourFriends: {
    top: 129,
    fontFamily: FontFamily.interRegular,
    width: 363,
    fontSize: FontSize.size_mini,
    left: 20,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  https: {
    width: 58,
    left: 30,
    top: 177,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
  },
  rectangleViewShadowBox: {
    height: 43,
    width: 358,
    borderWidth: 1,
    borderColor: Color.colorLimegreen,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSeagreen_400,
    borderRadius: Border.br_5xs,
    left: 8,
    top: 165,
    position: "absolute",
  },
  friendsOnFantasy500: {
    top: 244,
  },
  inviteFriendsItem: {
    top: 283,
  },
  inviteFriendsInner: {
    top: 330,
  },
  ellipseIcon: {
    top: 377,
  },
  inviteFriendsChild1: {
    top: 424,
  },
  inviteFriendsChild2: {
    top: 471,
  },
  inviteFriendsChild3: {
    top: 518,
  },
  anokhishah: {
    top: 287,
  },
  ayanjannu: {
    top: 334,
  },
  andrewchoi: {
    top: 381,
  },
  davidrobertson: {
    top: 430,
  },
  jacobencarnado: {
    top: 477,
  },
  jayanthpandit: {
    top: 526,
  },
  mahikadawar: {
    top: 573,
  },
  inviteFriendsChild4: {
    top: 565,
  },
  inviteFriendsChild5: {
    top: 615,
  },
  nitishapokkula: {
    top: 623,
  },
  https1: {
    left: 49,
    top: 177,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  inviteFriendsChild14: {
    top: 26,
    left: 123,
    width: 147,
    height: 20,
    position: "absolute",
  },
  polygonIcon: {
    top: 89,
    width: 22,
    height: 21,
    left: 20,
    position: "absolute",
  },
  copyAndShare: {
    top: 212,
    left: 134,
    fontSize: FontSize.size_3xs,
    textDecoration: "underline",
    width: 95,
    height: 11,
    textAlign: "left",
    color: Color.colorWhite,
  },
  inviteFriendsChild15: {
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
  addOnFantasy500: {
    top: 673,
  },
  inviteFriendsChild16: {
    top: 712,
  },
  inviteFriendsChild17: {
    top: 759,
  },
  anokhishah2: {
    top: 716,
  },
  ayanjannu2: {
    top: 763,
  },
  inviteFriends: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    zIndex: -1,
  },
});

export default InviteFriends;
