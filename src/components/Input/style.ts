import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    fontSize: 14,
  },
   inputWrapper: {
    height: 56,
    width: '100%',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,

   },
   iconContainer: {
    width: 56,
    height: 56,
    borderRightWidth: 3,
    borderRightColor: '#F3F4F5',
    justifyContent: 'center',
    alignItems: 'center',
   }
});
