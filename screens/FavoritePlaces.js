import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function FavPlacesListScreen({ navigation }) {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const value = await AsyncStorage.getItem('favoritePlaces')
      setPlaces(JSON.parse(value))
    }
    fetchData()
  }, [])

  return (
    <View>
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text style={styles.title}> {item}</Text>
            </View>
          </View>
        )}
      />
      <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: 'white',
    height: '100%'
  },

  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4c8055'
  }
})
