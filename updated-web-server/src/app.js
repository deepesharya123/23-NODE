const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicdir  =path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialsPath =  path.join(__dirname,'../tamplates/partials')
// const newaddress = path.join(publicdir,'../src/')

app.set('view engine', 'hbs')
app.set('views',viewspath)
hbs.registerPartials(partialsPath)

// if you are changing the views directory then do following thing
// app.set('views','changed_dirname');
// this will do the same work as views was doing with app.set('view engine');

app.use(express.static(publicdir))

// app.use(express.static(newaddress))

app.get('',(req,res) => {
        res.render('index',{
            title:"Weather App",
            name:"Deepesh Arya"
        })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About page",
        name:"Deepesh Arya"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help Desk",
        name:"Deepesh Arya"
    })
})

app.get('/weather',(req,res)=>{
    res.send([{forecast:"It is hot"},
    {location:"Bareilly"}
    ])
})

app.listen(3000, () =>{ 
    console.log("Listening on port 3000")
})

// app.get('',(req,res)=>{    
//     res.send('<h1>Weather</h1> <h2 style="color:blue" >This is the second tag</h2>  ')
    
// })


// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'Money'
//         },{
//             name:"Honey"
//         },{
//             name:"Shive"
//         }
//     ])
// })

// app.get('/about',(req,res)=>{
//     res.send("<h1>This  is the about page</h1>")
// })
