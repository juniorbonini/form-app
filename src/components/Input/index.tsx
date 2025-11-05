import { forwardRef } from "react";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { TextInput, View } from "react-native";

import { styles } from "./style";
import { InputProps } from "@/@types/types";


const Input = forwardRef<TextInput, InputProps>(
  ({ icon, inputProps, formProps }, ref) => {
    return (
      <Controller
        render={({ field }) => (
          <View style={styles.inputWrapper}>
            <View style={styles.iconContainer}>
              <Feather name={icon} size={24} color={"red"} />
            </View>
            <TextInput
             ref={ref}
             value={field.value}
             onChangeText={field.onChange}
             style={styles.input}
             {...inputProps} />
          </View>
        )}
        {...formProps}
      />
    );
  }
);

export { Input };
