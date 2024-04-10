import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "400",
  },
  caption: {
    fontSize: 14,
    fontWeight: "400",
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
const Subtitle = ({ children }) => (
  <Text style={styles.subtitle}>{children}</Text>
);
const BodyText = ({ children }) => (
  <Text style={styles.bodyText}>{children}</Text>
);
const Caption = ({ children }) => (
  <Text style={styles.caption}>{children}</Text>
);

export { Title, Subtitle, BodyText, Caption };
