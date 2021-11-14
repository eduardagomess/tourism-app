import * as React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './Home'
import PlacesListScreen from './PlacesList'
import ContactDetailsScreen from './PlacesDetails'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  PlacesList: { screen: PlacesListScreen },
  // nome do arquivo
  PlacesDetails: { screen: ContactDetailsScreen }
})

const App = createAppContainer(MainNavigator)
export default App
