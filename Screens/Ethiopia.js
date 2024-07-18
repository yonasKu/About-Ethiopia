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
import {
  BORDER_RADIUS,
  FONT_SIZES,
  MARGIN,
  PADDING,
  VERTICAL_SPACING,
} from "../Utils/Constants";
import Colors from "../Utils/Colors";

const data = [
  {
    id: "1",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "2",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "3",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "4",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "5",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "6",

    imageUrl: "https://via.placeholder.com/50",
  },
  // Add more data items as needed
];

const dataSecond = [
  {
    id: "1",
    Title: "Hello",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "2",
    Title: "Hello",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "3",
    Title: "Hello",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "4",
    Title: "Hello",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "5",
    Title: "Hello",

    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "6",
    Title: "Hello",
    imageUrl: "https://via.placeholder.com/50",
  },
  // Add more data items as needed
];

const renderItem = ({ item }) => (
  <View style={{ marginRight: MARGIN.MEDIUM }}>
    <Image style={styles.peoplesimage} source={{ uri: item.imageUrl }} />
  </View>
);
const renderItem2 = ({ item }) => (
  <View
    style={{
      backgroundColor: "#FFFFFF",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 0.5,
      elevation: 1,
      marginLeft: MARGIN.MEDIUM,
      borderRadius: 8,
    }}
  >
    <Text style={styles.listTitle}>{item.Title}</Text>
    <Image
      style={styles.fourthContainerimage}
      source={{ uri: item.imageUrl }}
    />
  </View>
);
const Ethiopia = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView nestedScrollEnabled={true}>
        <View
          style={{
            // backgroundColor: "red",
            display: "flex",
            paddingTop: PADDING.LARGE,
            position: "relative",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              // marginTop: MARGIN.SMALL,
            }}
          >
            <View
              style={{
                flex: 1,
                borderRadius: 8,
                backgroundColor: "#165434",
                height: 105,
                gap: 4,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 36,
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#FCF2F2",
                }}
              >
                Discover Ethiopia
              </Text>
              <Text
                style={{
                  width: 215,
                  fontSize: 12,
                  color: "#F6F2FF",
                  marginLeft: 18,
                }}
              >
                Embark on Enlightening Ethiopian Experiences
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "lightgray", // Corrected color name
              marginRight: MARGIN.SMALL,
              opacity: 0.5,
              width: 110,
              height: 125,
              position: "absolute",
              bottom: 0, // Ensures the gray container is aligned at the bottom
              right: 2,
              marginTop: -15, // Adjust this value to control the overflow from the top
            }}
          ></View>
        </View>
        <View style={styles.artsContainer}>
          <Text
            style={{
              fontSize: FONT_SIZES.LARGE,
              fontWeight: "700",
              fontStyle: "normal",
              lineHeight: 28,
              color: "#171A1F",
              marginHorizontal: MARGIN.SMALL,
              marginBottom: VERTICAL_SPACING.SMALL,
            }}
          >
            Arts
          </Text>
          <Image
            style={styles.image}
            source={{ uri: "https://via.placeholder.com/200" }}
          />
        </View>
        <View style={styles.historyContainer}>
          <View style={{ position: "relative", justifyContent: "center" }}>
            <Text style={styles.subHeading}>History</Text>
            {/* <TouchableOpacity
              style={{ position: "absolute", right: 10 }}
              onPress={() => {
                navigation.navigate("Places");
              }}
            >
              <Text style={styles.navigateText}>View All</Text>
            </TouchableOpacity> */}
          </View>

          <Pressable style={styles.innerhistoryContainer}>
            <View
              style={{
                paddingHorizontal: PADDING.MEDIUM,
                flex: 0.75,
              }}
            >
              <Text
                style={{
                  fontSize: FONT_SIZES.MEDIUM,
                  fontWeight: "400",
                  fontStyle: "normal",
                  //lineHeight: 28,
                  paddingVertical: 4,
                  color: "#171A1F",
                }}
              >
                Ethiopian history
              </Text>
              <Text
                style={{ color: Colors.SECONDARY }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Endulge yourself in rich and Vast Ethiopian history
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
          </Pressable>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.subHeading}>Peoples</Text>
          <View style={styles.innerSecondContainer}>
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
          <Pressable style={styles.innerThirdContainer}>
            <View
              style={
                {
                  //paddingHorizontal: PADDING.MEDIUM,
                }
              }
            >
              <View
                style={{
                  //marginHorizontal: MARGIN.MEDIUM,
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                  backgroundColor: "grey",
                  opacity: 0.65,
                  width: 85,
                  height: 85,
                }}
              ></View>
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: MARGIN.MEDIUM,
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
                Languages
              </Text>
              <Text
                style={{ color: Colors.SECONDARY }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                Know more about ethiopian language
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.fourthContainer}>
          <Text style={styles.subHeading}>Cuisine</Text>
          <View style={styles.innerfourthContainer}>
            <FlatList
              data={dataSecond}
              renderItem={renderItem2}
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

export default Ethiopia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEFE",
    //alignItems: "center",
  },
  image: {
    borderRadius: BORDER_RADIUS.LARGE,
    height: 205,
  },
  subHeading: {
    fontSize: FONT_SIZES.LARGE,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 28,
    color: "#171A1F",
    padding: PADDING.SMALL,
    marginHorizontal: MARGIN.SMALL,
    marginBottom: VERTICAL_SPACING.SMALL / 2,
  },
  artsContainer: {
    marginTop: VERTICAL_SPACING.SMALL,
    marginHorizontal: MARGIN.SMALL,
    padding: 5,
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
  },
  innerhistoryContainer: {
    alignItems: "center",
    borderRadius: 14,
    display: "flex",
    marginHorizontal: 10,

    height: 105,
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
    // borderRadius: 4,
  },
  historyContainer: {
    marginTop: MARGIN.SMALL,
  },
  secondContainer: {
    marginTop: MARGIN.SMALL,
  },
  peoplesimage: {
    width: 70,
    height: 70,
    borderRadius: BORDER_RADIUS.EXTRA_LARGE,
  },
  innerSecondContainer: {
    //paddingVertical: PADDING.SMALL / 2,
    justifyContent: "space-between",
    marginBottom: VERTICAL_SPACING.MEDIUM,
    marginLeft: VERTICAL_SPACING.MEDIUM,
  },
  innerThirdContainer: {
    alignItems: "center",
    borderRadius: 14,
    display: "flex",
    marginHorizontal: 10,
    marginTop: VERTICAL_SPACING.SMALL,
    //borderWidth: 1,
    height: 85,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    //paddingVertical: PADDING.SMALL,

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
  thirdContainer: {
    marginTop: MARGIN.SMALL,
    paddingHorizontal: PADDING.SMALL,
  },
  fourthContainer: {
    marginTop: MARGIN.SMALL,
  },
  fourthContainerimage: {
    width: 135,
    height: 95,
    borderRadius: BORDER_RADIUS.LARGE,
  },
  innerfourthContainer: {
    paddingVertical: PADDING.SMALL / 2,
    justifyContent: "space-between",
  },
  listTitle: {
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: "600",
    color: "#323743",
    marginVertical: MARGIN.SMALL,
    marginLeft: MARGIN.SMALL,
    paddingVertical: PADDING.SMALL / 2,
  },
  navigateText: {
    fontSize: 12,
    color: Colors.TextPurple,
  },
  flatListContent: {
    marginLeft: MARGIN.MEDIUM,
  },
});
