import { colors } from "@/styles/colors";
import { TextInput, TextInputProps } from "react-native";

export function Input({...rest}: TextInputProps) {
  return (
    <TextInput
     placeholderTextColor={colors.gray[300]}
    {...rest}
    />
  )
}