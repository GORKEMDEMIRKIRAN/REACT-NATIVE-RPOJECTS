

import {useEffect,useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results,setResults] = useState([]);  /// başlangıçta boş bir array var.
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {

        try{

            const response = await yelp.get('/search',{
                params:{
                   limit:50,
                   term:searchTerm,
                   location:'Eskişehir',
                },
             });
             setResults(response.data.businesses);
             setErrorMessage('');
        }catch(error){
            setErrorMessage('Bağlantı Hatası');
        }

    };

    useEffect(() => {
        searchApi('Toast');
    },[]);
    
    return [searchApi,results,errorMessage];
};