import { Color } from "@/style/Color";
import { fontFamily } from "@/style/fontFamily";
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 14,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    marginBottom: 35,
    fontFamily: fontFamily.bold,
    color: Color.blue[200],
    paddingLeft: 24,
    shadowOpacity: 3,
    shadowOffset: {width: 2, height: 2}

  },
  imageBackground: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
