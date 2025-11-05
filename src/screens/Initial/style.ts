import { Color } from "@/style/Color";
import { fontFamily } from "@/style/fontFamily";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 62,
    color: Color.white[200],
    marginTop: 45
  },

    imageBackground: {
      position: 'absolute',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    transparentContainer: {
        width: 370,
        height: 247,
        backgroundColor: 'rgba(120, 123, 125, 0.4)',
        borderRadius: 10,
        marginTop: '115%',
        padding: 20

    },
    subTitle: {
        fontFamily: fontFamily.bold,
        textAlign: 'center',
        fontSize: 24,
        color: Color.white[200]
    },
    text: {
        fontFamily: fontFamily.regular,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 15
    },

});
