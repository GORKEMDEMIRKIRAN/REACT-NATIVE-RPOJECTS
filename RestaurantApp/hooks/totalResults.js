

import axios, { all } from 'axios';

const API_KEY='XE8VhHqq-KXuoQYnnoCO7mReO7_j2BOhe4A2JbyKGOlYmaFtLKQblmff3tJAGfyx0TwBPRNo2mL1rVgC1-Pye0BGd1_Jj_KFGjwsYyDGIXjY6S7_1sxSJS3o0rlMZ3Yx';
const BASE_URL='https://api.yelp.com/v3/businesses/search';

const fetchAllBusinesses = async (Term,location) => {
    const LIMIT=50;
    let offset =0;
    let allResults =[];
    let total = null;

    try{
        do{
            const response = await axios.get(BASE_URL,{
                headers:{
                    Authorization:`Bearer ${API_KEY}`
                },
                params:{
                    term:Term,            // toast or burger vb.
                    location: location,   // İstanbul vb.
                    limit:LIMIT,
                    offset:offset,
                },
            });
            if(total === null){
                total=response.data.total;
                console.log(`Toplam mekan sayısı:${total}`);
            }

            allResults=allResults.concat(response.data.businesses);
            offset = offset + LIMIT; // bir sonraki sayfaya geç
        }while(offset<total);

        console.log(`Toplam çekilen mekan:${allResults.length}`);
        return allResults;


    }catch(error){
        console.error('Hata: ',error.response?.data || error.message);
    }
};

export default fetchAllBusinesses('burger', 'İstanbul');