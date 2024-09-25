import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const generatePassword = (length) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

export default function App() {
  const [length, setLength] = useState("8");
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const lengthNumber = parseInt(length);
    if (isNaN(lengthNumber) || lengthNumber <= 0) {
      Alert.alert("Erro", "Por favor, insira um número válido para o comprimento.");
      return;
    }
    const newPassword = generatePassword(lengthNumber);
    setPassword(newPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Senhas</Text>
      <TextInput
        style={styles.input}
        placeholder="Comprimento da senha"
        keyboardType="numeric"
        value={length}
        onChangeText={(text) => setLength(text)}
      />
      <Button title="Gerar Senha" onPress={handleGeneratePassword} />
      {password ? (
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordLabel}>Sua senha gerada:</Text>
          <Text style={styles.password}>{password}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
  },
  passwordContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  passwordLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  password: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
});
