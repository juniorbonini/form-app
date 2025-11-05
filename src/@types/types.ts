import { Feather } from "@expo/vector-icons";
import { UseControllerProps } from "react-hook-form";
import { TextInputProps } from "react-native";

export type InputProps = {
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;

}