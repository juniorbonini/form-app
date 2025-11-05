import { TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { InputProps } from "@/@types/types"
import { styles } from "./style";

export function Input({ icon }: InputProps) {
    return(
        <View style={styles.inputWrapper}>
            <View style={styles.iconContainer}>
            <Feather name={icon} size={24} color={'red'} />
            </View>
             <TextInput style={styles.input}
              
             />
        </View>
    )
}