import React, { useState } from "react";
import { ActivityIndicator, Alert, Button, Keyboard, Text, TextInput, View } from "react-native";
import auth from '@react-native-firebase/auth';

export default function App() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  function crearUser() {
    setLoading(true)
    Keyboard.dismiss()
    console.log(email,senha)
    auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(Alert.alert("Sucesso", "Usuario criado com sucesso."))
      .catch((error) => Alert.alert("Erro", error))
      .finally(setLoading(false))
  };
  function logarUser() {
    setLoading(true)
    Keyboard.dismiss()
    auth()
      .signInWithEmailAndPassword(email, senha)
      .then(Alert.alert("Sucesso", "Usuario logado com sucesso."))
      .catch((error) => Alert.alert("Erro", error))
      .finally(setLoading(false))

  };
  function esqueceuSenha() {
    
  };

  return (
    <View style={{flex: 1, padding: 20, justifyContent: "center", gap: 10}}>
        <Text style={{ fontSize: 16, color: "#000" }}>Email</Text>
        <TextInput
          style={{ borderWidth: 2, borderRadius: 3 }}
          onChangeText={setEmail}
        ></TextInput>
        <Text style={{ fontSize: 16, color: "#000" }}>Senha</Text>
        <TextInput 
          style={{ borderWidth: 2, borderRadius: 3 }}
          onChangeText={setSenha}
        ></TextInput>
        {loading?<ActivityIndicator/>:undefined}
        <Button title="Criar Usuario" onPress={crearUser} />
        <Button title="Logar Usuario" onPress={logarUser} />
        <Button title="Esqueceu senha" onPress={esqueceuSenha} />
      </View>
  )
}