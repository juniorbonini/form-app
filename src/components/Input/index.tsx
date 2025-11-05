import { forwardRef } from "react";
import { Feather } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

import { styles } from "./style";
import { InputProps } from "@/@types/types";
import { Color } from "@/style/Color";


const Input = forwardRef<TextInput, InputProps>(
  ({ icon, inputProps, formProps, error = '' }, ref) => {
    return (
      <Controller
        render={({ field }) => (
          <View style={styles.container}>
            <View style={styles.inputWrapper}>
            <View style={styles.iconContainer}>
              <Feather name={icon} size={24} color={Color.blue[200]} />
            </View>
            <TextInput
             ref={ref}
             value={field.value}
             onChangeText={field.onChange}
             style={styles.input}
             {...inputProps} />
          </View>
          {error.length > 0 && <Text style={styles.error}>{error}</Text>}
          </View>
        )}
        {...formProps}
      />
    );
  }
);

export { Input };
