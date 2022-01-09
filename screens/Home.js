import * as React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.firstContainer}>
      <View style={styles.secondContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={styles.thirdContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Atrações')}>
            <Text style={styles.title}>Ver atrações turísticas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fourthContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Atrações favoritas')}
          >
            <Text style={styles.buttonTitle}>
              Atrações turísticas favoritas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: '#eef8f0',
    height: '100%'
  },

  secondContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  thirdContainer: {
    padding: 50
  },

  fourthContainer: {
    padding: 20
  },

  logo: {
    height: 300,
    width: 300
  },

  title: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#417049'
  },

  buttonTitle: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },

  button: {
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#417049'
  }
})

export default HomeScreen
