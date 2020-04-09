const request = require('request');
const geocode = require('./utils/geocode')
geocode('Kanpur', (error,data) =>{
    console.log("Error ",error),
    console.log("data ",data)
    console.log("data ",data.location)
    
})
