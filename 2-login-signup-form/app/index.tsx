import MyButton from "@/components/ui/button";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Modal as NativeModal, Text, View } from "react-native";
import Modal from "react-native-modal";

export default function RootPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const onContinue = () => {
    router.push("/login");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <MyButton title="Native Modal" onPress={() => setOpen(true)} />

      <MyButton title="Package Modal" onPress={() => setVisible(true)} />

      {/* native modal  */}
      <NativeModal transparent={true} visible={open} animationType="fade">
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              padding: 30,
              borderRadius: 10,
            }}
          >
            <MyButton title="Close" onPress={() => setOpen(false)} />
          </View>
        </View>
      </NativeModal>

      <Modal
        isVisible={visible}
        onBackButtonPress={() => setVisible(false)}
        backdropOpacity={0.4}
        onBackdropPress={() => setVisible(false)}
      >
        <View
          style={{ backgroundColor: "white", padding: 30, borderRadius: 6 }}
        >
          <Text>I am the modal content!</Text>
        </View>
      </Modal>

      {/* react native package modal  */}
      <MyButton title="Continue" onPress={onContinue} />
    </View>
  );
}
