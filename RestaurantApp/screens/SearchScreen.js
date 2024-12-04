

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [searchApi,results,errorMessage] = useResults();
  const [term,setTerm]=useState('');
  // console.log(results);
  // Bu fonksiyon verilen ücrete göre gerekli filtrelenmiş bilgileri çeker.
  const filterResultsByPrice = (price) =>{
    return results.filter((result) => {
        return result.price === price;
    });
  }
  return (
    // "₺","₺₺","₺₺₺" en ucuzdan en pahalıya restoranlar böyle işaretlenmiş
    <View style={styles.container}>
        <SearchBar 
            style={styles.searchBarContainer}
            Term={term}
            onTermChange={setTerm}
            onTermSubmit={() =>searchApi(term)}
        />
        {/* Arama sonucunda hatalı aramada mesaj gösterelim. */}
        {
            errorMessage 
            ? <Text>{errorMessage}</Text>
            : (
                <>

                    {
                        results.length == 0
                        ? <></>
                        :(
                            <>
                                <ScrollView style={styles.bodyContainer}>
                                    <ResultsList
                                        title="Ucuz Restoranlar"
                                        results={filterResultsByPrice('₺')}
                                    />
                                    <ResultsList
                                        title="Orta Restoranlar"
                                        results={filterResultsByPrice('₺₺')}
                                    />
                                    <ResultsList
                                        title="İyi Restoranlar"
                                        results={filterResultsByPrice('₺₺₺')}
                                    />
                                    <ResultsList
                                        title="Çok İyi Restoranlar"
                                        results={filterResultsByPrice('₺₺₺₺')}
                                    />
                                </ScrollView>
                            </>
                        )
                    }

                </>
            )
        }


    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    searchBarContainer:{
        flex:1,
    },
    bodyContainer:{
        flex:12,
    }
})