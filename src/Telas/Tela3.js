import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importe LinearGradient

const Tela3 = () => {
  const [quantidade, setQuantidade] = useState('');
  const [volume, setVolume] = useState('');
  const [vazao, setVazao] = useState('');

  const calcularVazao = () => {
    const q = parseFloat(quantidade);
    const v = parseFloat(volume);

    if (isNaN(q) || isNaN(v) || v === 0) {
      setVazao('Erro: Valores inválidos.');
      return;
    }

    const resultado = q / v;
    setVazao(`A vazão é: ${resultado}`);
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#007B8F']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.label}>Quantidade (Q):</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={text => setQuantidade(text)}
        />

        <Text style={styles.label}>Volume (V):</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o volume"
          keyboardType="numeric"
          value={volume}
          onChangeText={text => setVolume(text)}
        />

        <Button title="Calcular Vazão" onPress={calcularVazao} />

        <Text style={styles.result}>{vazao}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  gradient: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Tela3;
