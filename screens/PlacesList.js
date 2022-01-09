import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function PlacesListScreen({ navigation }) {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const jsonContent = await require('../places.json')
      setPlaces(jsonContent)
    }
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <View>
            <View style={styles.containerImage}>
              <Image style={styles.imageView} source={{ uri: item.foto }} />
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Dados da atração', {
                    descricao: item.descricao,
                    foto: item.foto,
                    cidade: item.cidade,
                    endereco: item.endereco,
                    telefone: item.telefone,
                    horario: item.horario,
                    site: item.site,
                    ingresso: item.ingresso
                  })
                }
              >
                <View style={styles.containerTitle}>
                  <Text style={styles.title}>{item.nome}</Text>
                  <Text style={styles.subTitle}>- </Text>
                  <Text> </Text>
                  <Text style={styles.subTitle}>{item.cidade}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.secondContainerImage}>
                <TouchableOpacity
                  onPress={async () => {
                    const placesList = await AsyncStorage.getItem(
                      'favoritePlaces'
                    )
                    const items = placesList ? JSON.parse(placesList) : []
                    if (items.indexOf(item.nome) === -1) {
                      items.push(item.nome)
                      await AsyncStorage.setItem(
                        'favoritePlaces',
                        JSON.stringify(items)
                      )
                    } else {
                      console.log('error')
                    }
                  }}
                >
                  <View style={styles.containerTitle}>
                    <Image
                      style={styles.likeImage}
                      source={require('../assets/like.png')}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={async () => {
                    const placesList = await AsyncStorage.getItem(
                      'favoritePlaces'
                    )
                    const items = placesList ? JSON.parse(placesList) : []
                    if (items.indexOf(item.nome) > -1) {
                      items.splice(items.indexOf(item.nome), 1)
                      await AsyncStorage.setItem(
                        'favoritePlaces',
                        JSON.stringify(items)
                      )
                    } else {
                      console.log('error')
                    }
                  }}
                >
                  <View style={styles.containerTitle}>
                    <Image
                      style={styles.deslikeImage}
                      source={require('../assets/deslike.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    height: '100%'
  },
  imageView: {
    width: '100%',
    height: 100,
    borderRadius: 7
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4c8055'
  },
  subTitle: {
    color: '#4c8055',
    fontSize: 18
  },
  likeImage: {
    marginBottom: 20,
    width: 50,
    height: 40
  },
  deslikeImage: {
    width: 50,
    height: 40
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20
  },
  secondContainerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2,
    marginBottom: 20
  }
})

export default PlacesListScreen
