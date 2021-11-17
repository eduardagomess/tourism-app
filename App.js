import * as React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './screens/Home.js'
import PlacesListScreen from './screens/PlacesList'
import PlacesDetailsScreen from './screens/PlacesDetails'
import FavPlacesListScreen from './screens/FavoritePlaces'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  PlacesList: { screen: PlacesListScreen },
  PlacesDetails: { screen: PlacesDetailsScreen },
  FavoritePlaces: { screen: FavPlacesListScreen }
})

const App = createAppContainer(MainNavigator)
export default App
