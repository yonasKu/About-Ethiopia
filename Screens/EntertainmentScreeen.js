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
import { BORDER_RADIUS, FONT_SIZES, MARGIN, PADDING } from "../Utils/Constants";

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
  {
    id: "4",
    name: "Gonr",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos mollitia, quam facilis quia saepe non. Obcaecati accusantium, consectetur quas deleniti facere in tempore laboriosam ea quos repudiandae, officia dolorum.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Gondar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos mollitia, quam facilis quia saepe non. Obcaecati accusantium, consectetur quas deleniti facere in tempore laboriosam ea quos repudiandae, officia dolorum.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more data items as needed
];

const data2 = [
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
  {
    id: "4",
    name: "Gonr",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos mollitia, quam facilis quia saepe non. Obcaecati accusantium, consectetur quas deleniti facere in tempore laboriosam ea quos repudiandae, officia dolorum.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Gondar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos mollitia, quam facilis quia saepe non. Obcaecati accusantium, consectetur quas deleniti facere in tempore laboriosam ea quos repudiandae, officia dolorum.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more data items as needed
];
const renderItem = ({ item }) => (
  <View style={[styles.itemContainer, { backgroundColor: "gray" }]}>
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
      <Text style={{ color: "#9095A1", fontSize: 16 }}>{item.name}</Text>
      <Text style={{ color: "#424856" }} numberOfLines={1} ellipsizeMode="tail">
        {item.description}
      </Text>
    </View>
  </View>
);
const renderSecondItem = ({ item }) => (
  <View style={[styles.SeconditemContainer]}>
    <Image style={styles.image} source={{ uri: item.imageUrl }} />
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
      <Text style={{ color: "#9095A1", fontSize: 16 }}>{item.name}</Text>
      <Text style={{ color: "#424856" }} numberOfLines={1} ellipsizeMode="tail">
        {item.description}
      </Text>
    </View>
  </View>
);
const EntertainmentScreeen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView nestedScrollEnabled={true}>
        <View
          style={{
            marginTop: MARGIN.SMALL,
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Text style={styles.headerText}>Where to ?</Text>
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
                backgroundColor: "#165434",
                height: 105,
              }}
            ></View>
          </View>

          <View
            style={{
              backgroundColor: "gray",
              width: 110,
              height: 120,
              position: "absolute",
              top: 0,
              right: 0,
            }}
          ></View>
        </View>

        <View style={styles.secondContainer}>
          <View style={styles.SecondInnerContainer}>
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
          <TouchableOpacity style={styles.entertainmentContainer}>
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
        </View>
        <View style={styles.thirdContainer}>
          <View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.subHeaderText}>Festivals</Text>
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
              data={data2}
              renderItem={renderSecondItem}
              nestedScrollEnabled={true}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
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
    //marginTop: MARGIN.SMALL,
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
    // Adjust the width as needed
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

    // Adjust the width as needed
    marginBottom: MARGIN.LARGE,
  },
});
