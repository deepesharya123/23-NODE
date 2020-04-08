const request = require('request');
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bareilly.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'

request({url:geocodeUrl ,json:true}, (error,response)=>{

    if(error){
        console.log("NOT CONNECTED TO IINTERNET")
    }
    else if(response.body.features.length ===0){
        console.log("PLease enter valid location")
    }
    else{
    console.log("Data for "+response.body.features[0].place_name)
    console.log(response.body.features[0].center[0])
    console.log(response.body.features[0].center[1])
    console.log(response.body.features[0].center)
    }
})


const url ='http://api.weatherstack.com/current?access_key=a061a84c8c637a81644720c06c683e1c&query=New%20York'

request({ url : url , json : true }, (error, response) => {
    console.log("Data for "+response.body.request.query)
// console.log(response.body.current.data[0].summary)
// console.log(response.body.current.temperature)    
// console.log(response.body.current.feelslike)
// console.log(data)
    if(error){ console.log("SOmething mihappens",error)
    }
    else if(response.body.error ){
            console.log("all good u chnge the url")
    }
    else{
    console.log(response.body.current.temperature)
    console.log(response.body.current.is_day)
    console.log("Currently temperature is "+response.body.current.temperature +" and the probability of raining is " +response.body.current.precip)

    console.log(`Currently temperature is ${response.body.current.temperature}  and the probability of raining is  ${response.body.current.precip}`)

    console.log(response.body.location.region)
    }
})


