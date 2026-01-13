import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MyButton({
  title,
  onPress,
}: {
  title: string;
  onPress: any;
}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
});
