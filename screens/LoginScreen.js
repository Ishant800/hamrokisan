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

// Design Tokens extracted directly from your tailwind.config
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
    if (!identifier || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    // TODO: Implement actual authentication logic
    navigation.replace("Home");
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.background }}>
      {/* Background Pattern Simulation (opacity 0.05 dot pattern) */}
      <View className="absolute inset-0 z-0 opacity-5">
        <View className="w-full h-full bg-[#006400]" />
      </View>

      {/* Decorative Blur Blobs */}
      <View
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 z-0"
        style={{ backgroundColor: COLORS.primaryFixed }}
      />
      <View
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20 z-0"
        style={{ backgroundColor: COLORS.secondaryFixed }}
      />

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
            <View className="items-center mb-6">
              <View
                className="bg-white rounded-xl p-3 mb-4 shadow-sm"
                style={{
                  elevation: 2,
                  shadowColor: "#000",
                  shadowOpacity: 0.05,
                  shadowRadius: 4,
                  shadowOffset: { width: 0, height: 2 },
                }}
              >
                <Image
                  source={{
                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0_YU3yr_OkIEaU41noyhj0vvWpD09qp6nt3vsgC_MVNRhn5aSrO_S48H0U-yLO_xbV1b05HlHzdoyiPZuQhm1BHfRY3GgMsUWMfLbAiUuCCZG5-AcT-SJ-TnIFSxh_FBJlMuLFSvkOaiw8dKl8-MPAztBEB2IJb61aETVc3IjXSQfsxRWv1WyZOsj-Q_FQEAZYefFO0G1oM-rIdUPNLWZNfzn-xcewXzap_lzvZDZUTFlOaBT1w8xedGSesccvO2wqNTKUsflxQ",
                  }}
                  className="w-16 h-16"
                  resizeMode="contain"
                />
              </View>
              <Text
                className="text-2xl font-bold tracking-tight text-center"
                style={{ color: COLORS.primary }}
              >
                Hamro Kisan TV
              </Text>
              <Text
                className="text-sm mt-1 text-center"
                style={{ color: COLORS.onSurfaceVariant }}
              >
                Nepal's Premier Agricultural Media Network
              </Text>
            </View>

            {/* Login Card - Note: Removed bg-white/80 & backdrop-blur per your updated HTML */}
            <View className="rounded-xl p-6 border" style={{ borderColor: COLORS.outlineVariant }}>
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-lg font-semibold"
                  style={{ color: COLORS.onSurface }}
                >
                  Welcome Back
                </Text>
                <Text
                  className="text-xs mt-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Access the latest news and market updates
                </Text>
              </View>

              {/* Identifier Input */}
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-sm font-semibold ml-1 mb-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Mobile Number or Email
                </Text>
                <View
                  className="flex-row items-center rounded-lg border px-3 h-12"
                  style={{
                    backgroundColor: COLORS.surfaceContainerLowest,
                    borderColor: COLORS.outlineVariant,
                  }}
                >
                  <Text className="text-lg mr-2" style={{ color: COLORS.onSurfaceVariant }}>
                    👤
                  </Text>
                  <TextInput
                    className="flex-1 text-sm h-full"
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
                    className="text-sm font-semibold"
                    style={{ color: COLORS.onSurfaceVariant }}
                  >
                    Password
                  </Text>
                  <TouchableOpacity onPress={() => Alert.alert("Info", "Forgot password flow not implemented yet.")}>
                    <Text
                      className="text-xs font-bold"
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
                    className="flex-1 text-sm h-full"
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

              {/* Login Button */}
              <TouchableOpacity
                className="rounded-lg h-12 flex-row items-center justify-center mt-6 active:scale-[0.98]"
                style={{ backgroundColor: COLORS.primary }}
                onPress={handleLogin}
                activeOpacity={0.8}
              >
                <Text
                  className="text-lg font-semibold mr-2"
                  style={{ color: COLORS.onPrimary }}
                >
                  Log In
                </Text>
                <Text style={{ color: COLORS.onPrimary, fontSize: 18 }}>→</Text>
              </TouchableOpacity>

              {/* Divider */}
              <View className="flex-row items-center my-8">
                <View className="flex-1 h-[1px]" style={{ backgroundColor: COLORS.outlineVariant }} />
                <Text
                  className="mx-3 text-xs font-medium uppercase tracking-wider"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Or continue with
                </Text>
                <View className="flex-1 h-[1px]" style={{ backgroundColor: COLORS.outlineVariant }} />
              </View>

              {/* Social Login Buttons */}
              <View className="flex-row gap-4">
                <TouchableOpacity
                  className="flex-1 flex-row items-center justify-center rounded-lg border h-10 active:bg-gray-50"
                  style={{
                    borderColor: COLORS.outlineVariant,
                    backgroundColor: COLORS.surfaceContainerLowest,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDBSxvyzYaIpe4-EiTOeDq1LT1gypqUr-nRgnDLrHyyR9u5UgcqFu8ug6chSKDOA5LPq5f80XrsDf3Wb34vnm1Tal1oVDpI5u8N1wituQWFmoSuZIWxFmOXXiBr9WvBmEhVVUeCH14Uvmn5iMRl_h-87b_1ahe9GDHnqiMmvBe7kbE8XNd42EP3aIUAG9u0fQrDXUsjjkGt8EHgjlQaBnLV32SAlOkUKe54HX_wBSJZj7QX_vGbPA1APPlbyViMiWub6_EW8AwEA",
                    }}
                    className="w-5 h-5 mr-2"
                  />
                  <Text
                    className="text-sm font-semibold"
                    style={{ color: COLORS.onSurface }}
                  >
                    Google
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 flex-row items-center justify-center rounded-lg border h-10 active:bg-gray-50"
                  style={{
                    borderColor: COLORS.outlineVariant,
                    backgroundColor: COLORS.surfaceContainerLowest,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw9HMBeEMdJL_SXCKl_p7klI25-oJQR-sAo2dufnrIB3IcahkdfrhZDTZRBBsassM85RLUdB4dhjUW1VL_RyT_sChInRqJM8hmjMhmZAV3nuBzM2T6fiDZEUMQ_FV3hdN4cESTkXT28-KzCBUr-eAdpGTNlNXIjMKU_-KyoGg-xaC1zVez93Z1xV0KxyBuu3qKWFQhE-d67dZiVRC6qni2XE_fHjcnX4OJeRMwAVAXn-HqP_e2_P_kBJs-AQ0tAFlqsANc1_rGAA",
                    }}
                    className="w-5 h-5 mr-2"
                  />
                  <Text
                    className="text-sm font-semibold"
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
                className="text-sm"
                style={{ color: COLORS.onSurfaceVariant }}
              >
                Don't have an account?{" "}
                <Text
                  className="font-bold underline decoration-2 underline-offset-4"
                  style={{ color: COLORS.primary }}
                  onPress={() => Alert.alert("Sign Up", "Navigate to sign up screen")}
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
