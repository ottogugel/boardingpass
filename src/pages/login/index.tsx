import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/input";

export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Boarding Pass</Text>
        <Text style={styles.subtitle}>Create your account</Text>
      </View>

      <View>
        <Input placeholder="Email or username" />
      </View>
      <View>
        <Input placeholder="Password" />
      </View>
    </View>
  );
}