import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/emsi.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>EMSI MAARIF</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>Majdoul</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>NacerAllah </Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    padding: 20,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 200,
  },
schoolName: {
fontSize: 22,
fontWeight: 'bold',
color: '#1f2937',
marginTop: 20, // espace entre image et texte
letterSpacing: 1,
},
  info: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    fontWeight: 'normal',
    color: '#555',
  },
});
