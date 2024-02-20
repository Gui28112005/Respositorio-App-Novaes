import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Tela6 = () => {
  const [flowRate, setFlowRate] = useState('');
  const [pipeDiameter, setPipeDiameter] = useState('');
  const [pipeLength, setPipeLength] = useState('');
  const [viscosity, setViscosity] = useState('');
  const [density, setDensity] = useState(''); // Nova variável para densidade
  const [result, setResult] = useState(null);

  const calculateDarcy = () => {
    // Realizar o cálculo de Darcy aqui
    const flowArea = Math.PI * Math.pow(pipeDiameter / 2, 2); // Área de fluxo
    const velocity = flowRate / flowArea; // Velocidade
    const reynoldsNumber = velocity * pipeDiameter * density / viscosity; // Número de Reynolds

    // Implementar a lógica completa do cálculo de Darcy aqui,
    // incluindo tratamento de erros e validação de entradas.

    const calculatedResult = reynoldsNumber.toString(); // Resultado do cálculo

    setResult(calculatedResult);
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#007B8F']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Cálculo de Darcy</Text>

        {/* Campos de entrada para taxa de fluxo, diâmetro do tubo, 
            comprimento do tubo, viscosidade e densidade */}

        <TextInput
          style={styles.input}
          onChangeText={text => setFlowRate(text)}
          value={flowRate}
          placeholder="Taxa de Fluxo (m³/s)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={text => setPipeDiameter(text)}
          value={pipeDiameter}
          placeholder="Diâmetro do Tubo (m)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={text => setPipeLength(text)}
          value={pipeLength}
          placeholder="Comprimento do Tubo (m)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={text => setViscosity(text)}
          value={viscosity}
          placeholder="Viscosidade (Pa.s)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={text => setDensity(text)}
          value={density}
          placeholder="Densidade (kg/m³)"
          keyboardType="numeric"
        />

        <Button title="Calcular" onPress={calculateDarcy} />

        {result !== null && <Text style={styles.result}>Resultado: {result}</Text>}
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

export default Tela6;
