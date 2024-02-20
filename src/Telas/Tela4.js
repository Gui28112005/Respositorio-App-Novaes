import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importe LinearGradient

const Tela4 = () => {
  const [comprimento, setComprimento] = useState('');
  const [diametro, setDiametro] = useState('');
  const [velocidade, setVelocidade] = useState('');
  const [perdaCarga, setPerdaCarga] = useState('');

  const calcularPerdaCarga = () => {
    const L = parseFloat(comprimento);
    const D = parseFloat(diametro);
    const V = parseFloat(velocidade);

    if (isNaN(L) || isNaN(D) || isNaN(V) || D === 0) {
      setPerdaCarga('Erro: Valores inválidos.');
      return;
    }

    const g = 9.81; // Aceleração devido à gravidade em m/s^2
    const f = 0.02; // Supondo um coeficiente de atrito típico para canos

    const resultado = f * (L / D) * (V ** 2) / (2 * g);
    setPerdaCarga(`A perda de carga é: ${resultado.toFixed(2)} metros`);
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#007B8F']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.label}>Comprimento do cano (L):</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o comprimento do cano"
          keyboardType="numeric"
          value={comprimento}
          onChangeText={text => setComprimento(text)}
        />

        <Text style={styles.label}>Diâmetro do cano (D):</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o diâmetro do cano"
          keyboardType="numeric"
          value={diametro}
          onChangeText={text => setDiametro(text)}
        />

        <Text style={styles.label}>Velocidade do fluido (V):</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a velocidade do fluido"
          keyboardType="numeric"
          value={velocidade}
          onChangeText={text => setVelocidade(text)}
        />

        <Button title="Calcular Perda de Carga" onPress={calcularPerdaCarga} />

        <Text style={styles.result}>{perdaCarga}</Text>
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

export default Tela4;
