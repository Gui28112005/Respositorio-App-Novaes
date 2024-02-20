import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Tela8 = () => {
  const [radius, setRadius] = useState('');
  const [result, setResult] = useState(null);

  const calculateArea = () => {
    // Verifica se o raio é um número válido
    if (!isNaN(radius) && parseFloat(radius) >= 0) {
      const area = Math.PI * Math.pow(parseFloat(radius), 2);
      setResult(area.toFixed(2)); // Limita o resultado a duas casas decimais
    } else {
      setResult('Erro: Insira um raio válido');
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF','#007B8F']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora de Área de Círculo</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setRadius(text)}
          value={radius}
          placeholder="Raio do Círculo"
          keyboardType="numeric"
        />
        <Button title="Calcular Área" onPress={calculateArea} />
        {result !== null && <Text style={styles.result}>Área: {result} unidades quadradas</Text>}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 15, // Ajuste conforme necessário
    overflow: 'hidden', // Garante que o degradê não ultrapasse a borda
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Tela8;
