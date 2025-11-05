import { Text, View } from "react-native";
import { styles } from "./style";
import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { TextInput } from "react-native";

export function Home() {
  const { control, handleSubmit } = useForm()
  const emailRef = useRef<TextInput>(null)
  function handleNextStep(data: any) {
    console.log(data)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input
       icon="user"
       formProps={{
        name: 'name',
        control
       }}
       inputProps={{
        placeholder: 'Nome ',
        onSubmitEditing: () => emailRef.current?.focus()
       }}
        />
      <Input
       ref={emailRef}
       icon="mail"
       formProps={{
        name: 'email',
        control
       }}
       inputProps={{
        onSubmitEditing: handleSubmit(handleNextStep),
        placeholder: 'E-mail '
       }}
        />
    </View>
  );
}
