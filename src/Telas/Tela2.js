import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importe LinearGradient
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Tela2 = ({ navigation }) => {
  const [raio, setRaio] = useState('');
  const [perimetro, setPerimetro] = useState('');

  const calcularPerimetro = () => {
    const raioFloat = parseFloat(raio);
    if (!isNaN(raioFloat)) {
      const resultadoPerimetro = 2 * Math.PI * raioFloat;
      setPerimetro(resultadoPerimetro.toFixed(2).toString());
    } else {
      setPerimetro('Entrada inválida');
    }
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#007B8F']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.label}>Raio da tubulação:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o raio"
          value={raio}
          onChangeText={(text) => setRaio(text)}
        />

        <Button title="Calcular Perímetro" onPress={calcularPerimetro} />

        <Text style={styles.resultado}>
          {perimetro !== '' && `Perímetro: ${perimetro}`}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  gradient: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  resultado: {
    marginTop: 16,
    fontSize: 18,
  },
});

export default Tela2;
