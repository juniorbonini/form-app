import { ButtonProps } from "@/@types/types";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <View style={{paddingHorizontal: 24}}>
            <TouchableOpacity style={styles.container} activeOpacity={.8} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        </View>
    )
}