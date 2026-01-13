import MyButton from "@/components/ui/button";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {
    router.push("/signup");
    console.log(credentials);
  };
  return (
    <View style={styles.body}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{ width: "100%", height: 400 }}
        resizeMode="stretch"
      />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            setCredentials((prev) => ({ ...prev, email: e }))
          }
          placeholder="Enter email"
        />
        <TextInput
          onChangeText={(e) =>
            setCredentials((prev) => ({ ...prev, password: e }))
          }
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <View
          style={{
            width: "100%",
          }}
        >
          <MyButton title="Login" onPress={onLogin} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    minHeight: "100%",
    paddingTop: 15,
  },
  container: {
    width: "100%",
    paddingHorizontal: 20,
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
