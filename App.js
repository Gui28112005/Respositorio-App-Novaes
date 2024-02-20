import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tela1 from "./src/Telas/Tela1.js";
import Tela2 from "./src/Telas/Tela2.js";
import Tela3 from "./src/Telas/Tela3.js";
import Tela4 from "./src/Telas/Tela4.js";
import Tela5 from "./src/Telas/Tela5.js";
import Tela6 from "./src/Telas/Tela6.js";
import Tela7 from "./src/Telas/Tela7.js";
import Tela8 from "./src/Telas/Tela8.js";
import { LinearGradient } from 'expo-linear-gradient'; // Importe LinearGradient
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title:"Ola",
          }}
        />
        <Stack.Screen
          name="Tela1"
          component={Tela1}
          options={{
            title: "Tela 1",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Tela2"
          component={Tela2}
          options={{
            title: "Tela 2",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Tela3"
          component={Tela3}
          options={{
            title: "Tela 3",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Tela4"
          component={Tela4}
          options={{
            title: "Tela 4",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Tela5"
          component={Tela5}
          options={{
            title: "Tela 5",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Tela6"
          component={Tela6}
          options={{
            title: "Tela 6",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Tela7"
          component={Tela7}
          options={{
            title: "Tela 7",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Tela8"
          component={Tela8}
          options={{
            title: "Tela 8",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#FFFFFF', '#007B8F']} style={styles.gradient}>
      <View style={styles.container}>  
        <View style={styles.fixedBar}>
          <Text style={styles.titleText}>Calculos Hidraulicos</Text>
        </View>
        <View style={styles.buttonGroups}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela3')}>
              <Image source={require('./assets/icons8-velocidade-24 1.png')} style={styles.icon} />
              <Text style={styles.buttonText}>Q/V</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela4')}>
              <Image source={require('./assets/icons8-em-baixa-24 1 (1).png')} style={styles.icon} />
              <Text style={styles.buttonText}>Perda de Carga</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela2')}>
              <Image source={require('./assets/icons8-quadrado-48 1 (1).png')} style={styles.icon} />
              <Text style={styles.buttonText}>Perimetro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela6')}>
              <Image source={require('./assets/icons8-pressão-64 1.png')} style={styles.icon} />
              <Text style={styles.buttonText}>Calculo de Darcy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela7')}>
              <Image source={require('./assets/icons8-engrenagem-50 1.png')} style={styles.icon} />
              <Text style={styles.buttonText}>Dimensionamento de tubulação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela8')}>
              <Image source={require('./assets/icons8-régua-50 1.png')} style={styles.icon} />
              <Text style={styles.buttonText}>Calcular area do circulo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  gradient: {
    flex: 1,
  },
  fixedBar: {
    marginTop: 40,
    backgroundColor: "#083C52",
    alignItems: "center", // Centraliza horizontalmente
    justifyContent: "center", // Centraliza verticalmente
    height: 150,
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  titleText: {
    fontSize: 24, // Tamanho do título
    fontWeight: 'bold', // Negrito
    color: '#FFFFFF', // Cor do texto
  },
  logo: {
    width: 220,
    height: 200,
    resizeMode: "contain",
    left: 80,
    borderRadius: 200,
    marginTop: 30,
  },
  buttonGroups: {
    marginTop: 230,
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    margin: 10,
    width: 180,
    paddingVertical: 55,
    paddingHorizontal: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignSelf: 'center',
  },
});
