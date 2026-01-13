import { Stack } from "expo-router";
import Drawer from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Drawer />
      <Stack.Screen name="(tab)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
    </Stack>
  );
}
