import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const InviteFriends = () => {
  return (
    <View style={styles.inviteFriends}>
      <Text style={[styles.contacts, styles.httpsFlexBox]}>CONTACTS</Text>
      <Text style={[styles.findYourFriends, styles.findPosition]}>
        Find your friends or invite your friend.
      </Text>
      <Text style={[styles.https, styles.httpsTypo]}>https:</Text>
      <View style={styles.rectangleViewShadowBox} />
      <Text style={[styles.friendsOnFantasy500, styles.fantasyTypo]}>
        Friends on Fantasy500
      </Text>
      <Image
        style={[styles.inviteFriendsItem, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsInner, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild1, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild2, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild3, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.anokhishah, styles.ayanjannuTypo]}>anokhishah</Text>
      <Text style={[styles.ayanjannu, styles.ayanjannuTypo]}>ayanjannu</Text>
      <Text style={[styles.andrewchoi, styles.ayanjannuTypo]}>andrewchoi</Text>
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
      <Image
        style={[styles.inviteFriendsChild4, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild5, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.nitishapokkula, styles.ayanjannuTypo]}>
        nitishapokkula
      </Text>
      <Text style={[styles.findYourFriends1, styles.findPosition]}>
        Find your friends or invite your friend.
      </Text>
      <TextInput
        style={[styles.https1, styles.httpsTypo]}
        placeholder="https:"
        placeholderTextColor="#fff"
      />
      <View style={styles.rectangleViewShadowBox} />
      <Image
        style={[styles.inviteFriendsItem, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsInner, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild1, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild2, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild3, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.anokhishah, styles.ayanjannuTypo]}>anokhishah</Text>
      <Text style={[styles.ayanjannu, styles.ayanjannuTypo]}>ayanjannu</Text>
      <Image
        style={[styles.inviteFriendsChild4, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild5, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.inviteFriendsChild14}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.polygonIcon}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Text style={[styles.copyAndShare, styles.httpsTypo]}>
        copy and share link
      </Text>
      <View style={styles.inviteFriendsChild15} />
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
      <Text style={[styles.addOnFantasy500, styles.fantasyTypo]}>
        Add on Fantasy500
      </Text>
      <Image
        style={[styles.inviteFriendsChild16, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild17, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.anokhishah2, styles.ayanjannu2Typo]}>
        anokhishah
      </Text>
      <Text style={[styles.ayanjannu2, styles.ayanjannu2Typo]}>ayanjannu</Text>
      <Image
        style={[styles.inviteFriendsChild16, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.inviteFriendsChild17, styles.inviteChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.anokhishah2, styles.ayanjannu2Typo]}>
        anokhishah
      </Text>
      <Text style={[styles.ayanjannu2, styles.ayanjannu2Typo]}>ayanjannu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  httpsFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  findPosition: {
    width: 363,
    fontSize: FontSize.size_mini,
    top: 129,
    left: 20,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  httpsTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  fantasyTypo: {
    width: 243,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  inviteChildLayout: {
    height: 38,
    width: 38,
    position: "absolute",
  },
  ayanjannuTypo: {
    height: 15,
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
  ayanjannu2Typo: {
    left: 67,
    height: 15,
    width: 354,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
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
    fontFamily: FontFamily.interRegular,
  },
  https: {
    width: 58,
    left: 49,
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
    top: 165,
    left: 18,
    position: "absolute",
  },
  friendsOnFantasy500: {
    top: 244,
    left: 20,
  },
  inviteFriendsItem: {
    top: 283,
    left: 20,
  },
  inviteFriendsInner: {
    top: 330,
    left: 20,
  },
  ellipseIcon: {
    top: 377,
    left: 20,
  },
  inviteFriendsChild1: {
    top: 424,
    left: 20,
  },
  inviteFriendsChild2: {
    top: 471,
    left: 20,
  },
  inviteFriendsChild3: {
    top: 518,
    left: 20,
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
    left: 20,
  },
  inviteFriendsChild5: {
    top: 615,
    left: 20,
  },
  nitishapokkula: {
    top: 623,
  },
  findYourFriends1: {
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
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
    left: 154,
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
    top: 674,
    left: 18,
  },
  inviteFriendsChild16: {
    top: 713,
    left: 18,
  },
  inviteFriendsChild17: {
    top: 760,
    left: 18,
  },
  anokhishah2: {
    top: 717,
  },
  ayanjannu2: {
    top: 764,
  },
  inviteFriends: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default InviteFriends;