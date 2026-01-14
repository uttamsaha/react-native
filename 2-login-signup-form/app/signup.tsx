import MyButton from "@/components/ui/button";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";

export default function SignUpPage() {
  const router = useRouter();

  const onLogin = () => {
    router.push("/login");
  };

  const onListView = () => {
    router.push("/list");
  };
  return (
    <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{ width: "100%", height: 400 }}
        resizeMode="stretch"
      />
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Enter password" />
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Enter email" />
        <View
          style={{
            width: "100%",
            gap: 10
          }}
        >
          <MyButton title="Register" onPress={onLogin} />
          <MyButton title="FlatList" onPress={onListView} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    minHeight: "100%",
    paddingTop: 15,
    flex: 1,
  },
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 100
  },
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderColor: "#d3d3d3",
  },
});
