
// Bir restorant uygulaması geliştireceğiz.

// bu projede yelp postman ile istek atacağız.
// navigation için gerekli 3 kütüphaneyi kurduk.




import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchScreen from './screens/SearchScreen';
import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ResultsShowScreen from './screens/ResultsShowScreen';

const Stack=createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="SearchScreen" screenOptions={{headerTitle:'Restoran Uygulaması'}}>
         <Stack.Screen name="SearchScreen" component={SearchScreen}/>
         <Stack.Screen name="ResultsShowScreen" component={ResultsShowScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}


