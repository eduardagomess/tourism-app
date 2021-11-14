import * as React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'

export default class PlacesListScreen extends React.Component {
  static navigationOptions = {
    title: 'Atrações Turísticas'
  }

  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    const { navigation } = this.props

    this.focusListener = navigation.addListener('didFocus', () => {
      const jsonContent = require('./places.json')
      this.setState(
        {
          isLoading: false,
          places: jsonContent
        },
        function () {}
      )
    })
  }

  componentWillUnmount() {
    this.focusListener.remove()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    const { navigate } = this.props.navigation
    return (
      // Flatlist has its own ScrollView you can scroll through the list using that so there is no need to put a flatlist into a ScrollView that is why its giving a warning, the both scrollview will clash and one of them (mostly the parent one) works.
      <View style={styles.container}>
        <FlatList
          data={this.state.places}
          renderItem={({ item }) => (
            <View>
              <View style={styles.containerImage}>
                <Image style={styles.imageView} source={{ uri: item.foto }} />
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigate('PlacesDetails', { place: item })}
                >
                  <View style={styles.containerTitle}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.subTitle}>- </Text>
                    <Text> </Text>
                    <Text style={styles.subTitle}>{item.cidade}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <Button title="Voltar" onPress={() => navigate('Home')} />
      </View>
    )
  }
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
  button: {
    alignItems: 'center',
    padding: 5
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
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20
  }
})
