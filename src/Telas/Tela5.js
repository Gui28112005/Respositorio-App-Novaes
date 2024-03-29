import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Linking } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;

export default function Tela5() {
  const handleButtonPress = () => {
    // Abre o site no navegador padrão do dispositivo
    Linking.openURL("https://gruponovaes.com/");
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#007B8F']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.scrollContainer}>
          <View style={styles.content}>
            <Text style={styles.sobreNos}>SOBRE NÓS</Text>
            <Text style={styles.resumo}>
              No ano de 2011 nasceu o Grupo Novaes com o propósito de desenvolver
              soluções nas áreas de saneamento básico e empreendimentos
              imobiliários, atuando com uma equipe multidisciplinar formada por
              profissionais de diversas áreas. Nesses mais de 12 anos de história,
              pudemos atender mais de 135 municípios do estado de São Paulo. Temos
              o orgulho da nossa trajetória e estamos diariamente buscando evoluir
              para entregarmos soluções cada vez mais eficientes aos nossos
              clientes e parceiros, sempre com inovação tecnológica e sustentabilidade
            </Text>
            <TouchableOpacity style={styles.buttonSobre} onPress={handleButtonPress}>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>SAIBA MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 440,
    height: 800,
    resizeMode: "contain",
    marginBottom: 70,
    marginTop: -340,
  },
  luciano: {
    width: 200,
    height: 110,
    resizeMode: "contain",
    marginTop: -380,
  },
  sobreNos: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    height: 620,
  },
  resumo: {
    marginTop: -550,
    fontSize: 16,
    textAlign: "justify",
    paddingHorizontal: 15,
    width: windowWidth * 0.90,
    marginRight: 15,
  },
  buttonSobre: {
    backgroundColor: "#007B8F",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 60,
  }
});
