import { ActivityIndicator } from "react-native";
import { styles } from "./style";

export function Loading() {
    return <ActivityIndicator color={'#8257E5'} style={styles.container} />
}