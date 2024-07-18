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
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../Utils/Colors";
import { FONT_SIZES, MARGIN, PADDING } from "../Utils/Constants";

const data = [
  {
    id: "1",
    name: "Gondar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos mollitia, quam facilis quia saepe non. Obcaecati accusantium, consectetur quas deleniti facere in tempore laboriosam ea quos repudiandae, officia dolorum.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Gondar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos mollitia, quam facilis quia saepe non. Obcaecati accusantium, consectetur quas deleniti facere in tempore laboriosam ea quos repudiandae, officia dolorum.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more data items as needed
];
const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image style={styles.image} source={{ uri: item.imageUrl }} />
    <Text style={{ color: "#9095A1", fontSize: 16 }}>{item.name}</Text>
    <Text style={{ color: "#424856" }} numberOfLines={1} ellipsizeMode="tail">
      {item.description}
    </Text>
  </View>
);
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Discover, Enlighten,Experience : Ethiopia Unveiled
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.containerinner}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Ethiopia");
            }}
            style={styles.experienceContainer}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.experinceText}>
                Ethiopia: Explore, Educate, Experience
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  margin: 5,
                  borderRadius: 18,
                  padding: 1,
                }}
              >
                <MaterialIcons name="arrow-right-alt" size={32} color="black" />
                {/* <Ionicons name="arrow-forward-sharp" size={25} color="black" /> */}
                {/* <FontAwesome name="long-arrow-right" size={25} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.placesContainer}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.subHeaderText}>Places</Text>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Entertainment");
            }}
            style={styles.entertainmentContainer}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 0.5,
                  marginRight: MARGIN.MEDIUM,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    fontStyle: "normal",
                    //lineHeight: 28,
                    paddingVertical: 4,
                    color: "#171A1F",
                  }}
                >
                  Entertainment
                </Text>
                <Text
                  style={{ fontSize: 12, color: "#424856" }}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  magnam at accusamus quos vitae. Vero molestiae hic dignissimos
                  culpa incidunt, aut qui. Accusantium aliquam est corporis
                  saepe exercitationem tempore id.
                </Text>
              </View>

              <View
                style={{
                  flex: 0.5,
                  // width: 163,
                  //height: 76,
                  borderRadius: 4,
                  backgroundColor: "#D9D9D9",
                  //justifyContent: "center",
                  justifyContent: "flex-end",
                  alignSelf: "flex-end",
                  padding: 12,
                }}
              >
                <View
                  style={{
                    width: 45,
                    height: 45,
                  }}
                ></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TravelTips");
            }}
            style={styles.TipsContainer}
          >
            <View
              style={{
                paddingHorizontal: PADDING.MEDIUM,
                flex: 0.75,
                marginRight: MARGIN.SMALL,
              }}
            >
              <Text
                style={{
                  fontSize: FONT_SIZES.MEDIUM,
                  fontWeight: "400",
                  fontStyle: "normal",
                  paddingVertical: 4,
                  color: "#171A1F",
                }}
              >
                Travel Tips
              </Text>
              <Text
                style={{ fontSize: 12, color: Colors.SECONDARY }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                know the tip and areas to visit
              </Text>
            </View>
            <View
              style={{
                flex: 0.25,
              }}
            >
              <View
                style={{
                  marginHorizontal: MARGIN.MEDIUM,
                  alignSelf: "flex-end",
                  backgroundColor: "grey",
                  width: 55,
                  height: 75,
                }}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEFE",
    //alignItems: "center",
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
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 32,
  },
  containerinner: {
    margin: 2,
    height: 45,
    backgroundColor: "grey",
  },
  innerContainer: {
    flex: 1,
    //marginHorizontal: 10,
    //paddingLeft: 10,
  },
  experienceContainer: {
    flexDirection: "row",
    display: "flex",
    paddingHorizontal: 15,
    paddingVertical: 60,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#D9D9D9",
  },
  experinceText: {
    fontSize: 14,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 22,
    color: "#FFFFFF",
  },
  placesContainer: {
    marginHorizontal: 10,
  },
  subHeaderText: {
    height: 28,
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 28,
    color: "#171A1F",
  },
  image: {
    borderRadius: 4,
    width: 200, // Adjust the width as needed
    height: 120, // Adjust the height as needed
  },
  itemContainer: {
    width: 225, // Adjust the width as needed
    padding: 10,
  },
  entertainmentContainer: {
    flex: 1,
    display: "flex",
    marginHorizontal: 18,
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: "center",

    backgroundColor: "#FFFEFE",
    marginTop: MARGIN.SMALL,
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
  },
  TipsContainer: {
    alignItems: "center",
    marginTop: MARGIN.MEDIUM,
    borderRadius: 14,
    flex: 1,
    display: "flex",
    marginHorizontal: 10,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    padding: PADDING.SMALL,

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
  navigateText: {
    fontSize: 12,
    color: Colors.TextPurple,
  },
  headerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
