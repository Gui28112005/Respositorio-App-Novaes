import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Tela7 = () => {
  const [flowRate, setFlowRate] = useState('');
  const [velocity, setVelocity] = useState('');
  const [diameter, setDiameter] = useState('');
  const [result, setResult] = useState(null);

  const calculateDimension = () => {
    // Escolha a função de cálculo de acordo com a necessidade
    const calculatedResult =
      velocity === ''
        ? calculateDiameter(flowRate, Number(velocity))
        : calculateVelocity(Number(flowRate), Number(diameter));
    setResult(calculatedResult.toString());
  };

  const calculateVelocity = (flowRate, diameter) => {
    // Fórmula de Darcy-Weisbach
    const area = Math.PI * (diameter / 2) ** 2;
    const velocity = flowRate / area;
    return velocity;
  };
  

  return (
    <LinearGradient
      colors={['#FFFFFF','#007B8F']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Dimensionamento de Tubo</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFlowRate(text)}
          value={flowRate}
          placeholder="Taxa de Fluxo (m³/s)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setVelocity(text)}
          value={velocity}
          placeholder="Velocidade (m/s)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setDiameter(text)}
          value={diameter}
          placeholder="Diâmetro do Tubo (m)"
          keyboardType="numeric"
        />
        <Button title="Calcular" onPress={calculateDimension} />
        {result !== null && (
          <Text style={styles.result}>Resultado: {result}</Text>
        )}
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
    borderRadius: 15, // Adjust as needed
    overflow: 'hidden', // Ensure gradient does not overflow border
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

export default Tela7;
