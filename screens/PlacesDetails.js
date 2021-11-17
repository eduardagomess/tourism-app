import * as React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native'

export default class PlacesDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados da atração'
  }

  constructor(props) {
    super(props)
    let contact = props.navigation.getParam('place')
    this.state = {
      nome: contact.nome,
      descricao: contact.descricao,
      foto: contact.foto,
      cidade: contact.cidade,
      endereco: contact.endereco,
      telefone: contact.telefone,
      horario: contact.horario,
      site: contact.site,
      ingresso: contact.ingresso
    }
  }

  render() {
    const { navigate } = this.props.navigation
    const {
      nome,
      foto,
      descricao,
      endereco,
      telefone,
      horario,
      site,
      ingresso
    } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Text style={styles.informationName}>{nome}</Text>
        </View>
        <Image style={styles.imageView} source={{ uri: foto }} />
        {descricao && (
          <View style={styles.containerDetails}>
            <Text style={styles.informationData}>{descricao}</Text>
          </View>
        )}

        {endereco && (
          <View>
            <View style={styles.containerDetails}>
              <Image
                style={styles.placeIcon}
                source={require('../assets/place.png')}
              />
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.google.com/maps/search/${endereco}`
                  )
                }
              >
                <Text style={styles.informationData}>{endereco}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {telefone && (
          <View>
            <View style={styles.containerDetails}>
              <Image
                style={styles.logoPhone}
                source={require('../assets/phone.png')}
              />
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${telefone}`)}
              >
                <Text style={styles.informationData}>{telefone}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {horario && (
          <View>
            <View style={styles.containerDetails}>
              <Image
                style={styles.logoHour}
                source={require('../assets/hour.png')}
              />
              <Text style={styles.informationData}>{horario}</Text>
            </View>
          </View>
        )}

        {site && (
          <View>
            <View style={styles.containerDetails}>
              <Image
                style={styles.logoHour}
                source={require('../assets/site.png')}
              />
              <TouchableOpacity onPress={() => Linking.openURL(site)}>
                <Text style={styles.informationData}>{site}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {ingresso && (
          <View>
            <View style={styles.containerDetails}>
              <Image
                style={styles.logoTicket}
                source={require('../assets/tickets.png')}
              />
              <Text style={styles.informationData}>{ingresso}</Text>
            </View>
          </View>
        )}

        <View>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `https://www.youtube.com/results?search_query= ${nome}`
              )
            }
          >
            <View style={styles.containerDetails}>
              <Image
                style={styles.logoVideo}
                source={require('../assets/video.png')}
              />
              <Text style={styles.informationDetails}>Videos da atração</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <Button title="Voltar" onPress={() => navigate('Home')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: '100%',
    backgroundColor: 'white'
  },
  informationName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
    color: '#62926a'
  },
  placeIcon: {
    paddingTop: 10,
    height: 30,
    width: 20
  },
  logoPhone: {
    height: 30,
    width: 30
  },
  logoHour: {
    height: 30,
    width: 35
  },
  logoVideo: {
    height: 30,
    width: 30
  },
  logoTicket: {
    height: 35,
    width: 45
  },
  containerDetails: {
    flexDirection: 'row'
  },

  informationDetails: {
    margin: 10,
    fontSize: 16,
    height: 30,
    fontWeight: 'bold',
    color: '#4c8055'
  },
  informationData: {
    marginBottom: 30,
    marginLeft: 10,
    fontSize: 16,
    flexWrap: 'wrap'
  },
  contactDetailsCidade: {
    paddingTop: 30,
    marginLeft: 10,
    fontSize: 16,
    height: 44,
    fontWeight: 'bold'
  },
  button: {
    padding: 15
  },
  imageView2: {
    height: 50,
    width: '50%'
  },
  imageView: {
    width: '100%',
    height: 100,
    borderRadius: 7,
    marginBottom: 20
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})
