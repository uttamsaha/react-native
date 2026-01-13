import MyButton from "@/components/ui/button";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function RootPage() {
  const router = useRouter();

  const onContinue = () => {
    router.push("/login");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyButton title="Continue" onPress={onContinue} />
    </View>
  );
}
