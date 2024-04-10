import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

const renderItem = ({ item }) => (
  <View style={{ marginLeft: MARGIN.MEDIUM }}>
    <Image style={styles.peoplesimage} source={{ uri: item.imageUrl }} />
  </View>
);
const Ethiopia = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView nestedScrollEnabled={true}>
        <Text>Ethiopia</Text>
        <View
          style={{
            //backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View
              style={{
                backgroundColor: "#165434",
                height: 105,
              }}
            ></View>
          </View>

          <View
            style={{
              backgroundColor: "gray",
              width: 110,
              height: 125,
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
          <Text style={styles.subHeading}>History</Text>
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
        <View style={styles.peoplesContainer}>
          <Text style={styles.subHeading}>Peoples</Text>
          <View style={styles.innerPeoplesContainer}>
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
    marginTop: VERTICAL_SPACING.LARGE,
    marginHorizontal: MARGIN.SMALL,
    padding: 5,
    borderWidth: 0.5,
    borderRadius: BORDER_RADIUS.SMALL,
  },
  innerhistoryContainer: {
    alignItems: "center",
    borderRadius: 14,
    display: "flex",
    marginHorizontal: 10,
    borderWidth: 1,
    height: 105,
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    padding: PADDING.SMALL,
  },
  historyContainer: {
    marginTop: MARGIN.SMALL,
  },
  peoplesContainer: {
    marginTop: MARGIN.SMALL,
  },
  peoplesimage: {
    width: 70,
    height: 70,
    borderRadius: BORDER_RADIUS.EXTRA_LARGE,
  },
  innerPeoplesContainer: {
    paddingVertical: PADDING.SMALL / 2,
    justifyContent: "space-between",
  },
});
