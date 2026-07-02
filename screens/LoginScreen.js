import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";


const COLORS = {
  background: "#f5fced",
  primary: "#006400",
  onPrimary: "#ffffff",
  onSurface: "#171d14",
  onSurfaceVariant: "#3f4a3a",
  outlineVariant: "#becab6",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#eff6e7",
  onPrimaryFixedVariant: "#005300",
  primaryFixed: "#8dfb77",
  secondaryFixed: "#ffddb7",
};

// Custom spacing tokens from your config
const SPACING = {
  base: 4,
  stackSm: 8,
  stackMd: 16,
  stackLg: 24,
  marginMobile: 16,
};

export default function LoginScreen({ navigation }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    // if (!identifier || !password) {
    //   Alert.alert("Error", "Please fill in all fields");
    //   return;
    // }
    // TODO: Implement actual authentication logic
    navigation.replace("Home");
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.background }}>
     

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 z-10"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingHorizontal: SPACING.marginMobile,
            paddingVertical: SPACING.stackLg,
          }}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View className="w-full max-w-md mx-auto">
            {/* Logo Section */}
            <View className="items-center mb-2">
             
                <Image
                  source={require("../assets/hk_logo.png")}
                  className="w-[200px] h-[200px]"
                  resizeMode="contain"
                />
             
              
            </View>

           
            <View className=" p-6 " style={{ borderColor: COLORS.outlineVariant }}>
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-xl font-semibold"
                  style={{ color: COLORS.onSurface }}
                >
                  Welcome Back
                </Text>
                <Text
                  className="text-sm mt-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Access the latest news and market updates
                </Text>
              </View>

              {/* Identifier Input */}
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-md font-semibold ml-1 mb-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                Email
                </Text>
                <View
                  className="flex-row items-center rounded-lg border px-3  h-12"
                  style={{
                    backgroundColor: COLORS.surfaceContainerLowest,
                    borderColor: COLORS.outlineVariant,
                  }}
                >
                  <Text className="text-lg mr-2" style={{ color: COLORS.onSurfaceVariant }}>
                    👤
                  </Text>
                  <TextInput
                    className="flex-1 text-md py-3 h-full"
                    style={{ color: COLORS.onSurface }}
                    placeholder="e.g. 9841234567 or email@domain.com"
                    placeholderTextColor={COLORS.outlineVariant}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    value={identifier}
                    onChangeText={setIdentifier}
                  />
                </View>
              </View>

              {/* Password Input */}
              <View style={{ marginBottom: SPACING.stackMd }}>
                <View className="flex-row justify-between items-center px-1 mb-1">
                  <Text
                    className="text-md font-semibold"
                    style={{ color: COLORS.onSurfaceVariant }}
                  >
                    Password
                  </Text>
                  <TouchableOpacity onPress={() => Alert.alert("Info", "Forgot password flow not implemented yet.")}>
                    <Text
                      className="text-md font-bold"
                      style={{ color: COLORS.primary }}
                    >
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  className="flex-row items-center rounded-lg border px-3 h-12"
                  style={{
                    backgroundColor: COLORS.surfaceContainerLowest,
                    borderColor: COLORS.outlineVariant,
                  }}
                >
                  <Text className="text-lg mr-2" style={{ color: COLORS.onSurfaceVariant }}>
                    🔒
                  </Text>
                  <TextInput
                    className="flex-1 text-md h-full"
                    style={{ color: COLORS.onSurface }}
                    placeholder="Enter your password"
                    placeholderTextColor={COLORS.outlineVariant}
                    secureTextEntry={!isPasswordVisible}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="ml-2 p-1"
                  >
                    <Text className="text-lg" style={{ color: COLORS.onSurfaceVariant }}>
                      {isPasswordVisible ? "🙈" : "👁️"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            
              <View className="mt-7">
                <Button onPress={handleLogin} className="text-center bg- items-center" title="Login →" color="#006400"/>
              </View>

              {/* Divider */}
              <View className="flex-row items-center my-8">
                <View className="flex-1 h-[1px]" style={{ backgroundColor: COLORS.outlineVariant }} />
                <Text
                  className="mx-3 text-sm font-medium uppercase tracking-wider"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Or continue with
                </Text>
                <View className="flex-1 h-[1px]" style={{ backgroundColor: COLORS.outlineVariant }} />
              </View>

              
              <View className="flex-row  gap-4">
                <TouchableOpacity
                  className="flex-1  flex-row items-center justify-center rounded-lg border py-3 active:bg-gray-50"
                  style={{
                    borderColor: COLORS.outlineVariant,
                    backgroundColor: COLORS.surfaceContainerLowest,
                  }}
                >
                  <Image
                    source={require("../assets/google_logo.png")}
                    className="w-7 h-7 mr-2"
                  />
                  <Text
                    className="text-md  font-semibold"
                    style={{ color: COLORS.onSurface }}
                  >
                    Google
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 flex-row items-center py-3 justify-center rounded-lg border  active:bg-gray-50"
                  style={{
                    borderColor: COLORS.outlineVariant,
                    backgroundColor: COLORS.surfaceContainerLowest,
                  }}
                >
                  <Image
                    source={require("../assets/fb_logo.png")}
                    className="w-7 h-7 mr-2"
                  />
                  <Text
                    className="text-md font-semibold"
                    style={{ color: COLORS.onSurface }}
                  >
                    Facebook
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Footer Sign Up Link */}
            <View className="mt-6 items-center">
              <Text
                className="text-md"
                style={{ color: COLORS.onSurfaceVariant }}
              >
                Don't have an account?{" "}
                <Text
                  className="font-bold underline decoration-2 underline-offset-4"
                  style={{ color: COLORS.primary }}
                  onPress={() => navigation.navigate('Signup')}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Support Footer */}
      <View
        className="py-4 px-4 items-center z-10"
        style={{ paddingBottom: SPACING.stackMd, paddingHorizontal: SPACING.marginMobile }}
      >
        <View className="flex-row flex-wrap justify-center gap-4">
          <TouchableOpacity onPress={() => console.log("Privacy Policy")}>
            <Text
              className="text-xs"
              style={{ color: COLORS.onSurfaceVariant }}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>
          <Text className="text-xs" style={{ color: COLORS.outlineVariant }}>
            •
          </Text>
          <TouchableOpacity onPress={() => console.log("Terms of Service")}>
            <Text
              className="text-xs"
              style={{ color: COLORS.onSurfaceVariant }}
            >
              Terms of Service
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
