import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className={"flex flex-1 bg-teal-500 justify-center items-center"}>
      <Text className={"bg-purple-400 text-xl"}>Aqeel Rashad</Text>
      <StatusBar style="auto" />
    </View>
  );
}
