const forecast = require('./utils/37forecast')
const request = require('request');
const geocode = require('./utils/geocode')



geocode('Kanpur', (error,data) =>{
    console.log("Error ",error),
    console.log("data ",data)
    console.log("data ",data.location)
    
})

forecast(79.41064,28.360994, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })