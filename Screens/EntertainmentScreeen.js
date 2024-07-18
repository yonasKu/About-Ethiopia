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

import Colors from "../Utils/Colors";
import { BORDER_RADIUS, FONT_SIZES, MARGIN, PADDING } from "../Utils/Constants";

const data2 = [
  {
    id: "1",
    Date: "March 2 - March 4",
    event: "Timket",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    Date: "March 2 - March 4",
    event: "Timket",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    Date: "March 2 - March 4",
    event: "Timket",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    Date: "March 2 - March 4",
    event: "Timket",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more data items as needed
];

const data = [
  {
    id: "1",
    location: "Gondar",
    place: "Ethiopia park",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    location: "Gondar",
    place: "Ethiopia park",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    location: "Gondar",
    place: "Ethiopia park",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    location: "Gondar",
    place: "Ethiopia park",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more data items as needed
];

const EntertainmentScreeen = ({ navigation }) => {
  const [activeItem, setActiveItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        { backgroundColor: "#F2F3F4", marginTop: MARGIN.SMALL },
      ]}
    >
      {/* <Image style={styles.image} source={{ uri: item.imageUrl }} /> */}

      {/* <View
        style={{
          width: 110,
          height: 160,
          backgroundColor: "gray",
          borderRadius: BORDER_RADIUS.MEDIUM,
          marginVertical: 8,
        }}
      ></View> */}
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{ alignItems: "center", flexDirection: "row", padding: 4 }}
        >
          <EvilIcons name="location" size={22} color="black" />
          <View>
            <Text style={{ color: "#9095A1", fontSize: 10, lineHeight: 10 }}>
              {item.location}
            </Text>
            <Text
              style={{ color: "#424856", fontSize: 8, lineHeight: 8 }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.place}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderSecondItem = ({ item, index }) => {
    const isActive = item.id === activeItem;

    return (
      <TouchableOpacity
        style={[styles.SeconditemContainer, isActive && styles.activeItem]}
      >
        <Image
          style={[styles.image, { borderRadius: 14 }]}
          source={{ uri: item.imageUrl }}
        />
        <View
          style={{ paddingBottom: 10, flex: 1, justifyContent: "flex-end" }}
        >
          <Text
            style={{
              color: "#9095A1",
              fontSize: 12,
              paddingHorizontal: 4,
              paddingVertical: 4,
            }}
          >
            {item.Date}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ paddingHorizontal: 4, color: "#424856", fontSize: 14 }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.event}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <EvilIcons name="location" size={22} color="#8E94A0" />
              <Text style={{ color: "#BDC0C9" }}>TBA</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].item.id);
    }
  });
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
          <Text style={styles.headerText}>Night Life</Text>
        </View>

        <View
          style={{
            paddingHorizontal: 30,
            display: "flex",
            //flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                marginTop: 15,
                borderRadius: BORDER_RADIUS.MEDIUM,
                backgroundColor: "#E5696D",
                height: 105,
                justifyContent: "center",
                paddingLeft: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    // paddingHorizontal: 15,
                    // paddingTop: 15,
                    fontSize: 20,
                    color: "#FCF2F2",
                    fontWeight: "bold",
                  }}
                >
                  Clubs,Resorts
                </Text>
              </View>
              <View style={{ gap: 8, flexDirection: "row" }}>
                <Text
                  style={{
                    // paddingHorizontal: 20,
                    fontSize: 14,
                    color: "#F6F2FF",
                  }}
                >
                  discover places
                </Text>
                <Entypo name="chevron-small-right" size={24} color="#F6F2FF" />
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "gray",
              width: 110,
              height: 120,
              position: "absolute",
              top: 0,
              right: 30,
            }}
          ></View>
        </View>

        <View style={styles.secondContainer}>
          <View style={styles.SecondInnerContainer}>
            <View
              style={[styles.headerTextContainer, { position: "relative" }]}
            >
              <Text style={styles.headerText}>Arts & Gallery</Text>
              <TouchableOpacity
                style={{ position: "absolute", right: 10 }}
                onPress={() => {
                  navigation.navigate("Places");
                }}
              >
                <Text style={styles.navigateText}>View All</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={data}
              renderItem={renderItem}
              nestedScrollEnabled={true}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Festivals</Text>
              <TouchableOpacity
                style={{ position: "absolute", right: 10 }}
                onPress={() => {
                  navigation.navigate("Places");
                }}
              >
                <Text style={styles.navigateText}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <View>
                <FlatList
                  data={data2}
                  renderItem={renderSecondItem}
                  nestedScrollEnabled={true}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  onViewableItemsChanged={onViewableItemsChanged.current}
                  viewabilityConfig={viewabilityConfig.current}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fourthContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Sports</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image4}
                source={{ uri: "https://via.placeholder.com/100" }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",

                padding: 4,
              }}
            >
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>Sports And Stadiums</Text>
                <Text
                  style={styles.descriptionText}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Dive in to Ethiopia's stadiums and sports Area
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  marginRight: 30,
                  width: 70,
                  height: 35,
                  backgroundColor: "#ED5E00",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                }}
              >
                <Text style={{ color: "#E8CAB2" }}>See</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EntertainmentScreeen;

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
  headerText: {
    color: Colors.BLACK,
    fontSize: FONT_SIZES.EXTRA_LARGE,
    fontWeight: "700",
    paddingVertical: PADDING.SMALL / 2,
    lineHeight: 32,
  },
  subHeaderText: {
    height: 28,
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 28,
    color: "#171A1F",
  },
  containerinner: {
    margin: 2,
    height: 45,
    backgroundColor: "grey",
  },
  secondContainer: {
    marginLeft: 12,
  },
  navigateText: {
    fontSize: 12,
    color: Colors.TextPurple,
  },
  itemContainer: {
    flex: 1,
    padding: 8,
    borderRadius: BORDER_RADIUS.EXTRA_LARGE,
    marginRight: MARGIN.MEDIUM,
    width: 110,
    height: 160,
    marginBottom: MARGIN.LARGE,
  },
  headerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  thirdContainer: {
    marginTop: MARGIN.SMALL,
    marginLeft: 12,
  },
  image: {
    width: 250,
    height: 160,
  },
  SeconditemContainer: {
    width: 260,
    padding: 8,
    borderRadius: BORDER_RADIUS.EXTRA_LARGE,
    marginRight: MARGIN.MEDIUM,
    marginBottom: MARGIN.LARGE,
  },
  SecondInnerContainer: {
    marginTop: MARGIN.SMALL,
  },
  headerText: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 26,
    color: "#333333",
    textAlign: "right",
  },
  descriptionText: {
    color: "#808080",
  },
  priceDescriptionContainer: {
    justifyContent: "space-between",
    gap: 20,
  },
  priceDescriptionBlock: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  priceDescription: {
    fontSize: 16,
    color: "#333333",
  },
  finalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  finalPriceDescription: {
    color: "#333333",
    lineHeight: 26,
    fontSize: 16,
    fontWeight: "700",
  },
  bottomContainer: {
    flexDirection: "row",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 0,
    paddingLeft: 16,
  },
  summary: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  checkoutButtonContainer: {
    padding: 16,
  },
  checkoutButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#203F77",
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 8,
    borderRadius: 8,
  },
  fourthContainer: {
    marginTop: MARGIN.SMALL,
    marginLeft: 12,
    marginVertical: MARGIN.SMALL,
  },
  contentContainer: {
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
    marginTop: MARGIN.SMALL,
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
    fontSize: 15,
    fontWeight: "400",
  },
  descriptionText: {
    color: "#BDC0C9",
    fontSize: 12,
    lineHeight: 18,
    color: "gray",
  },
  activeItem: {
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 0.5,

    elevation: 1,
  },
});
