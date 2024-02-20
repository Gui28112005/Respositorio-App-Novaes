import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Tela1 = ({ navigation }) => {
  return (
    <LinearGradient colors={['#FFFFFF', '#007B8F']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../Imagens/estrelaNovaes.png")}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela3')}>
              <Text style={styles.buttonText}>Q/V</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela4')}>
              <Text style={styles.buttonText}>Perda de Carga</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela2')}>
              <Text style={styles.buttonText}>Perimetro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela6')}>
              <Text style={styles.buttonText}>Calculo de Darcy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela7')}>
              <Text style={styles.buttonText}>Dimensionamento de tubulação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela8')}>
              <Text style={styles.buttonText}>Calcular area do circulo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#007B8F',
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center', 
    fontStyle: "italic",
  },
  logo: {
    width: 40,
    height: 100,
    resizeMode: "contain",
    left: 0,
    borderRadius: 200,
    marginTop: 0,
    padding: 60,
  },
  fixedBar: {
    marginTop: 3,
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    justifyContent: "center",
    height: 120,
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
});

export default Tela1;
