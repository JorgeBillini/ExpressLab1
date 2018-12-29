const GifsApi = {}
const request = require('request');
GifsApi.getGifs = (search, cb) => {
    const api_key = '44EbA35wm9zpn1pCTa9dnzomGmrJ4n5P';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`;
    request(url, (error,response,body)=>{
        console.log('error:', error); 
          const data =JSON.parse(body);
          let gifArr = [];
          data.data.forEach(element => {
              gifArr.push(element.images.original.url);
          });
          cb(gifArr);

    })

}

module.exports = GifsApi;
//currentGif.images.original.url