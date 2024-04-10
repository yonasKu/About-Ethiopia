import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/HomeScreen.js";
import Ethiopia from "../Screens/Ethiopia.js";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {},
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Ethiopia"
        component={Ethiopia}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {},
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
