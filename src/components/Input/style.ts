import { Color } from "@/style/Color";
import { fontFamily } from "@/style/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    fontSize: 16,
    fontFamily: fontFamily.regular,
  },
  inputWrapper: {
    height: 56,
    width: "100%",
    backgroundColor: Color.white[200],
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRightWidth: 1,
    borderRightColor: Color.blue[200],
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: Color.red[200],
    marginTop: 7,
  },
});
