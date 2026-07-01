import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NextButton from "../components/NextButton";

export default function SecondScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <View className="flex-1 items-center justify-center px-6">
        <View className="w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <Text className="text-center text-3xl font-bold text-white">
            Home Screen
          </Text>
          <Text className="mt-3 text-center text-base leading-6 text-slate-300">
            You are logged in. Create your next screens from here.
          </Text>
        </View>
      </View>

      <NextButton label="Logout" onPress={() => navigation.replace("Login")} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
