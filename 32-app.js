const request = require('request');
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bareilly.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'

request({url:geocodeUrl ,json:true}, (error,response)=>{

    if(error){
        console.log("NOT CONNECTED TO IINTERNET")
    }
    else if(response.body.error){
        console.log("PLease enter valid location")
    }
    else{
    console.log(response.body.features[0].place_name)
    console.log(response.body.features[0].center[0])
    console.log(response.body.features[0].center[1])
    console.log(response.body.features[0].center)
    }
})

