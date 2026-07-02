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

const SPACING = {
  base: 4,
  stackSm: 8,
  stackMd: 16,
  stackLg: 24,
  marginMobile: 16,
};

// All 77 districts of Nepal
const NEPAL_DISTRICTS = [
  "Taplejung", "Panchthar", "Ilam", "Jhapa", "Morang", "Sunsari", 
  "Dhankuta", "Terhathum", "Sankhuwasabha", "Bhojpur", "Khotang", 
  "Okhaldhunga", "Udayapur", "Solukhumbu", "Ramechhap", "Dolakha", 
  "Sindhuli", "Kavrepalanchok", "Lalitpur", "Bhaktapur", "Kathmandu", 
  "Nuwakot", "Rasuwa", "Dhading", "Chitwan", "Makwanpur", "Sarlahi", 
  "Rautahat", "Bara", "Parsa", "Gorkha", "Manang", "Mustang", 
  "Myagdi", "Kaski", "Lamjung", "Tanahu", "Syangja", "Parbat", 
  "Baglung", "Nawalparasi", "Rupandehi", "Kapilbastu", "Arghakhanchi", 
  "Palpa", "Gulmi", "Pyuthan", "Rolpa", "Eastern Rukum", "Banke", 
  "Dang", "Surkhet", "Dailekh", "Jajarkot", "Kalikot", "Western Rukum", 
  "Salyan", "Dolpa", "Humla", "Jumla", "Mugu", "Achham", "Doti", 
  "Bajhang", "Bajura", "Kailali", "Dadeldhura", "Darchula", "Baitadi", 
  "Mahakali", "Kanchanpur"
];

export default function SignupScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [district, setDistrict] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);

  const handleSignup = () => {
    if (!fullName || !email || !password || !district) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    // TODO: Implement actual signup logic
    Alert.alert("Success", "Account created successfully!");
    navigation.replace("Home");
  };

  const renderDistrictOption = (item) => (
    <TouchableOpacity
      key={item}
      onPress={() => {
        setDistrict(item);
        setShowDistrictDropdown(false);
      }}
      className="py-3 px-4 border-b"
      style={{ borderColor: COLORS.outlineVariant }}
    >
      <Text style={{ color: COLORS.onSurface }}>{item}</Text>
    </TouchableOpacity>
  );

  
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

            <View className="p-6" style={{ borderColor: COLORS.outlineVariant }}>
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-xl font-semibold"
                  style={{ color: COLORS.onSurface }}
                >
                  Create Account
                </Text>
                <Text
                  className="text-sm mt-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Join us to access news and market updates
                </Text>
              </View>

              {/* Full Name Input */}
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-md font-semibold ml-1 mb-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Full Name *
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
                    className="flex-1 text-md py-3 h-full"
                    style={{ color: COLORS.onSurface }}
                    placeholder="Enter your full name"
                    placeholderTextColor={COLORS.outlineVariant}
                    autoCapitalize="words"
                    value={fullName}
                    onChangeText={setFullName}
                  />
                </View>
              </View>

              {/* Email Input */}
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-md font-semibold ml-1 mb-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Email Address *
                </Text>
                <View
                  className="flex-row items-center rounded-lg border px-3 h-12"
                  style={{
                    backgroundColor: COLORS.surfaceContainerLowest,
                    borderColor: COLORS.outlineVariant,
                  }}
                >
                  <Text className="text-lg mr-2" style={{ color: COLORS.onSurfaceVariant }}>
                    ✉️
                  </Text>
                  <TextInput
                    className="flex-1 text-md py-3 h-full"
                    style={{ color: COLORS.onSurface }}
                    placeholder="e.g. user@example.com"
                    placeholderTextColor={COLORS.outlineVariant}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
              </View>

              {/* Password Input */}
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-md font-semibold ml-1 mb-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Password *
                </Text>
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
                    placeholder="Create a password"
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

              {/* Mobile Number Input (Optional) */}
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-md font-semibold ml-1 mb-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Mobile Number (Optional)
                </Text>
                <View
                  className="flex-row items-center rounded-lg border px-3 h-12"
                  style={{
                    backgroundColor: COLORS.surfaceContainerLowest,
                    borderColor: COLORS.outlineVariant,
                  }}
                >
                  <Text className="text-lg mr-2" style={{ color: COLORS.onSurfaceVariant }}>
                    📱
                  </Text>
                  <TextInput
                    className="flex-1 text-md py-3 h-full"
                    style={{ color: COLORS.onSurface }}
                    placeholder="e.g. 9841234567"
                    placeholderTextColor={COLORS.outlineVariant}
                    keyboardType="phone-pad"
                    value={mobileNo}
                    onChangeText={setMobileNo}
                  />
                </View>
              </View>

              {/* District Dropdown */}
              <View style={{ marginBottom: SPACING.stackMd }}>
                <Text
                  className="text-md font-semibold ml-1 mb-1"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  District *
                </Text>
                <TouchableOpacity
                  onPress={() => setShowDistrictDropdown(!showDistrictDropdown)}
                  className="flex-row items-center justify-between rounded-lg border px-3 h-12"
                  style={{
                    backgroundColor: COLORS.surfaceContainerLowest,
                    borderColor: COLORS.outlineVariant,
                  }}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-lg mr-2" style={{ color: COLORS.onSurfaceVariant }}>
                      📍
                    </Text>
                    <Text
                      style={{
                        color: district ? COLORS.onSurface : COLORS.outlineVariant,
                        fontSize: 16,
                      }}
                    >
                      {district || "Select your district"}
                    </Text>
                  </View>
                  <Text className="text-lg" style={{ color: COLORS.onSurfaceVariant }}>
                    {showDistrictDropdown ? "▲" : "▼"}
                  </Text>
                </TouchableOpacity>

                {/* District Dropdown List */}
                {showDistrictDropdown && (
                  <View
                    className="mt-2 rounded-lg border max-h-60"
                    style={{
                      backgroundColor: COLORS.surfaceContainerLowest,
                      borderColor: COLORS.outlineVariant,
                    }}
                  >
                    <ScrollView showsVerticalScrollIndicator={true}>
                      {NEPAL_DISTRICTS.map((item) => renderDistrictOption(item))}
                    </ScrollView>
                  </View>
                )}
              </View>

              {/* Signup Button */}
              <View className="mt-7">
                <Button 
                  onPress={handleSignup} 
                  title="Sign Up →" 
                  color="#006400"
                />
              </View>

              {/* Divider */}
              <View className="flex-row items-center my-8">
                <View className="flex-1 h-[1px]" style={{ backgroundColor: COLORS.outlineVariant }} />
                <Text
                  className="mx-3 text-sm font-medium uppercase tracking-wider"
                  style={{ color: COLORS.onSurfaceVariant }}
                >
                  Or sign up with
                </Text>
                <View className="flex-1 h-[1px]" style={{ backgroundColor: COLORS.outlineVariant }} />
              </View>

              {/* Social Signup Buttons */}
              <View className="flex-row gap-4">
                <TouchableOpacity
                  className="flex-1 flex-row items-center justify-center rounded-lg border py-3 active:bg-gray-50"
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
                    className="text-md font-semibold"
                    style={{ color: COLORS.onSurface }}
                  >
                    Google
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-1 flex-row items-center justify-center rounded-lg border py-3 active:bg-gray-50"
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

            {/* Footer Login Link */}
            <View className="mt-6 items-center">
              <Text
                className="text-md"
                style={{ color: COLORS.onSurfaceVariant }}
              >
                Already have an account?{" "}
                <Text
                  className="font-bold underline decoration-2 underline-offset-4"
                  style={{ color: COLORS.primary }}
                  onPress={() => navigation.goBack()}
                >
                  Login
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