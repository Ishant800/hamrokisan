import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NextButton from "../components/NextButton";

export default function StartScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      
      
      <View className="flex-1 items-center justify-center px-6">
       <Text className="font-normal text-1xl"> Welcome to <Text className="text-[#008000]">Hamro Kisan</Text> </Text>
       <Text className="text-center py-2">Empowering Farmers with Modern News & Data. Get real-time market updates, weather alerts, and agricultural expertise.</Text>
      <TouchableOpacity className="bg-[#008000] mt-10 w-full rounded-xl px-3 py-3">
          <Text className="text-white text-center text-xl">Get Started -</Text>
        </TouchableOpacity>
      

      <Text className="pt-10 ">Already have an Account? <TouchableOpacity onPress={() => navigation.navigate("Login")} className=""><Text className="text-green-500 font-medium text-center">Log in</Text></TouchableOpacity></Text>
      </View>
      <Text className="text-gray-400 text-center text-sm font-sans">© 2024 Hamro Kisan TV • Information for Growth</Text>
     
        
    
      {/* <NextButton label="Login" onPress={() => navigation.navigate("Login")} /> */}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
