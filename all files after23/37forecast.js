const request = require('request');

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bareilly.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'

//                                       /geocoding/v5/{endpoint}/{longitude},{latitude}.json

// (this is the correct format of accessing the location)    https://api.mapbox.com/geocoding/v5/mapbox.places/79.415,28.364.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1

// const catch = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ a + b+ '?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'

// /geocoding/v5/{endpoint}/{search_text}.json

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}


const forecast = (lotitude,longitude,callback)=>{
const forecasturl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+lotitude+","+longitude+'.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'

    request({url:forecasturl, json:true}, (error,response)=>{
        if(error){
             callback("Check your internet connnection",undefined)
        }
        else if(response.body.features.length===0){
            callback("Please enter valid location for getting the correct data",undefined);
        }
        else{
            callback(undefined,{
                plcaename:response.body.features[0].place_name,
                canter:response.body.features[0].center,
            // location : response.body.features[0].place_name

            })
        }
    })
}

module.exports = forecast
// (wrong)  https://api.mapbox.com/geocoding/v5/mapbox.places/80.33111,26.4725?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'
//(correct) https://api.mapbox.com/geocoding/v5/mapbox.places/79.415,28.364.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1