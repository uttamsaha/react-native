import { userData } from "@/lib/data";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function StoryList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={userData}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.storyItem}>
              {/* Story Ring */}
              <View style={styles.storyRing}>
                <Image source={{ uri: item.image }} style={styles.avatar} />
              </View>

              {/* Name */}
              <Text style={styles.name} numberOfLines={1}>
                {item.name}
              </Text>

              {/* Age & Gender */}
              <Text style={styles.subText}>
                {item.age} • {item.gender}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },

  storyItem: {
    width: 90,
    alignItems: "center",
    marginHorizontal: 8,
  },

  storyRing: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: "#ff8501", // Instagram-like color
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  name: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },

  subText: {
    fontSize: 10,
    color: "#666",
  },
});
