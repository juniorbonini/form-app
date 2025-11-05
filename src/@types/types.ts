import { Feather } from "@expo/vector-icons";
import { UseControllerProps } from "react-hook-form";
import { TextInputProps, TouchableOpacityProps } from "react-native";

export type InputProps = {
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
    error: string
}
export type ButtonProps = TouchableOpacityProps & {
    title: string;
} 