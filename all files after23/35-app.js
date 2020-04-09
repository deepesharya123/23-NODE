setTimeout(() => {
        console.log("print after 2 seconds")
}, 2000);

const names= ['mondey','honey','shive']

const shortname = names.filter((name)=>  name.length<=9  )
console.log(shortname)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude:0,
            longitude:0,
        }
            callback(data)
    }, 2000)

}

geocode('Bareilly',(data)=>{
    console.log(data)
})
