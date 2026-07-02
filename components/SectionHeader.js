import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const COLORS = {
    primary: "#006400",
   onSurface: "#171d14",
}
const SPACING = {
  stackMd: 16,
  base: 4,
};
export default function SectionHeader({ 
  title, 
  onViewAll, 
  showArrow = true 
}) {
  return (
    <View className="flex-row justify-between items-center mb-3 mt-6 px-4">
      {/* Title */}
      <Text 
        className="text-lg font-bold" 
        style={{ color: COLORS.onSurface }}
      >
        {title}
      </Text>

      {/* View All Link */}
      {onViewAll && (
        <TouchableOpacity 
          onPress={onViewAll} 
          activeOpacity={0.7}
          className="flex-row items-center"
        >
          <Text 
            className="text-sm font-semibold mr-1" 
            style={{ color: COLORS.primary }}
          >
            View all
          </Text>
          {showArrow && (
            <Text 
              className="text-sm" 
              style={{ color: COLORS.primary }}
            >
              ›
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}