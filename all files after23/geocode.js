const request = require('request');

const  geocode = (address,callback)=>{
    // const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIcomponent(address) + '.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'
    
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'
    
        request({url:geocodeUrl, json:true}, (error,response) =>{
            if(error)  callback("COnnnect to the internet please !!! (-_-)",undefined)
            else if(response.body.features.length===0) callback("Please enter valid location (-_-)",undefined);
    
            else{

                callback(undefined,{
                    latitude : response.body.features[0].center[0],
                    logitude : response.body.features[0].center[1],
                    location : response.body.features[0].place_name
                })

            }
        })
}

module.exports =geocode;