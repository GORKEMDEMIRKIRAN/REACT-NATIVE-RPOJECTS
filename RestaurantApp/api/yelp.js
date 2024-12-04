

// Bu kısımda axios ile yelp bağlanacağız.
// yelp developer manage apı yazarak oluşturduğumuz apı bulabiliriz.


import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
       // apı key başına "Bearer" koymayı unutma
      Authorization:
        'Bearer XE8VhHqq-KXuoQYnnoCO7mReO7_j2BOhe4A2JbyKGOlYmaFtLKQblmff3tJAGfyx0TwBPRNo2mL1rVgC1-Pye0BGd1_Jj_KFGjwsYyDGIXjY6S7_1sxSJS3o0rlMZ3Yx',
    },
});