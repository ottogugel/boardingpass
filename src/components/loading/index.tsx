import { colors } from "@/styles/colors";
import { ActivityIndicator, View } from "react-native";
import { styles } from "@/components/loading/styles";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.gray[400]} />
    </View>
  );
}
