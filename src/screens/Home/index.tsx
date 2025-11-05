import { useRef } from "react";
import { Alert, Image, ImageBackground, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native";

import { styles } from "./style";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

const backgroundImage = require("@/assets/image2.png");

export function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const emailRef = useRef<TextInput>(null);
  function handleNextStep(data: any) {
    console.log(data);
  }
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.imageBackground} />
      <Text style={styles.title}>Criar sua conta</Text>

      <Input
        icon="user"
        formProps={{
          name: "name",
          control,
          rules: {
            required: 'O nome é obrigatório'
          }
        }}
        inputProps={{
          placeholder: "Nome ",
          onSubmitEditing: () => emailRef.current?.focus(),

        }}
      />
      <Input
        ref={emailRef}
        icon="mail"
        formProps={{
          name: "email",
          control,
          rules: {
            required: "O E-mail é obrigatório",
          },
        }}
        inputProps={{
          onSubmitEditing: handleSubmit(handleNextStep),
          placeholder: "E-mail ",
          autoCapitalize: "none",
          autoComplete: "email",
          keyboardType: "email-address",
          
        }}
      />
      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
