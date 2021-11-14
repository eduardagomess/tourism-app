import * as React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.firstContainer}>
        <View style={styles.secondContainer}>
          <Image style={styles.logo} source={require('./assets/logo.png')} />
          <View style={styles.thirdContainer}>
            <TouchableNativeFeedback
              style={styles.button}
              onPress={() => navigate('PlacesList')}
            >
              <Text style={styles.title}>Ver atrações turisticas</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: 'white',
    height: '100%'
  },

  secondContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  thirdContainer: {
    padding: 80
  },

  logo: {
    height: 300,
    width: 300
  },

  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4c8055'
  },

  button: {
    alignItems: 'center',
    padding: 5
  }
})
