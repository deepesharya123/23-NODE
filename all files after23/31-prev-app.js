const request = require('request');

const url ='http://api.weatherstack.com/current?access_key=a061a84c8c637a81644720c06c683e1c&query=New%20York&lang=es'

request({ url : url , json : true }, (error, response) => {
    
// console.log(response.body.current.data[0].summary)
// console.log(response.body.current.temperature)    
// console.log(response.body.current.feelslike)
// console.log(data)
    console.log(response.body.current.temperature)
    console.log(response.body.current.is_day)
    console.log("Currently temperature is "+response.body.current.temperature +" and the probability of raining is " +response.body.current.precip)

    console.log(`Currently temperature is ${response.body.current.temperature}  and the probability of raining is  ${response.body.current.precip}`)


    console.log(response.body.location.region)
})


// http://api.weatherstack.com/current?access_key=a061a84c8c637a81644720c06c683e1c&query=New%20York


// console.log(response.body.current.data[0].summary)
// console.log(response.body.current.temperature)    
// console.log(response.body.current.feelslike)
// console.log(data)