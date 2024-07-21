import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import {
  BORDER_RADIUS,
  FONT_SIZES,
  MARGIN,
  PADDING,
  VERTICAL_SPACING,
  windowHeight,
} from "../Utils/Constants";

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
    id: "3",
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
const renderItemSecond = ({ item }) => (
  <View style={styles.secondItemContainer}>
    <Image style={styles.secondimage} source={{ uri: item.imageUrl }} />
    {/* <View style={{ position: "absolute", bottom: 5 }}>
      <Text style={{ color: "#9095A1", fontSize: 16 }}>{item.name}</Text>
    </View> */}
    {/* <View
      style={{
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.15)", // Semi-transparent black overlay
        width: "100%",
        height: "100%",
      }}
    /> */}
    <View
      style={{
        position: "absolute",
        backgroundColor: "transparent", // Transparent background
        borderRadius: 4,
        top: 5,
        padding: PADDING.SMALL / 2,
      }}
    >
      <Text style={{ fontSize: 10, color: Colors.WHITE }}>some text</Text>
    </View>
    <View style={{ position: "absolute", bottom: 5 }}>
      <Text
        style={{
          color: "#9095A1",
          fontSize: 16,
          textShadowColor: "rgba(0, 0, 0, 0.75)", // Text shadow color
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 2,
        }}
      >
        {item.name}
      </Text>
      <Text style={{ color: "#424856" }} numberOfLines={1} ellipsizeMode="tail">
        {item.description}
      </Text>
    </View>
  </View>
);

const Places = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.innerContainer}>
          <View
            style={{
              marginTop: MARGIN.SMALL,
              marginLeft: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.headerText}>Where to ?</Text>
            <View style={styles.inputContainer}>
              <Feather
                name="search"
                size={16}
                color="#b78307"
                style={{ marginHorizontal: 10 }}
              />
              <TextInput
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                style={{}}
                //value={searchQuery}
                //onChangeText={(query) => handleSearch(query)}
              />
            </View>
          </View>

          <View style={styles.placesContainer}>
            <FlatList
              data={data}
              renderItem={renderItem}
              nestedScrollEnabled={true}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.secondContainer}>
            <FlatList
              data={data}
              renderItem={renderItemSecond}
              nestedScrollEnabled={true}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              //style={{ backgroundColor: "#FFFFFF" }}
            />
          </View>
          <TouchableOpacity style={styles.thirdContainer}>
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
          </TouchableOpacity>

          <Pressable style={styles.innerThirdContainer}>
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
                  //lineHeight: 28,
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
          </Pressable>

          <Pressable style={styles.innerThirdContainer}>
            <View
              style={{
                marginHorizontal: MARGIN.MEDIUM,
                alignSelf: "flex-end",
                backgroundColor: "grey",
                width: 55,
                height: 75,
              }}
            ></View>
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
                  //lineHeight: 28,
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
            ></View>
          </Pressable>
        </View>
        <Pressable style={styles.entertainmentContainer}>
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
                culpa incidunt, aut qui. Accusantium aliquam est corporis saepe
                exercitationem tempore id.
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
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFEFE",
    //alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    //marginHorizontal: 10,
    //paddingLeft: 10,
  },
  headerText: {
    color: Colors.BLACK,
    fontSize: FONT_SIZES.EXTRA_LARGE,
    fontWeight: "700",
    paddingVertical: PADDING.SMALL / 2,
    lineHeight: 32,
  },
  inputContainer: {
    marginTop: 2,
    marginBottom: 10,

    width: "90%",
    height: windowHeight / 14,
    borderColor: "#BDC0C9",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    marginRight: MARGIN.MEDIUM,
    width: 120, // Adjust the width as needed
    marginBottom: MARGIN.LARGE,
  },

  image: {
    borderRadius: BORDER_RADIUS.LARGE,
    height: 120,
    width: 120,
  },
  image: {
    borderRadius: BORDER_RADIUS.LARGE,
    height: 120,
    width: 120,
  },
  placesContainer: {
    marginLeft: 10,
    marginTop: VERTICAL_SPACING.SMALL,
  },
  secondContainer: {
    backgroundColor: "#FFFFFF",
    marginLeft: 4,
  },
  secondimage: {
    borderRadius: BORDER_RADIUS.LARGE,
    padding: 2,
    height: 165,
    width: 285,
  },
  secondItemContainer: {
    flex: 1,

    backgroundColor: "#FFFFFF",
    marginRight: MARGIN.MEDIUM,
    height: 165,
    width: 285, // Adjust the width as needed
    marginBottom: MARGIN.LARGE,
  },
  thirdContainer: {
    marginTop: MARGIN.SMALL,
    marginLeft: 10,
  },
  headerText: {
    color: Colors.BLACK,
    fontSize: FONT_SIZES.EXTRA_LARGE,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 32,
    paddingVertical: PADDING.MEDIUM,
  },
  subHeaderText: {
    height: 28,
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 28,
    color: "#171A1F",
  },
  navigateText: {
    fontSize: 12,
    color: Colors.TextPurple,
  },
  entertainmentContainer: {
    flex: 1,
    display: "flex",
    marginHorizontal: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: "center",

    backgroundColor: "#FFFEFE",
    marginTop: MARGIN.SMALL / 2,
  },
  innerThirdContainer: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: MARGIN.SMALL,
    borderRadius: 14,
    flex: 1,
    display: "flex",
    marginHorizontal: 10,
    width: "80%",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    padding: PADDING.SMALL,
  },
});
