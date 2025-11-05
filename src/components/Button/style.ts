import { Color } from "@/style/Color";
import { fontFamily } from "@/style/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: Color.blue[200],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 400

  },
  title: {
    color: "white",
    fontSize: 18,
    fontFamily: fontFamily.bold,
    letterSpacing: 1.5
  },
});
