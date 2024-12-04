

import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import {useNavigation} from '@react-navigation/native';

export default function ResultsList({title,results}) {

    const navigation=useNavigation();
//   console.log(results);  //btün sonuçları bu parametrede görüyoruz.
  return (
    // FLATLIST horizontal diyerek yatay olarak yatırabiliriz.
    <View style={styles.container}>
       {/* Text değişkeni içierisindeki "title" ile tanımlanan
       ucuz ve pahalı restoranları filtreledik. */}
      <Text style={styles.text}>{title}</Text>  
      <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         data={results}
         renderItem={({item}) => {
            return(
               <TouchableOpacity 
                    onPress={() =>
                      navigation.navigate('ResultsShowScreen',{id:item.id})
                    }
               >
                  <ResultDetail result={item}/>
               </TouchableOpacity>
            );
         }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
        margin:5,
    }
})