import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SectionHeader from "../components/SectionHeader";

// --- DESIGN TOKENS (From your LoginScreen) ---
const COLORS = {
  background: "#f5fced",
  primary: "#006400",
  onPrimary: "#ffffff",
  onSurface: "#171d14",
  onSurfaceVariant: "#3f4a3a",
  outlineVariant: "#becab6",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#eff6e7",
  primaryFixed: "#8dfb77",
  secondaryFixed: "#ffddb7",
};

const SPACING = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// --- MOCK DATA ---
const QUICK_ACTIONS = [
  { id: '1', title: 'AI Crop\nDoctor', icon: '🌱' },
  { id: '2', title: 'Ask JTA\n(Expert)', icon: '' },
  { id: '3', title: 'Agri Shop', icon: '🛍️' },
  { id: '4', title: 'Market\nPrices', icon: '📈' },
];

const MARKET_ITEMS = [
  { id: '1', name: 'Rice (Coarse)', price: '3,580', unit: '/quintal', change: '+2.4%', up: true, img: 'https://placehold.co/100x100/f5fced/006400?text=Rice' },
  { id: '2', name: 'Tomato', price: '40', unit: '/kg', change: '-1.2%', up: false, img: 'https://placehold.co/100x100/f5fced/d32f2f?text=Tomato' },
  { id: '3', name: 'Potato', price: '28', unit: '/kg', change: '+3.6%', up: true, img: 'https://placehold.co/100x100/f5fced/006400?text=Potato' },
  { id: '4', name: 'Milk', price: '68', unit: '/Ltr', change: '+1.5%', up: true, img: 'https://placehold.co/100x100/f5fced/006400?text=Milk' },
];

const NEWS_ITEMS = [
  { id: '1', title: 'Greenhouse farming expands in Kavre district', time: '4h ago • 3 min read', img: 'https://placehold.co/300x150/e0f2f1/006400?text=Greenhouse' },
  { id: '2', title: 'Drone subsidy program opens for farmers', time: '6h ago • 2 min read', img: 'https://placehold.co/300x150/e0f2f1/006400?text=Drone' },
];

export default function HomeScreen({ navigation }) {
  

  return (
    <SafeAreaView className="flex-1 bg-white" >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* 1. HEADER & GREETING */}
        <View className="px-4 pt-2 flex-row justify-between items-start">
          <View>
            <Text className="text-xs" style={{ color: COLORS.onSurfaceVariant }}>Good Morning ☀️</Text>
            <Text className="text-3xl font-medium mt-1" style={{ color: COLORS.primary }}>Ishant Karmacharya</Text>
            <Text className="text-sm" style={{ color: COLORS.onSurfaceVariant }}>Have a productive farming day!</Text>
          </View>
          <View className="flex-row gap-3">
             <TouchableOpacity className="p-2 rounded-full bg-white border" style={{ borderColor: COLORS.outlineVariant }}>
                <Text className="text-xl">🔔</Text>
             </TouchableOpacity>
             
          </View>
        </View>

        {/* 2. WEATHER WIDGET (Hero Card) */}
        <View className="mx-4 px-3 py-3 mt-6 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200" >
         
          {/* Bottom White Stats */}
          <View className="flex-row justify-between" >
            <View className="border-none rounded-2xl px-3 py-2 " >
                <Text className="text-lg font-medium text-black">24°C</Text>
                <Text className="text-black text-xs  opacity-90 mt-1">Partly Cloudy ⛅</Text>
              </View>
              
            <View className="items-center px-3 py-2">
              <Text className="text-xs mb-1" style={{ color: COLORS.onSurfaceVariant }}>💧 Humidity</Text>
              <Text className="font-medium text-xs" style={{ color: COLORS.onSurface }}>65%</Text>
            </View>
            <View className="items-center px-3 py-2">
              <Text className="text-xs mb-1" style={{ color: COLORS.onSurfaceVariant }}>💨 Wind</Text>
              <Text className="font-medium" style={{ color: COLORS.onSurface }}>12 km/h</Text>
            </View>
            <View className="items-center px-3 py-2">
              <Text className="text-xs mb-1" style={{ color: COLORS.onSurfaceVariant }}>🌧️ Rain</Text>
              <Text className="font-medium" style={{ color: COLORS.onSurface }}>20%</Text>
            </View>
          </View>
          <View className="px-3 pb-3 flex-row justify-between items-center">
            <Text className="text-sm" style={{ color: COLORS.onSurfaceVariant }}>📍 Kathmandu, Nepal</Text>
            <Text className="text-sm font-normal" style={{ color: COLORS.primary }}>View full forecast &gt;</Text>
          </View>
        </View>

       
        {/* <SectionHeader className="mx-4 ml-4" title="Breaking News" /> */}
        <SectionHeader title="Breaking News" onViewAll={() => navigation.navigate("MarketPrices")} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
          <View className="w-full  rounded-xl overflow-hidden bg-white border" style={{ borderColor: COLORS.outlineVariant }}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOxEFsNec6KTpA760UxXx1YTxOK4Kd_rW8VlYp2fp3Yxe_l_v2JUTiq4&s=10' }} className="w-full h-32" />
            <View className="p-3">
              <Text className="font-bold text-sm leading-5 mb-2" style={{ color: COLORS.onSurface }}>Govt announces support program for rice farmers this season</Text>
              <Text className="text-xs" style={{ color: COLORS.onSurfaceVariant }}>2h ago • Agriculture Ministry</Text>
            </View>
          </View>
         
        </ScrollView>

        {/* 4. QUICK ACTIONS GRID */}
        <SectionHeader title="Quick Actions " />
        <View className="flex-row flex-wrap px-4 justify-between">
          {QUICK_ACTIONS.map((item) => (
            <TouchableOpacity key={item.id} className="w-[22%] items-center bg-white shadow-lg shadow-gray-500 p-3 rounded-xl  mb-4" >
              <View className="w-12 h-12 rounded-full items-center justify-center mb-2" style={{ backgroundColor: COLORS.surfaceContainerLow }}>
                <Text className="text-2xl">{item.icon}</Text>
              </View>
              <Text className="text-xs text-center font-medium leading-4" style={{ color: COLORS.onSurface }}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 5. MARKET PRICES HORIZONTAL SCROLL */}
        <SectionHeader title="Market Prices" onViewAll={() => navigation.navigate("MarketPrices")}/>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4 pb-2">
          {MARKET_ITEMS.map((item) => (
            <View key={item.id} className="w-32 mr-3 bg-white p-3 rounded-xl border" style={{ borderColor: COLORS.outlineVariant }}>
              <Image source={{ uri: item.img }} className="w-16 h-16 self-center mb-3 rounded-full" />
              <Text className="text-xs font-medium mb-1" style={{ color: COLORS.onSurfaceVariant }}>{item.name}</Text>
              <View className="flex-row items-baseline">
                <Text className="text-base font-bold" style={{ color: COLORS.onSurface }}>Rs. {item.price}</Text>
                <Text className="text-[10px] ml-1" style={{ color: COLORS.onSurfaceVariant }}>{item.unit}</Text>
              </View>
              <Text className={`text-xs font-bold mt-2 ${item.up ? 'text-green-700' : 'text-red-600'}`}>
                {item.change}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* 6. LATEST NEWS LIST */}
        <SectionHeader title="Latest News" onViewAll={() => navigation.navigate("MarketPrices")} />
        <View className="px-4">
          {NEWS_ITEMS.map((item) => (
            <TouchableOpacity key={item.id} className="flex-row bg-white p-3 rounded-xl border mb-3" style={{ borderColor: COLORS.outlineVariant }}>
              <Image source={{ uri: item.img }} className="w-24 h-24 rounded-lg" />
              <View className="flex-1 ml-3 justify-center">
                <Text className="font-bold text-sm leading-5 mb-2" style={{ color: COLORS.onSurface }}>{item.title}</Text>
                <Text className="text-xs" style={{ color: COLORS.onSurfaceVariant }}>{item.time}</Text>
              </View>
              <View className="justify-center pl-2">
                 <Text className="text-xl" style={{ color: COLORS.onSurfaceVariant }}>🔖</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* BOTTOM NAVIGATION BAR (Mockup) */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t py-3 px-6 flex-row justify-between items-center" style={{ borderColor: COLORS.outlineVariant }}>
        <NavIcon icon="" label="Home" active />
        <NavIcon icon="📰" label="News" />
        <NavIcon icon="🛍️" label="Shop" />
        <NavIcon icon="🩺" label="AI Doctor" />
        <NavIcon icon="👤" label="Profile" />
      </View>
    </SafeAreaView>
  );
}

// Small helper for bottom nav icons
function NavIcon({ icon, label, active }) {
  return (
    <TouchableOpacity className="items-center">
      <Text className="text-2xl mb-1">{icon}</Text>
      <Text className={`text-[10px] font-medium ${active ? 'text-[#006400]' : 'text-gray-400'}`}>{label}</Text>
    </TouchableOpacity>
  );
}
