import { Image, Text, View } from "react-native";
import { styles } from "./style";

const backgroundImage = require("../../assets/image.png");

export function Initial() {
  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <Text style={styles.title}>Maika'i</Text>
      <View style={styles.transparentContainer}>
        <Text style={styles.subTitle}>Junte-se e crie eventos de surf!</Text>
        <Text style={[{ color: "white", opacity: 1 }, styles.text]}>
          Junte-se e convide seus amigos para seu evento de surf, deixe outras
          pessoas saberem sobre seu evento
        </Text>
      </View>
    </View>
  );
}
