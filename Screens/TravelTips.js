import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../Utils/Colors";
import {
  BORDER_RADIUS,
  FONT_SIZES,
  MARGIN,
  PADDING,
  windowWidth,
} from "../Utils/Constants";

const TravelTips = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView nestedScrollEnabled={true}>
        <View
          style={{
            marginTop: MARGIN.SMALL,
            marginLeft: 10,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={styles.headerText}>Transportation Hubs</Text>

          <View style={styles.contentContainer}>
            <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
              <View style={{ flex: 1, flexDirection: "column", gap: 4 }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    // width: windowWidth / 2 - 10,
                    borderRadius: 4,
                    height: 65,
                    backgroundColor: "#F2F3F4",
                  }}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    //width: windowWidth / 2 - 10,
                    borderRadius: 4,
                    height: 65,
                    backgroundColor: "#F2F3F4",
                  }}
                ></TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  //width: windowWidth / 2 - 10,
                  borderRadius: 4,

                  height: 130,

                  backgroundColor: "#F2F3F4",
                }}
              ></TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: MARGIN.SMALL,
            marginLeft: 10,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={styles.headerText}>Advices & Contacts</Text>
        </View>

        <View style={styles.secondContainer}>
          <TouchableOpacity style={styles.secondContentContainer}>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <FontAwesome5
                name="exclamation-triangle"
                size={24}
                color="#F93E3E"
              />
              <Text style={styles.titleText}>Emergency Contacts</Text>
            </View>

            <Entypo name="chevron-thin-right" size={18} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.thirdContentContainer}>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <Image
                style={{
                  borderBottomLeftRadius: 13.77207062600321,
                  borderTopLeftRadius: 13.77207062600321,
                  alignSelf: "flex-start",
                  width: 74,
                  height: 74,
                }}
                source={{ uri: "https://via.placeholder.com/75" }}
              />
              <Text style={styles.titleText}>Trip Advisors</Text>
            </View>

            <Entypo name="chevron-thin-right" size={18} color="#16191E" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TravelTips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEFE",
  },
  header: {
    backgroundColor: Colors.PURPLE,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 4,
    shadowColor: "rgba(23, 26, 31, 0.07)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  //   headerText: {
  //     color: Colors.BLACK,
  //     fontSize: FONT_SIZES.EXTRA_LARGE,
  //     fontWeight: "700",
  //     paddingVertical: PADDING.SMALL / 2,
  //     lineHeight: 32,
  //   },
  headerText: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 26,
    color: "#333333",
    //textAlign: "right",
  },
  subHeaderText: {
    height: 28,
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 28,
    color: "#171A1F",
  },
  fourthContainer: {
    marginTop: MARGIN.SMALL,
    marginLeft: 12,
    marginVertical: MARGIN.SMALL,
  },
  secondContainer: {
    marginTop: MARGIN.SMALL,
    marginLeft: 12,
    gap: 4,
    marginVertical: MARGIN.SMALL,
  },

  contentContainer: {
    // backgroundColor: "#FFFFFF",
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 0.5,
    // elevation: 1,
    // borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginTop: MARGIN.SMALL,
    padding: PADDING.SMALL,
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 0.5,
    elevation: 1,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: MARGIN.SMALL,
    marginright: MARGIN.SMALL,
    padding: PADDING.MEDIUM,
    marginRight: 10,
  },
  thirdContentContainer: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 0.5,
    elevation: 1,
    borderRadius: 13.77207062600321,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: PADDING.MEDIUM,
    marginTop: MARGIN.SMALL,
    marginRight: 10,
  },
  imageContainer: {
    backgroundColor: "#FFFFFF",
    marginRight: 8,
  },
  image4: {
    width: 100,
    height: 100,
  },
  textContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: 170,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#16191E",
  },
  descriptionText: {
    color: "#BDC0C9",
    fontSize: 12,
    lineHeight: 18,
    color: "gray",
  },
});
