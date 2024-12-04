

// expo vector icon indireceğiz.
// npm i @expo/vector-icons
// şimdi import edelim.
// @expo/vector-icons@14.0.4 sitesinden aramak istediklerimizi bakalım.
// bu siteden "search" import edecek koda baktık.

/*
1- Import the ıcon family
  import AntDesign from '@expo/vector-icons/AntDesign';
2- Render the component
  <AntDesign name="search1" size={24} color="black" />
 */


//searh import ettik.
import {AntDesign} from '@expo/vector-icons';


import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

// props olarak değişkenleri buraya geçtik.
export default function SearchBar({Term,onTermChange,onTermSubmit}) {
  const handlePress =() => {
    console.log("tıklandı")
  }
  return (
    <View style={styles.backgroundStyle}>
        {/* Bu kısımda arama ikonunu verdik. */}
      <AntDesign name="search1" size={30} color="black" onPress={handlePress} style={styles.iconStyle}/>
      {/* TextInput verelim kullanıcının aradığını sorgualaması için */}
      <TextInput 
      placeholder='Search'
      autoCorrect={false}
      autoCapitalize='none'
      style={styles.inputStyle}
      value={Term} // yeni yazılan değeri textInput içine atmam lazım.
      onChangeText={onTermChange} // text değiştiğinde
      onEndEditing={onTermSubmit} // aram içine yazma işlemim bittiğimde
      />
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'lightgray',
        flexDirection:'row',
        margin:10,
        height:50,
        alignItems:'center',
        borderRadius:20,
    },
    iconStyle:{
        marginHorizontal:10,
    },
    inputStyle:{
        flex:1,
        fontSize:18,
    }
})