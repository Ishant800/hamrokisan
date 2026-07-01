import { Pressable, Text } from "react-native";

export default function NextButton({ label = "Next", onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className="absolute bottom-8 right-6 h-14 min-w-28 items-center justify-center rounded-full bg-cyan-400 px-6 active:bg-cyan-300"
    >
      <Text className="text-base font-bold text-slate-950">{label}</Text>
    </Pressable>
  );
}
