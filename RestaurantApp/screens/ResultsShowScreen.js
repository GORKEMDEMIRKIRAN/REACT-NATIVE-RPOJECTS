
import { StyleSheet, Text, View,Image ,FlatList} from 'react-native';
import React from 'react';
import { useEffect,useState } from 'react';
import yelp from '../api/yelp';

import AntDesign from '@expo/vector-icons/AntDesign';  //"close" ikonu
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; //"delivery" paket servisi


export default function ResultsShowScreen({route}) {
  const [result,setResult] = useState(null);  // başlangıçta null değer tanımladık.
  const id=route.params.id;

  const getResult = async(id_number) =>{
    // Bu kısımda yelp sorgu atmak için "businesses" sonra "id" gelecek.
    // id göre sorgu atacağız.
    // https://api.yelp.com/v3/businesses/XE45D1tUfjJg1I5AN8cylw  bu şekilde oluyor.
    const response = await yelp.get(`/${id}`);
    // console.log(response.data);
    setResult(response.data);
  };
  // getResult id vererek işlem yaptık.
  useEffect(() => {
    getResult(id);
  },[]);
  if(!result){
    return null;
  }
  // Bu değişkenleri postman sorgulayara görürüz.
  // name=mekanın ismi
  // phone = telefon numarası
  // photos = dükkan içi resimleri array olarak verir.
  // review_count= görüntülenme sayısı
  // attributes içinde menu_url var.
  // restoranları açık ve kapalı olma durumuna göre icon ekleyeceğiz.
  // "is_closed=false" mekan açıktır.
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>
      {
        result.is_closed
        ? <AntDesign name="close" size={24} color="black"/>
        : <MaterialIcons name="delivery-dining" size={24} color="black" />
      }
      </View>
      <FlatList
        // apı kısmına baktığımda görsel göremedim ama yine de yazdım.
        data={result.photos}
        renderItem={({item}) => {
            return (
                <Image 
                    source={{uri:item}}
                    style={styles.image}
                />
            );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    image:{
        height:180,
        margin:10,
        borderRadius:20,
    },
    title:{
        alignSelf:'center',
        fontSize:25,
        marginVertical:10,
    },
    phone:{
        alignSelf:'center',
    },
    icon:{
        alignSelf:'center',
    }
})