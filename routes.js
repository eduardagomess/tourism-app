import * as React from 'react'
import FavPlacesListScreen from './screens/FavoritePlaces'
import HomeScreen from './screens/Home'
import PlacesDetailsScreen from './screens/PlacesDetails'
import PlacesListScreen from './screens/PlacesList'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Atrações" component={PlacesListScreen} />
        <Stack.Screen name="Dados da atração" component={PlacesDetailsScreen} />
        <Stack.Screen
          name="Atrações favoritas"
          component={FavPlacesListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
